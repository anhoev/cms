'use strict';
const path = require('path');

module.exports = (cms) => {
    const {mongoose, utils:{makeSelect, makeMultiSelect, makeTypeSelect, makeStyles, makeCustomSelect}} = cms;

    const Config = cms.registerSchema({
        type: {type: String, form: {type: 'select-type'}},
        dynamicQuery: [{
            field: [String]
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
            builtIn: String,
            dynamic: {type: String, form: {type: 'code'}}
        }]
    }, {
        name: 'Config',
        formatter: `<h4>Config</h4>`,
        title: 'type',
        alwaysLoad: true
    });
}