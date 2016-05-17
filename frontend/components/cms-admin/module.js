import angular from 'angular';
import 'angular-ui-bootstrap';
import 'jstree';
import 'jstree-bootstrap-theme/dist/themes/proton/style.min.css'
import 'ng-js-tree';
import 'ui-select';
import 'ui-select/dist/select.min.css';
import cmsContainer from '../cms-container/module'

const module = angular
    .module('components.cmsAdmin', ['ui.bootstrap', 'ngJsTree', 'ui.select', cmsContainer])
    .directive('cmsAdmin', directive);

import template from './tpl.html';

directive.$inject = ['cms', '$http', '$uibModal', '$timeout'];

function directive(cms, $http, $uibModal, $timeout) {
    controller.$inject = [];
    function controller() {
        const vm = this;
        $http.get(`/cms-admin`).then((res)=> {
            vm.openSitemap = function () {
                function modalCtrl($scope, $uibModalInstance) {
                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                    $scope.refresh = function () {
                        $http.get(`/cms-site-map`).then(({data})=> {
                            $scope.tree = [data.tree];
                            $scope.templates = data.templates;
                            $timeout(() => $scope.treeConfig.version++);
                        })
                    }
                    $scope.tree = res.data.tree;
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
                    $scope.selectNode = function (e, select) {
                        $timeout(() => {
                            const node = (select && select.node) ? select.node.original : null;
                            cms.loadElements(node.text, () => {
                                $scope.list = cms.data.types[node.text].list;
                                $scope.node = node;
                            });
                        })
                    }
                    $scope.remove = function (e) {
                        _.remove($scope.list, e);
                    }
                    $scope.add = function () {
                        $http.post(`/cms-types/${$scope.node.text}`).then(res => {
                            $scope.list.unshift(res.data.data);
                        })
                    }
                }

                $uibModal.open({
                    animation: true,
                    template,
                    controller: modalCtrl,
                    windowClass: 'cms-window'
                });
            }
        });
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
