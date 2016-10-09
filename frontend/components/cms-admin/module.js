import 'angular-ui-bootstrap';
import 'jstree';
import 'jstree-bootstrap-theme/dist/themes/proton/style.min.css'
import 'ng-js-tree';
import 'ui-select';
import 'ui-select/dist/select.min.css';
import mainModule from '../cms-main/module'
import cmsElementEdit from '../cms-element-edit/module';
import cmsList from './cms-list';
import _importService from './importService';
import _exportService from './exportService';

const module = angular
    .module('components.cmsAdmin', ['ui.bootstrap', 'ngJsTree', 'ui.select', mainModule, cmsElementEdit])
    .factory('importService', _importService)
    .factory('exportService', _exportService)
    .directive('cmsAdmin', directive)
    .directive('cmsList', cmsList);

import template from './tpl.html';
import QueryBuilder from "../../common/cms/QueryBuilder";

directive.$inject = ['cms', '$uibModal', '$timeout', 'formService', 'importService', 'exportService'];

function directive(cms, $uibModal, $timeout, formService, importService, exportService) {
    controller.$inject = [];
    function controller() {
        const vm = this;

        vm.openSitemap = function () {
            function modalCtrl($scope, $uibModalInstance) {
                $scope.list = [];
                $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                };

                $scope.tree = cms.getAdminList();

                // $timeout(() => $scope.treeConfig.version++);

                $scope.ignoreModelChanges = () => false;
                $scope.treeConfig = {
                    core: {
                        themes: {name: 'proton', responsive: true},
                        animation: true,
                        check_callback: true
                    },
                    plugins: [],
                    version: 1
                }
                $scope.get = _.get;

                $scope.refresh = (onlyChangePage = false, changeAdminList = false) => {
                    $timeout(() => {
                        if (!$scope.node) return;

                        $scope.list.length = 0;
                        $scope.loading = true;

                        $scope.element = {};
                        $timeout(() => {
                            if (changeAdminList) {
                                $scope.tree = cms.getAdminList();
                                $scope.treeConfig.version++;
                            }

                        })

                        let paramsBuilder = new QueryBuilder().part(false).limit($scope.page.limit).page($scope.page.currentPage).query($scope.node.query);
                        _.each($scope.queries, q => {
                            if (q.model) {
                                const val = _.get(q.model, q.form[0].key);
                                if (val && val.hasOwnProperty('_id') && !val._id) return;
                                if (!val) return;

                                if (q.form[0].key === 0 && _.endsWith(q.path, '.field')) q.path = q.path.replace('.field', '');

                                if (q.fn) {
                                    const result = q.fn(val, _.dropRight(q.path.split('\.'), 1).join('\.'), q.path.split('\.').pop());
                                    if (result.populate) {
                                        paramsBuilder.populate(result.populate);
                                    } else if (result.$where) {
                                        paramsBuilder.query(result);
                                    } else {
                                        paramsBuilder.query({[q.path]: result});
                                    }
                                } else if (val.name !== 'None') {
                                    paramsBuilder.query({[q.path]: val._id || val});
                                }
                            }
                        })
                        if (!_.isEmpty($scope.search.text)) {
                            paramsBuilder.search($scope.search.text);
                        }

                        console.time("loadElements");
                        cms.loadElements($scope.node.type, (list) => {
                            $scope.loading = false;
                            console.timeEnd("loadElements");
                            $scope.list.push(...list);

                            if ($scope.showAs.type === 'element') {
                                $scope.selectElement($scope.list[0]._id);
                            }
                        }, paramsBuilder);

                        // number of pages;
                        if (!onlyChangePage) cms.countElements($scope.node.type, (count) => {
                            $scope.page.size = count;
                        }, paramsBuilder);
                    })


                }

                $scope.watchs = [];

                // onclick
                $scope.selectNode = function (e, select) {
                    const _node = JsonFn.clone((select && select.node) ? select.node.original : null);
                    $scope.node = _.get($scope.tree, _node.path);
                    const config = getConfig();


                    $scope.elementClass = cms.types[$scope.node.type].info.elementClass;

                    $scope.showAs.type = 'table';
                    if (config && config.showAs) $scope.showAs.type = config.showAs;


                    $scope.watchs.forEach(listen => listen());
                    $scope.watchs.length = 0;

                    $scope.queries = null;

                    if (config && config.query) {

                        $scope.queries = JsonFn.clone(config.query.filter(q => q.choice === 'builtIn').map(q => q.builtIn).map(k => _.find(cms.types[$scope.node.type].queries, {path: k}) || _.find(cms.types[$scope.node.type].paths, {path: k})), true);

                        $scope.queries.forEach((q, index) => {
                            q.form = !q.form ? [angular.copy(_.get(cms.types[$scope.node.type].form, q.pathInForm))] : [q.form];
                            _.merge(q.form[0], {templateOptions: {class: 'col-xs-3'}});
                            var listen = $scope.$watch(`queries[${index}].model`, function (m1, m2) {
                                if (typeof m2 === 'undefined') return;
                                $scope.refresh();
                            }, true);
                            $scope.watchs.push(listen);
                        });
                    }


                    $scope.refresh();
                }


                $scope.remove = function (e) {
                    _.remove($scope.list, e);
                }
                $scope.add = function () {
                    cms.createElement($scope.node.type, {}, model => {
                        formService.edit(model._id, $scope.node.type, () => $scope.refresh());
                    })
                }
                function getConfig() {
                    return _.find(Types.Config.list, {type: $scope.node.type});
                }

                $scope.setting = function () {
                    const config = getConfig();
                    if (config) {
                        formService.edit(config._id, 'Config', () => $scope.refresh(false, true));
                    } else {
                        cms.getType('Config', null, ({_id}) => {
                            formService.edit(_id, 'Config', () => $scope.refresh(false, true));
                        }, {type: $scope.node.type});
                    }
                }

                $scope.export = function () {
                    exportService.start();
                    //cms.exportAll();
                }

                $scope.import = function () {
                    //cms.importAll();
                    importService.start();
                }

                $scope.deleteAll = function () {
                    cms.deleteElements($scope.node.type, () => $scope.refresh());
                }

                $scope.search = {text: ''};
                // search
                $scope.$watch('search.text', function (tmpStr) {
                    $scope.refresh();
                }, true);

                // pagination
                $scope.page = {
                    limit: 25,
                    currentPage: 1
                };

                $scope.setItemsPerPage = function (num) {
                    $scope.itemsPerPage = num;
                    $scope.currentPage = 1; //reset to first page
                }

                // show as
                $scope.showAs = {
                    type: 'table'
                }

                $scope.getTitle = cms.getTitle;

                $scope.selectElement = function (_id) {
                    $timeout(() => {
                        $scope.element._id = null;
                        $timeout(() => {
                            $scope.element._id = _id;
                        });
                    });
                }

            }

            $uibModal.open({
                animation: true,
                template,
                controller: modalCtrl,
                windowClass: 'cms-window'
            });
        }

        if (cms.data.online.autoOpenAdmin) vm.openSitemap();

    }

    return {
        replace: true,
        restrict: 'A',
        scope: {},
        bindToController: {},
        template: '<a ng-click="vm.openSitemap()">Admin</a>',
        controllerAs: 'vm',
        controller
    };
}

export default module.name;
