import angular from 'angular';
import 'jquery';
import 'lodash';
import unionWith from 'lodash/unionWith';
_.unionWith = unionWith;

import pickBy from 'lodash/pickBy';
_.pickBy = pickBy;

import _JsonFn from 'json-fn';
window.JsonFn = _JsonFn;
_JsonFn.stringify = function (obj) {
    return JSON.stringify(obj, function (key, value) {
        if (value instanceof Function || typeof value == 'function') {
            return value.toString();
        }
        if (value instanceof RegExp) {
            return '_PxEgEr_' + value;
        }
        if (typeof key === 'string' && key.charAt(0) === '$' && key.charAt(1) === '$') {
            value = undefined;
        }
        if (value && value.hasOwnProperty('isObjectId')) {
            value = value._id;
        }

        return value;
    });
};

_JsonFn.parse = function (str, date2obj) {

    var iso8061 = date2obj ? /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/ : false;

    return JSON.parse(str, function (key, value) {
        var prefix;

        if (typeof value != 'string') {
            return value;
        }
        if (value.length < 8) {
            return value;
        }

        prefix = value.substring(0, 8);

        if (iso8061 && value.match(iso8061)) {
            return new Date(value);
        }
        if (prefix === 'function') {

            try {
                return eval('(' + value + ')');
            } catch (e) {
                console.log(e);
                console.log(value);
            }
        }
        if (prefix === '_PxEgEr_') {
            return eval(value.slice(8));
        }

        return value;
    });
};

window._transform = {transformResponse: d => {
    return JsonFn.parse(d);
}};

import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/js/bootstrap'
/*
import 'bootstrap-sass';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
*/

import components from './components/components.module';
import common from './common/common.module';

angular.module('app', [
        common,
        components
    ])
    .controller('appCtrl', function () {
    });

