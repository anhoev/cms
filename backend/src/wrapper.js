'use strict';
const _ = require('lodash');
const path = require('path');
const unless = require('express-unless');
const cheerio = require('cheerio');
const JsonFn = require('json-fn');

module.exports = (cms) => {
    const {app, data: {security}, Q} = cms;
    const Wrapper = cms.registerSchema({
        name: String,
        ID: String,
        list: {
            null: {type: Boolean, default: true, form: {hideExpression: "true"}},
            BindType: {
                type: String, form: {type: 'select-type'}
            },
            layout: {type: cms.mongoose.Schema.Types.ObjectId, ref: 'Layout', autopopulate: true},
            query: {type: String, form: {type: 'code'}}
        },
        element: {
            null: {type: Boolean, default: true, form: {hideExpression: "true"}},
            BindType: {
                type: String, form: {type: 'select-type'}
            },
            model: {
                type: cms.mongoose.Schema.Types.Mixed,
                form: {
                    type: 'select-whole', templateManipulators: {
                        postWrapper: [
                            function (template, options, scope) {
                                scope.$watch('model.BindType', () => {
                                    if (scope.model.BindType) {
                                        try {
                                            const Type = cms.data.types[scope.model.BindType];
                                            scope.to.options = Type.list;
                                            scope.to.labelProp = Type.info.title;
                                            scope.to.wholeObject = true;
                                        } catch (e) {
                                        }
                                    }
                                })
                                return template;
                            }
                        ]
                    }
                }
            },
            layout: {type: cms.mongoose.Schema.Types.ObjectId, ref: 'Layout', autopopulate: true},
            query: {type: String, form: {type: 'code'}}
        },
        Fn: {type: String, form: {type: 'code'}}
    }, {
        name: 'Wrapper',
        formatter: `<div cms-wrapper="{{model.name}}" element="model" server-fn="refServerFn" ></div>`,
        title: 'name',
        mTemplate: `
        <WrapLayout cms-wrapper [name]="model.name" [element]="model"></WrapLayout>
        `,
        isViewElement: false,
        autopopulate: true
    });

    cms.Wrapper = Wrapper;
    Wrapper.list = {};

    app.post('/cms-wrappers/:name/:fn', function*(req, res) {
        const {name, fn} = req.params;
        const args = _.map(JsonFn.clone(req.body, true), v => v);
        const {serverFn} = cms.Wrapper.list[name];
        const result = yield* serverFn[fn](...args);
        res.send(result);
    })

    app.get('/cms-wrappers/:name', function*(req, res) {
        const {name} = req.params;
        const {formatter, formatterUrl, fn = {}, serverFnForClient} = cms.Wrapper.list[name];
        const template = formatter ? formatter : cms.compile(formatterUrl)();
        res.send(JsonFn.stringify({template, serverFn: serverFnForClient, fn}));

    })

    // what to do with template ?
    function registerWrapper(name, {formatter, formatterUrl, fn = {}, serverFn = {}, mTemplate, controller}) {
        _.merge(fn, cms.filters.fn);
        _.merge(serverFn, cms.filters.serverFn);
        const serverFnForClient = {};
        _.each(serverFn, (fn, k) => {
            // copy from types.js , need to extract
            serverFnForClient[k] = function (post, scope, wrapperName, fnName) {
                if (!scope.serverFnData) scope.serverFnData = [];
                scope.serverFn[fnName] = function () {
                    const getFnData = args => _.find(scope.serverFnData,
                        v => JSON.stringify({args: v.args, k: v.k}) === JSON.stringify({args, k: fnName}));
                    const data = getFnData(_.map(arguments, v => v));
                    if (data && data.result) return data.result;
                    if (!data) {
                        scope.serverFnData.push({args: arguments, k: fnName});
                        const args = arguments;
                        post(`/cms-wrappers/${wrapperName}/${fnName}`, arguments)
                            .then(res => {
                                getFnData(args).result = res.data;
                            })
                        return scope.serverFnData.length - 1;
                    }
                };
            }
        })

        const template = formatter ? formatter : cms.compile(formatterUrl)();

        cms.Wrapper.list[name] = {
            formatter, formatterUrl, fn, serverFn, serverFnForClient, mTemplate, template, controller
        };

        Wrapper.findOne({name}, (err, obj) => {
            if (!obj) Wrapper.create({name}).then();
        })

        cms.Types['Wrapper'].store = cms.Types['Wrapper'].store || {};
        cms.Types['Wrapper'].store[name] = {
            fn,
            serverFn: serverFnForClient,
            template,
            controller
        }
    }

    cms.registerWrapper = registerWrapper;
}