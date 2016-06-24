const path = require('path');
const unless = require('express-unless');

module.exports = (cms) => {
    const {mongoose, utils:{makeSelect, makeMultiSelect, makeTypeSelect, makeStyles, makeCustomSelect}} = cms;

    const Config = cms.registerSchema({
        type: {type: String, form: {type: 'select-type'}},
        dynamicQuery: [{
            field: [makeCustomSelect(String, function (template, options, scope) {
                scope.$watch('model.type', () => {
                    const {type} = scope.$parent.$parent.formState.model;
                    if (type) scope.to.options = _.map(cms.listColumns(Types[type].form), v => ({name: v, value: v}));
                })
                return template;
            })]
        }],
        query: [{name: String, filter: {type: String, form: {type: 'code'}}}]
    }, {
        name: 'Config',
        formatter: `<h4>Config</h4>`,
        title: 'type',
        alwaysLoad: true
    });
}