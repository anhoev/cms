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
                    if (type) scope.to.options = _.map(cms.listColumns(Types[type].form), v => ({name: v, value: v}));
                })
                return template;
            })]
        }],
        showFields: makeCustomSelect([String], function (template, options, scope) {
            scope.$watch('model.type', (type) => {
                if (type) {
                    var fields = cms.listColumns(Types[type].form);
                    scope.to.options = _.map(fields, v => ({name: v, value: v}));
                    if (_.isEmpty(scope.model[options.key])) {
                        scope.model[options.key].push(...fields);
                    }
                }
            });
            return template;
        }, false, true),
        showAs: {type: String, form: makeSelect('list', 'table')},
        query: [{name: String, filter: {type: String, form: {type: 'code'}}}]
    }, {
        name: 'Config',
        formatter: `<h4>Config</h4>`,
        title: 'type',
        alwaysLoad: true
    });
}