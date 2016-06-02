'use strict';
const path = require('path');
const unless = require('express-unless');
const _ = require('lodash');
require('generator-bind').polyfill();
const JsonFn = require('json-fn');

module.exports = (cms) => {
    cms.data.ngEn.push(ng => {
        ng.angular.module('cms.main', [])
            .directive('cmsElement', function ($compile, $rootScope) {
                return {
                    restrict: "A",
                    // replace: true,
                    scope: {
                        element: '=cmsElement'
                    },
                    controller: function ($scope) {
                        // expose api
                        this.getContainer = name => _.find($scope.element.containers, {name});

                    },
                    link: function (scope, element) {
                        if (!scope.model) {
                            $rootScope.fns.push({
                                fn: function*(scope, element) {
                                    const {type, ref} = scope.element;
                                    const {template, fn, serverFn, Model} = cms.Types[type];
                                    var model = (yield Model.findById(ref)).toJSON();
                                    _.assign(scope, {model, fn, serverFn});

                                    // process ServerFn
                                    convertServerFn(serverFn, scope, $rootScope, serverFnData => {
                                        $rootScope.typesBuilder.setServerFnData(type, serverFnData);
                                    });

                                    element.html(template);
                                    $compile(element.contents())(scope);
                                    $rootScope.typesBuilder.addElement(type, model);
                                }, args: [scope, element]
                            });
                        }
                    }
                }
            })
            .directive('cmsContainer', function ($compile, $rootScope) {
                return {
                    require: '^^?cmsElement',
                    restrict: "A",
                    // replace: true,
                    scope: {
                        name: '@cmsContainer'
                    },
                    template: `<div ng-repeat="element in elements" cms-element="element"></div>`,
                    link: function (scope, element, attrs, elementController) {
                        var container = elementController ? elementController.getContainer(scope.name) : _.find($rootScope.containers, {name: scope.name});
                        scope.elements = container ? container.elements : null;
                        if (!container) {
                            console.warn('there is no container');
                        }
                    }

                }
            })
            .directive('cmsWrapper', function ($compile, $rootScope) {
                return {
                    restrict: "A",
                    replace: true,
                    scope: {
                        name: '@cmsWrapper'
                    },
                    link: function (scope, element) {
                        if (cms.Wrapper.list[scope.name]) {
                            // programmatic wrapper (in code)
                            const {template, fn, serverFn} = cms.Wrapper.list[scope.name];
                            // scope.fn = fn;
                            convertServerFn(serverFn, scope, $rootScope, serverFnData => {
                                $rootScope.typesBuilder.setServerFnDataForWrapper(scope.name, serverFnData)
                            });
                            element.html(template);
                            $compile(element.contents())(scope);
                        } else {
                            // user created wrapper (in database)
                            $rootScope.fns.push({fn: processWrapper, args: [scope, element]});
                        }

                        function* processWrapper(scope, _element) {
                            const model = (yield cms.Types.Wrapper.Model.findOne({name: scope.name})).toJSON();
                            const {list, element, Fn} = model;
                            let template;
                            if (list) {
                                const {BindType, layout, query} = list;

                                // resolve list
                                yield* $rootScope.typesBuilder.getFullList(BindType);

                                if (layout) {
                                    // use default element's template
                                    scope.layout = layout;
                                    template = `
                                    <div ng-repeat="element in result track by $index">
                                        <div cms-fragment="{{layout.ID}}" model="element"></div>
                                    </div>
                                    `
                                } else {
                                    scope.e = {type: BindType}
                                    template = `
                                    <br>
                                    <div ng-repeat="element in result track by $index">
                                        <div cms-element="{type:type,ref:element._id}"></div>
                                    </div>
                                    `
                                }
                            } else if (!element.null) {
                                const {BindType, layout, model, query} = element;
                                _.assign(scope, {model, layout, type: BindType});
                                template = `<br><div cms-element="{type:type,ref:vm.element.element.model._id}"></div>`
                            }
                            _element.html(template);
                            $compile(_element.contents())(scope);
                            $rootScope.typesBuilder.addElement('Wrapper', model);
                        }
                    }
                }
            })


        ng.angular.module('cms.editable', [])
            .directive('cmsEditable', function ($compile, $rootScope) {
                return {
                    restrict: "A",
                    replace: true,
                    scope: {
                        cmsEditable: '='
                    },
                    template: '<span>{{cmsEditable}}</span>'
                }
            })

        ng._modules.push('cms.main', 'cms.editable');
    })

    function convertServerFn(serverFn, scope, $rootScope, cb) {
        scope.serverFnData = [];

        if (serverFn) {
            scope.serverFn = {};
            for (const k  of Object.keys(serverFn)) {
                scope.serverFn[k] = function () {
                    const args = _.map(arguments, v => v);
                    const data = _.find(scope.serverFnData, v => JSON.stringify(v.args) === JSON.stringify(args) && v.k === k);
                    if (!data) {
                        // put into memory to run later
                        scope.serverFnData.push({args, k});

                        $rootScope.fns.push({
                            fn: function*(args, k, serverFn, scope, cb) {
                                const data = _.find(scope.serverFnData, v => JSON.stringify(v.args) === JSON.stringify(args) && v.k === k);
                                data.result = yield* serverFn[k](...args);
                                if (cb) cb(scope.serverFnData);
                            }, args: [args, k, serverFn, scope, cb]
                        });
                    } else {
                        return data.result;
                    }

                }
            }
        }
    }
}