import 'angular-ui-bootstrap';
import 'jstree';
import 'jstree-bootstrap-theme/dist/themes/proton/style.min.css'
import 'ng-js-tree';
import 'ui-select';
import 'ui-select/dist/select.min.css';

const module = angular
    .module('components.cmsSitemap', ['ui.bootstrap', 'ngJsTree', 'ui.select'])
    .directive('cmsSitemap', directive);

import template from './tpl.html';

directive.$inject = ['$http', '$uibModal', '$timeout', 'cms'];

function directive($http, $uibModal, $timeout, cms) {
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
                        $scope.tree = [data.tree];
                        $scope.templates = data.templates;
                        $timeout(() => $scope.treeConfig.version++);
                    })
                }
                $http.get(`/cms-site-map`).then(({data})=> {
                    $scope.tree = [data.tree];
                    $timeout(() => $scope.treeConfig.version++);
                });

                $scope.templates = cms.data.templates;
                $scope.baseUrlPath = cms.data.baseUrlPath;
                $scope.open = function () {
                    location.href = `${$scope.baseUrlPath}/${$scope.node.path}`;
                }
                $scope.template = {};
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
                $scope.onFileSelect = function (files) {
                    //files: an array of files selected, each file has name, size, and type.
                    const [file] = files;
                    cms.uploadFile(file, $scope.node.path, () => {
                        console.log('upload successful');
                        $scope.refresh();
                    })
                }
                $scope.selectNode = function (e, select) {
                    $timeout(() =>
                        $scope.node = (select && select.node) ? select.node.original : null);
                }
                $scope.makeTemplate = function (templateName) {
                    $http.post('/cms-make-template', {path: $scope.node.path, name: templateName})
                        .then(() => {
                            console.log('make template successful');
                            $scope.refresh();
                        })
                }
                $scope.createPage = function (templatePage, pageName) {
                    $http.post('/cms-create-page', {
                        templatePage,
                        path: `${$scope.node.path}${$scope.node.path !== '' ? '/' : ''}${pageName}`
                    })
                        .then(() => {
                            console.log('make template successful');
                            $scope.refresh();
                        })
                }
                $scope.deletePage = function () {
                    $http.post(`/cms-delete-page`, {path: $scope.node.path})
                        .then(() => $scope.refresh())
                }
                $scope.renamePage = function (newPageName) {
                    $http.post(`/cms-rename-page`, {path: $scope.node.path, name: newPageName})
                        .then(() => $scope.refresh())
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
        template: '<button ng-click="vm.openSitemap()" class="btn btn-default navbar-btn">Sitemap</button>',
        controllerAs: 'vm',
        controller
    };
}

export default module.name;
