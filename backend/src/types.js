'use strict';
const path = require('path');
const unless = require('express-unless');
const cheerio = require('cheerio');
const _ = require('lodash');
require('generator-bind').polyfill();
const JsonFn = require('json-fn');
const autopopulate = require('mongoose-autopopulate');

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
        res.send(result);
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

        let obj = noElement ? new Model() : (ref ? yield Model.findOne({_id: ref}) : yield Model.create(content));
        let result = {info, fn, serverFn: serverFnForClient};
        if (!noElement) result.data = obj;

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
            name, formatter, formatterUrl, initSchema, title, fn = {},
            serverFn = {}, tabs, isViewElement = true, mTemplate, admin= {query: []},
            alwaysLoad = false, restifyOptions
        } = options;
        cms.filters.schema.forEach((fn) => fn(schema, name));
        if (!(schema instanceof cms.mongoose.Schema)) {
            schema = new cms.mongoose.Schema(schema);
        }

        if (options.autopopulate) schema.plugin(autopopulate);

        if (initSchema) initSchema(schema);
        const Model = cms.mongoose.model(name, schema);
        cms.restify.serve(app, Model, restifyOptions);
        _.merge(fn, cms.filters.fn);
        _.merge(serverFn, cms.filters.serverFn);

        cms.Types[name] = {
            schema,
            Model,
            get Form() {
                if (!this._Form) {
                    const _schema = _.pickBy(schema.tree, (v, k) => ['id', '_id', '__v'].indexOf(k) === -1);
                    this._Form = cms.utils.convertForm(_schema, tabs);
                }
                if (cms.filters.form[name]) cms.filters.form[name](this._Form);
                return this._Form;
            },
            clearForm() {
                this._Form = null;
            },
            Formatter: formatter,
            FormatterUrl: formatterUrl,
            info: {
                title,
                isViewElement,
                admin,
                alwaysLoad
            },
            fn,
            serverFn,
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
                                const data = getFnData(_.map(arguments, v => v));
                                if (data && data.result) return data.result
                                if (!data) {
                                    scope.serverFnData.push({args: arguments, k: fnName});
                                    const args = arguments;
                                    post(`/cms-types/${type}/${model._id}/${fnName}`, arguments).then(res => getFnData(args).result = res.data)
                                }
                            };
                        }
                    })
                }
                return this._serverFnForClient;
            },
            mTemplate,
            get webType() {
                return {
                    template: this.template,
                    form: this.Form,
                    list: [],
                    info: this.info,
                    fn: this.fn,
                    serverFn: this.serverFnForClient,
                    columns: _.map(this.Model.schema.tree, (v, k) => {
                        if (v instanceof cms.mongoose.Schema.Types.ObjectId && k !== '_id') {
                            const prop = v.options.form.templateOptions.labelProp;
                            return `${k}.${prop ? prop : ''}`;
                        }
                        return k;
                    }).filter(k =>['id', '_id', '__v'].indexOf(k) === -1),
                    store: this.store
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
}