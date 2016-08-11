'use strict';
const path = require('path');
const unless = require('express-unless');
const cheerio = require('cheerio');
const _ = require('lodash');
const _merge = require('extend');
const traverse = require('traverse');
function merge() {
    return _merge(true, ...arguments);
}

module.exports = cms => {
    const {Schema: {Types}, VirtualType} = cms.mongoose;

    const nestedConvert = function (form) {
        if (form.fieldGroup.find(f => f.key === 'choice')) {
            form.templateOptions.choice = form.fieldGroup
                .map(f => f.key).filter(k => k !== 'choice');
            form.fieldGroup.forEach(f => f.hideExpression = 'model.choice !== options.key')
        } else if (form.fieldGroup.find(f => f.key === 'null')) {
            form.templateOptions.null = true;
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
            nestedConvert(defaultOptions.form);
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
        const _schema = traverse(schema).map(function (node) {
            if (node && (node.form === false || node instanceof cms.mongoose.VirtualType)) {
                this.delete();
            }
        });
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
            nestedConvert(defaultOptions.form);
            return defaultOptions.form;
        }

        if (Array.isArray(field.type) && Object.keys(field.type[0]).length > 1) {
            if ((!field.type[0].type && !Object.keys(field.type[0]).length || field.type[0].type)) {
                // if custom form;
                return null;
            }

            let fields = field.form.type === 'tableSection' ? _.map(field.type[0], (nestedField, k) => convertObj(nestedField, k, k)) :
                _.map(field.type, (nestedField, k) => convertObj(nestedField, k, label || key));

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