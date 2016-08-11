import angular from 'angular';
import 'angular-ui-bootstrap';
import 'jstree';
import 'jstree-bootstrap-theme/dist/themes/proton/style.min.css'
import 'ng-js-tree';
import 'ui-select';
import 'ui-select/dist/select.min.css';
import mainModule from '../cms-main/module'
import cmsElementEdit from '../cms-element-edit/module';
import cmsList from './cms-list';

const module = angular
    .module('components.cmsAdmin', ['ui.bootstrap', 'ngJsTree', 'ui.select', mainModule, cmsElementEdit])
    .directive('cmsAdmin', directive)
    .directive('cmsList', cmsList);

import template from './tpl.html';
import QueryBuilder from "../../common/cms/QueryBuilder";

directive.$inject = ['cms', '$uibModal', '$timeout', 'formService'];

function directive(cms, $uibModal, $timeout, formService) {
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
                    if (!$scope.node) return;

                    $scope.list.length = 0;
                    $scope.element = {};
                    $timeout(() => {
                        if (changeAdminList) {
                            $scope.tree = cms.getAdminList();
                            $scope.treeConfig.version++;
                        }

                    })

                    const paramsBuilder = new QueryBuilder().part(false).limit($scope.page.limit).page($scope.page.currentPage).query($scope.node.query);
                    if (!_.isEmpty($scope.search.text)) {
                        paramsBuilder.search($scope.search.text);
                    }

                    console.time("loadElements");
                    cms.loadElements($scope.node.type, (list) => {
                        console.timeEnd("loadElements");
                        var Type = cms.data.types[$scope.node.type];
                        $scope.list.push(...list);
                    }, paramsBuilder);

                    // number of pages;
                    if (!onlyChangePage) cms.countElements($scope.node.type, (count) => {
                        $scope.page.size = count;
                    }, paramsBuilder);

                }

                // onclick
                $scope.selectNode = function (e, select) {
                    const _node = JsonFn.clone((select && select.node) ? select.node.original : null);
                    $scope.node = _.get($scope.tree, _node.path);

                    const config = getConfig();
                    $scope.showAs.type = 'table';
                    if (config && config.showAs) $scope.showAs.type = config.showAs;

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
                    cms.exportAll();
                }

                $scope.import = function () {
                    cms.importAll();
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
