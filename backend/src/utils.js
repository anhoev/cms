const path = require('path');
const _ = require('lodash');

module.exports = (cms) => {
    const {app, data: {categories}, utils} = cms;
    const makeSelect = utils.makeSelect = function () {
        return {
            type: 'select',
            templateOptions: {
                options: _.map(arguments, o => ({name: o, value: o}))
            }
        }
    }

    const makeMultiSelect = utils.makeMultiSelect = function () {
        return {
            type: 'bs-grid-select',
            templateOptions: {
                options: _.map(arguments, o => ({name: o, value: o}))
            }
        }
    }
    const makeTypeSelect = utils.makeTypeSelect = function (items, isMultiSelect = true) {
        return {
            type: isMultiSelect ? 'multi-select' : 'select',
            templateOptions: {
                options: _.map(cms.Types, (v, k) => ({name: k, value: k})).concat(items)
            }
        }
    }
    utils.makeStyles = function () {
        return [{
            choice: String,
            backgroundColor: {
                type: String,
                form: {
                    type: 'color',
                    templateOptions: {label: 'bg color', tooltip: 'backgroundColor'}
                }
            },
            color: {type: String, form: {type: 'color'}},
            borderColor: {type: String, form: {type: 'color'}},
            borderWidth: Number,
            borderRadius: String,
            font: String,
            fontSize: String,
            fontStyle: {type: String, form: makeSelect('normal', 'italic')},
            fontWeight: {
                type: String,
                default: 'normal',
                form: makeSelect('100', '200', '300', '400', '500', '600', '700', 'bold', 'normal')
            },
            textAlign: {
                type: String,
                form: makeSelect('left', 'center', 'right')
            },
            textDecoration: {
                type: String,
                form: makeSelect('none', 'line-through', 'underline')
            },
            verticalAlign: {
                type: String,
                form: makeSelect('top', 'center', 'bottom', 'stretch')
            },
            horizontalAlign: {
                type: String,
                form: makeSelect('left', 'center', 'right', 'stretch')
            },
            margin: String,
            marginTop: String,
            marginRight: String,
            marginBottom: String,
            marginLeft: String,
            width: String,
            height: String,
            minWidth: String,
            minHeight: String,
            padding: String,
            paddingTop: String,
            paddingRight: String,
            paddingBottom: String,
            paddingLeft: String,
            visibility: {type: String, form: makeSelect('visible', 'collapse')},
            opacity: Number
        }]
    }

    utils.makeCustomSelect = function (type, fn, whole = false, multiple = false) {
        return {
            type: type, form: {
                type: whole ? 'select-whole' : 'select',
                templateManipulators: {
                    postWrapper: [fn]
                },
                templateOptions: {
                    multiple
                }
            }
        }
    }

}