import angular from 'angular';
import 'angular-ui-bootstrap';
import 'jstree';
import 'jstree-bootstrap-theme/dist/themes/proton/style.min.css'
import 'ng-js-tree';
import 'ui-select';
import 'ui-select/dist/select.min.css';
import cmsContainer from '../cms-main/module'
import cmsElementEdit from '../cms-element-edit/module';
import cmsList from './cms-list';

const module = angular
    .module('components.cmsAdmin', ['ui.bootstrap', 'ngJsTree', 'ui.select', cmsContainer, cmsElementEdit])
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

                $scope.refresh = (onlyChangePage = false) => {
                    $timeout(() => {
                        // number of pages;
                        const queryBuilder = new QueryBuilder();
                        const params = queryBuilder.limit($scope.page.limit).page($scope.page.currentPage).query($scope.node.query).build();

                        cms.loadElements($scope.node.type, () => {
                            var Type = cms.data.types[$scope.node.type];
                            $scope.list = Type.info.alwaysLoad ? Type.list : Type.queryList;
                            Types[$scope.node.type]._load = Enum.Load.NOT;
                        }, params);

                        if (!onlyChangePage) cms.countElements($scope.node.type, (count) => {
                            $scope.page.size = count;
                        }, params);
                    })
                }

                // onclick
                $scope.selectNode = function (e, select) {
                    const _node = JsonFn.clone((select && select.node) ? select.node.original : null);
                    $scope.node = _.get($scope.tree, _node.path);
                    $scope.refresh();
                }


                $scope.remove = function (e) {
                    _.remove($scope.list, e);
                }
                $scope.add = function () {
                    cms.createElement($scope.node.type, {}, model => {
                        formService.edit(model._id, $scope.node.type, () => $scope.refreshList());
                    })
                }

                $scope.export = function () {
                    cms.exportAll();
                }

                $scope.import = function () {
                    cms.importAll();
                }

                $scope.deleteAll = function () {
                    cms.deleteElements();
                }

                // pagination
                $scope.page = {
                    limit: 5,
                    currentPage: 1
                };

                $scope.setItemsPerPage = function (num) {
                    $scope.itemsPerPage = num;
                    $scope.currentPage = 1; //reset to first page
                }

            }

            $uibModal.open({
                animation: true,
                template,
                controller: modalCtrl,
                windowClass: 'cms-window'
            });
        }

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
