'use strict';
const path = require('path');
const unless = require('express-unless');
const cheerio = require('cheerio');
const _ = require('lodash');
require('generator-bind').polyfill();
const JsonFn = require('json-fn');
const autopopulate = require('mongoose-autopopulate');
const traverse = require('traverse');

module.exports = (cms) => {
    const {app, Q} = cms;

    app.get('/cms-types', function*(req, res) {
        res.send(_.map(cms.Types, (v, type) => ({type})));
    })
    app.post('/cms-types/:type/:id/:fn', function*(req, res) {
        const {type, id, fn} = req.params;
        const args = _.map(JsonFn.clone(req.body, true), v => v);
        const {Model, serverFn} = cms.Types[type];
        const obj = yield Model.findById(id).exec();
        const result = yield* serverFn[fn].bind(obj)(...args);
        res.send(isNaN(result) ? result : result + '');
    })

    app.delete('/cms-types/:type', function*(req, res) {
        const {type} = req.params;
        const {Model} = cms.Types[type];
        Model.remove({});
        const result = yield Model.remove({}).exec();
        res.send(result);
    })

    app.post('/cms-types/:type', function*(req, res) {
        const withTemplate = req.query.template === 'true';
        const noElement = req.query.element === 'false';
        const ref = req.query.element;
        const content = req.body;
        const {type} = req.params;
        const {Model, Formatter, FormatterUrl, Form, info, fn, serverFnForClient} = cms.Types[type];

        let obj = noElement ? new Model(content) : (ref ? yield Model.findOne({_id: ref}) : yield Model.create(content));
        let result = {info, fn, serverFn: serverFnForClient};
        result.data = obj;

        if (withTemplate) {
            result.form = Form;
            const $ = cheerio.load(Formatter ? Formatter : cms.compile(FormatterUrl)(obj));
            cms.filters.element.forEach((fn) => fn($, obj));
            result.template = $.html();
            result.fn = fn;
            result.serverFn = serverFnForClient;
            result.info = info;
        }

        res.send(JsonFn.stringify(result));
    })

    /**
     <pre>
     Use to register a new schema
     Cms system will automatic create form, rest backend,
     run filter, mongoose model for the schema and return a model back
     </pre>
     * @example
     <pre><code>
     const Person = cms.registerSchema({
    name: {
        type: String,
        default: 'new name',
        form: {
            type: 'input',
            templateOptions: {
                label: 'NAME'
            }
        }
    },
    girlFriend: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Girl',
        form: {templateOptions: {labelProp: 'name', placeholder: 'Add girl friend'}}
    },
    children: {name: String, old: String},
    hasNested: Boolean
 }, {name: 'Person', formatter: 'person.jade', title: 'name, initSchema: s => s.plugin(autopopulate)});
     </code></pre>
     * @param {mongoose.Schema} schema
     * @param options
     * @param {String} options.name name of model
     * @param {String} options.formatter path to formatter file like model.jade
     * @param {String} options.title title of model
     * @param {Function} [options.initSchema] use to install plugins
     * @returns {Model} Model
     */
    function registerSchema(schema, options) {
        const {
            name, label, formatter, formatterUrl, initSchema, title, fn = {},
            serverFn = {}, tabs, isViewElement = true, mTemplate, admin = {query: []},
            alwaysLoad = false, restifyOptions,
            info = {},
            controller
        } = options;
        cms.filters.schema.forEach((fn) => fn(schema, name));
        if (!(schema instanceof cms.mongoose.Schema)) {
            schema = new cms.mongoose.Schema(schema, {toObject: {virtuals: true}, toJSON: {virtuals: true}});
        }

        if (options.autopopulate) schema.plugin(autopopulate);

        schema.add({_textIndex: {type: String, form: false, index: 'text'}});
        schema.pre('findOneAndUpdate', function (next) {
            let _textIndex = ''
            traverse(this._update).forEach(function (node) {
                if (this.key && !_.includes(['$set', '$setOnInsert', '__v', '_id', 'id'], this.key)) {
                    const _type = schema.path(this.path.filter(p=> p !== '$set' && p !== '$setOnInsert').join('.'));
                    if (_type) {
                        const type = _type.instance;
                        if (type === 'ObjectID') {
                            this.block();
                            _textIndex += node[cms.Types[_type.options.ref].info.title] + ' ';
                        } else if (type === 'Number') {
                            _textIndex += node + ' ';
                        }
                    } else {
                        this.block();
                    }
                } else if (this.key) {
                    this.block();
                }
            })
            this._update._textIndex = _textIndex;
            next();
        });


        //schema.index({'$**': 'text'});

        if (initSchema) initSchema(schema);
        const Model = cms.mongoose.model(name, schema);
        cms.restify.serve(app, Model, _.assign(restifyOptions, {lean: false}));

        _.merge(fn, cms.filters.fn);
        _.merge(serverFn, cms.filters.serverFn);


        cms.Types[name] = {
            schema,
            Model,
            label,
            clear() {
                this.Form = null;
                this.Paths = null;
                this.Queries = null;
            },
            Formatter: formatter,
            FormatterUrl: formatterUrl,
            info: _.assign({
                title,
                isViewElement,
                admin,
                alwaysLoad
            }, info),
            fn,
            serverFn,
            controller,
            get serverFnForClient() {
                if (!this._serverFnForClient) {
                    this._serverFnForClient = {};
                    _.each(serverFn, (fn, k) => {
                        this._serverFnForClient[k] = function (post, scope, type, fnName) {
                            const model = this;
                            if (!scope.serverFnData) scope.serverFnData = [];
                            scope.serverFn[fnName] = function () {
                                const getFnData = args => _.find(scope.serverFnData,
                                    v => JSON.stringify({args: v.args, k: v.k}) === JSON.stringify({args, k: fnName}));
                                const data = getFnData(arguments);
                                if (data && data.result) {
                                    return data.result;
                                }
                                if (!data) {
                                    scope.serverFnData.push({args: arguments, k: fnName});
                                    const args = arguments;
                                    post(`/cms-types/${type}/${model._id}/${fnName}`, arguments).then(res => getFnData(args).result = res.data)
                                    return scope.serverFnData.length - 1;
                                }
                            };
                        }
                    })
                }
                return this._serverFnForClient;
            },
            mTemplate,
            get webType() {
                if (!this.Form) {
                    _.assign(this, cms.utils.initType(schema, tabs, name));
                }

                return {
                    template: this.template,
                    label: this.label,
                    form: this.Form,
                    tabs: tabs,
                    queries: this.Queries,
                    paths: this.Paths,
                    list: [],
                    info: this.info,
                    fn: this.fn,
                    serverFn: this.serverFnForClient,
                    columns: _.map(_.pickBy(this.Model.schema.paths, k =>['id', '_id', '__v', '_textIndex'].indexOf(k) === -1, true), (v, k) => {
                        return v.options && v.options.label ? v.options.label : k;
                    }),
                    store: this.store,
                    controller: this.controller
                }
            },
            getWebTypeWithData: function*() {
                const Type = this.webType;
                Type.list = yield this.Model.find({});
                return Type;
            },
            get template() {
                if (!this.Formatter && !this.FormatterUrl) return '';
                return this.Formatter ? this.Formatter : cms.compile(this.FormatterUrl)();
            }
        };

        // todo: serverFn
        return Model;
    }

    cms.filters.serverFn.link = function*(src) {
        if (!src) return '';
        if (src.indexOf('http://') !== -1) return src;
        return `${cms.data.baseUrlPath}${src[0] === '/' ? '' : '/'}${src}`;
    }

    cms.filters.fn.getWebStyles = function (model) {
        const _styles = {}
        if (model) {
            _.each(model.styles, style => _styles[style.choice] = style[style.choice])
        } else {
            _.each(this.styles, style => _styles[style.choice] = style[style.choice])
        }

        return _styles;
    }

    cms.filters.fn.getStyles = function (model) {
        let styles = '';
        try {
            const _styles = {}
            if (model) {
                model.styles.forEach(style => _styles[style.choice] = style[style.choice])
            } else {
                this.styles.forEach(style => _styles[style.choice] = style[style.choice])
            }
            _.each(_styles, (v, k) => {
                styles += `${_.kebabCase(k)}:${v};`;
            })
        } catch (e) {
        }
        return styles;
    }

    cms.registerSchema = registerSchema;

    // websocket

    app.ws(`/`, function (ws, req) {

        ws.on('error', function (e) {
            console.warn(e);
        })

        ws.on('message', function*({path, params = {}, uuid, model}) {
            const base = '([^\/]*)\/api\/v1\/([^\/]*)';
            const modelQueryTester = new RegExp(`${base}$`);
            const countQueryTester = new RegExp(`${base}\/count$`);
            if (modelQueryTester.test(path)) {
                const [,method,type] = path.match(modelQueryTester);
                if (method === 'get') {
                    if (Object.keys(cms.Types).indexOf(type) !== -1) {
                        let q = cms.Types[type].Model.find(params.query);
                        if (params.populate) {
                            q = q.populate(params.populate);
                        }
                        const result = yield q.sort(params.sort).skip(params.skip).limit(params.limit);
                        ws.send({result, uuid});
                    }
                } else if (method === 'post') {
                    if (Object.keys(cms.Types).indexOf(type) !== -1) {
                        var Model = cms.Types[type].Model;
                        yield Model.findByIdAndUpdate(model._id, _.pickBy(model, (v, k) => k !== '__v', true), {
                            upsert: true,
                            setDefaultsOnInsert: true
                        }).exec();
                        ws.send({result: (yield Model.findById(model._id)), uuid});
                    }
                }
            }
            if (countQueryTester.test(path)) {
                const [,method,modelName] = path.match(countQueryTester);
                if (method === 'get') {
                    if (Object.keys(cms.Types).indexOf(modelName) !== -1) {
                        const result = yield cms.Types[modelName].Model.find(params.query).count(params.query);
                        ws.send({result, uuid});
                    }
                }
            }

            var serverFnPath = /\/cms-types\/([^\/]*)\/([^\/]*)\/([^\/]*)/;
            if (serverFnPath.test(path)) {
                const [type,id,fn] = path.match(serverFnPath);
                const args = params;
                const {Model, serverFn} = cms.Types[type];
                const obj = yield Model.findById(id).exec();
                const result = yield* serverFn[fn].bind(obj)(...args);
                ws.send({result: isNaN(result) ? result : result + '', uuid});
            }
        });
    });
}