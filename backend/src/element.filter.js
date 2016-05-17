'use strict';
const path = require('path');
const unless = require('express-unless');
const cheerio = require('cheerio');
const _ = require('lodash');

module.exports = (cms) => {
    cms.data.ngEn.push(ng => {
        ng.angular.module('cms.editable', [])
            .directive('cmsEditable', function ($compile) {
                return {
                    restrict: "A",
                    replace: true,
                    scope: {cmsEditable: '='},
                    template: '<span>{{cmsEditable}}</span>'
                }
            })
        ng._modules.push('cms.editable');
    })
}