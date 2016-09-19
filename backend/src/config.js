'use strict';
const path = require('path');

module.exports = (cms) => {
    const {mongoose, utils:{makeSelect, makeMultiSelect, makeTypeSelect, makeStyles, makeCustomSelect}} = cms;

    const Config = cms.registerSchema({
        type: {type: String, form: {type: 'select-type'}},
        dynamicQuery: [{
            field: [makeCustomSelect(String, function (template, options, scope) {
                scope.$watch('model.type', () => {
                    let {path, model, fields} = scope.formState;
                    const {type} = model;
                    if (type) scope.to.options = _.map(Types[type].paths, v => ({name: v.path, value: v.path}));
                })
                return template;
            })]
        }],
        showFields: makeCustomSelect([String], function (template, options, scope) {
            scope.$watch('model.type', (type) => {
                if (type) {
                    var fields = cms.listColumns(Types[type].form);
                    scope.to.options = _.map(fields, v => ({name: v.label, value: v.value}));
                    if (_.isEmpty(scope.model[options.key])) {
                        scope.model[options.key].push(...fields.map(v => v.value));
                    }
                }
            });
            return template;
        }, false, true),
        showAs: {type: String, form: makeSelect('list', 'table', 'element')},
        query: [{
            choice: String,
            builtIn: makeCustomSelect(String, function (template, options, scope) {
                scope.$watch('model.type', () => {
                    let {path, model, fields} = scope.formState;
                    const {type} = model;
                    if (type) scope.to.options = _.map(Types[type].paths, v => ({name: v.path, value: v.path}));
                })
                return template;
            }),
            dynamic: {type: String, form: {type: 'code'}}
        }]
    }, {
        name: 'Config',
        formatter: `<h4>Config</h4>`,
        title: 'type',
        alwaysLoad: true
    });
}