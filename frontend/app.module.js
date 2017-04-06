import angular from 'angular';
window.angular = angular;
import 'angular-i18n/de-de';
import 'jquery';
import printthis from 'printthis';
window.printthis = printthis;
$.fn.printthis = printthis;
import 'lodash';
import unionWith from 'lodash/unionWith';
_.unionWith = unionWith;

import pickBy from 'lodash/pickBy';
_.pickBy = pickBy;

import sumBy from 'lodash/sumBy';
_.sumBy = sumBy;

import _moment from 'moment';
window.moment = _moment;

import _JsonFn from 'json-fn';
window.JsonFn = _JsonFn;
_JsonFn.stringify = function (obj) {
    return JSON.stringify(obj, function (key, value) {
        var fnBody;
        if (value instanceof Function || typeof value == 'function') {


            fnBody = value.toString();

            if (fnBody.length < 8 || fnBody.substring(0, 8) !== 'function') { //this is ES6 Arrow Function
                return '_NuFrRa_' + fnBody;
            }
            return fnBody;
        }
        if (value instanceof RegExp) {
            return '_PxEgEr_' + value;
        }

        if (typeof key === 'string' && key.charAt(0) === '$' && key.charAt(1) === '$') {
            value = undefined;
        }

        if (key === '$order') {
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
            }
        }
        if (prefix === '_PxEgEr_') {
            return eval(value.slice(8));
        }
        if (prefix === '_NuFrRa_') {
            try {
                return eval(value.slice(8));
            } catch (e) {
            }
        }

        return value;
    });
};

window._transform = {
    transformResponse: d => {
        return JsonFn.parse(d);
    }
};

import 'bootstrap/dist/js/bootstrap';

import components from './components/components.module';
import common from './common/common.module';

angular.module('app', [common, components])
    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.debugInfoEnabled(false);
    }])
    .controller('appCtrl', function () {
    });

angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
});

