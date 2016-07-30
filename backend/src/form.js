'use strict';
const path = require('path');
const unless = require('express-unless');
const cheerio = require('cheerio');
const _ = require('lodash');
const _merge = require('extend');
function merge() {
    return _merge(true, ...arguments);
}

module.exports = cms => {
    const {Schema: {Types}, VirtualType} = cms.mongoose;

    const nestedConvert = function (defaultOptions) {
        if (defaultOptions.form.fieldGroup.find(f => f.key === 'choice')) {
            defaultOptions.form.templateOptions.choice = defaultOptions.form.fieldGroup
                .map(f => f.key).filter(k => k !== 'choice');
            defaultOptions.form.fieldGroup.forEach(f => f.hideExpression = 'model.choice !== options.key')
        } else if (defaultOptions.form.fieldGroup.find(f => f.key === 'null')) {
            defaultOptions.form.templateOptions.null = true;
        }
    };

    function convertObj(field, k, label) {
        const defaultOptions = {form: {key: k, templateOptions: {label: label ? label : k}}};

        if (field.type) {
            for (const filter of cms.filters.field) {
                let form = filter(field, {key: k, label});
                if (form) return form;
            }
            merge(defaultOptions, field);
            return defaultOptions.form;
        } else if (Object.keys(field).length) {
            // nested
            merge(defaultOptions.form, {wrapper: 'panel', fieldGroup: convert(field)});
            nestedConvert(defaultOptions, field);
            return defaultOptions.form;
        } else {
            for (const filter of cms.filters.field) {
                let form = filter(field, {key: k, label});
                if (form) return form;
            }
            return defaultOptions.form;
        }
    }

    const convert = (schema, tabs) => {
        var _schema = _.pickBy(schema, (field, k) => !(field instanceof cms.mongoose.VirtualType), true);
        const fields = _.map(_schema, (field, k) => {
            // todo: tabs

            if (Array.isArray(field)) {
                const fields = _.map(field, nestedField => convertObj(nestedField, '', k));

                if (field.length === 1 && (!field[0].type && !Object.keys(field[0]).length || field[0].type)) {
                    return {key: k, type: 'array', templateOptions: {btnText: `Add ${k}`, field: fields[0]}};
                }
                return {key: k, type: 'repeatSection', templateOptions: {btnText: `Add ${k}`, fields}};
            } else {
                return convertObj(field, k);
            }


        })

        if (tabs) {
            return _.map(tabs, (tab, i) => {
                const _tab = {title: tab.title, fields: []};
                if (i === 0) {
                    _tab.active = true;
                    _tab.isTab = true;
                }
                merge(tab, {fields: []});
                for (const field of fields) {
                    const inFirstTab = () => {
                        let result = true;
                        tabs.forEach((tab, i) => {
                            if (i !== 0) {
                                if (tab.fields.indexOf(field.key) !== -1 || field.tab === tab.title) result = false;
                            }
                        })
                        return result;
                    }
                    if (field.tab === tab.title || tab.fields.indexOf(field.key) !== -1 || (i === 0 && inFirstTab())) {
                        _tab.fields.push(field);
                    }
                }
                return _tab;
            })
        }

        return fields;
    }

    cms.utils.convertForm = convert;

    cms.filters.field.push((field, {key, label}) => {
        const defaultOptions = {form: {key: key, templateOptions: {label: label ? label : key}}};
        if (field.type === Types.ObjectId) {
            return merge(defaultOptions.form, {
                type: 'refSelect',
                templateOptions: {Type: field.ref, labelProp: cms.Types[field.ref].info.title}
            }, field.form);
        }
        if (field.type === String) {
            return merge(defaultOptions.form, {type: 'input'}, field.form);
        }
        if (field.type === Boolean) {
            return merge(defaultOptions.form, {type: 'checkbox'}, field.form);
        }
        if (field.type === Number) {
            return merge(defaultOptions.form, {type: 'input', templateOptions: {type: 'number'}}, field.form);
        }
        if (field.type === Date) {
            return merge(defaultOptions.form, {type: 'input', templateOptions: {type: 'datetime-local'}}, field.form);
        }

        if (field.type instanceof Object && field.nested) {
            merge(defaultOptions.form, {wrapper: 'panel', fieldGroup: convert(field.type)}, field.form);
            nestedConvert(defaultOptions);
            return defaultOptions.form;
        }

        if (Array.isArray(field.type) && Object.keys(field.type[0]).length > 1) {
            if ((!field.type[0].type && !Object.keys(field.type[0]).length || field.type[0].type)) {
                // if custom form;
                return null;
            }
            const fields = _.map(field.type[0], (nestedField, k) => convertObj(nestedField, k, k));
            return merge({
                key,
                type: 'repeatSection',
                templateOptions: {label: label || key, btnText: `Add ${key}`, fields}
            }, field.form);
        }

        if (field === String) return merge(defaultOptions.form, {type: 'input'});
        if (field === Boolean) return merge(defaultOptions.form, {type: 'checkbox'});
        if (field === Date) return merge(defaultOptions.form, {
            type: 'input',
            templateOptions: {type: 'datetime-local'}
        });
        if (field === Number) return merge(defaultOptions.form, {type: 'input', templateOptions: {type: 'number'}});

    })
}