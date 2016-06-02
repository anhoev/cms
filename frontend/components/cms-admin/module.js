import angular from 'angular';
import 'angular-ui-bootstrap';
import 'jstree';
import 'jstree-bootstrap-theme/dist/themes/proton/style.min.css'
import 'ng-js-tree';
import 'ui-select';
import 'ui-select/dist/select.min.css';
import cmsContainer from '../cms-main/module'
import cmsElementEdit from '../cms-element-edit/module';

const module = angular
    .module('components.cmsAdmin', ['ui.bootstrap', 'ngJsTree', 'ui.select', cmsContainer, cmsElementEdit])
    .directive('cmsAdmin', directive);

import template from './tpl.html';

directive.$inject = ['cms', '$http', '$uibModal', '$timeout', 'formService'];

function directive(cms, $http, $uibModal, $timeout, formService) {
    controller.$inject = [];
    function controller() {
        const vm = this;

        vm.openSitemap = function () {
            function modalCtrl($scope, $uibModalInstance) {
                $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                };
                $scope.refresh = function () {
                    $http.get(`/cms-site-map`).then(({data})=> {
                        $scope.tree = JsonFn.clone([data.tree]);
                        $scope.templates = data.templates;
                        $timeout(() => $scope.treeConfig.version++);
                    })
                }
                
                $http.get(`/cms-admin`).then((res)=> {
                    $scope.tree = (_.filter(res.data.tree, ({type}) => {
                        if (cms.editState.editMode === Enum.EditMode.ALL) return true;
                        if (cms.editState.editMode === Enum.EditMode.VIEWELEMENT) return Types[type].info.isViewElement;
                        if (cms.editState.editMode === Enum.EditMode.DATAELEMENT) return !Types[type].info.isViewElement;
                        return true;
                    }));

                    $timeout(() => $scope.treeConfig.version++);
                });

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

                // onclick
                $scope.selectNode = function (e, select) {
                    $timeout(() => {
                        const node = JsonFn.clone((select && select.node) ? select.node.original : null);
                        if (node.isQuery) {
                            node.columns = $scope.treeInstance.jstree(true).get_node(select.node.parents[select.node.parents.length - 2]).original.columns;
                        }
                        cms.loadElements(node.type, () => {
                            $scope.refreshList = () => $scope.list = !node.isQuery ? cms.data.types[node.type].list : node.query(cms.data.types[node.type].list);
                            $scope.refreshList();
                            $scope.node = node;
                        });
                    })
                }
                $scope.remove = function (e) {
                    _.remove($scope.list, e);
                }
                $scope.add = function () {
                    cms.createModel($scope.node.type, (Type, ref, model) => {
                        formService.edit(ref, $scope.node.type, () => $scope.refreshList());
                    })
                }

                $scope.export = function () {
                    cms.exportAll();
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
