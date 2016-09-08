import template from './importService.html';

function service($http, $timeout, cms, $uibModal) {
    function start() {
        function modalCtrl($scope, $uibModalInstance) {
            $scope.refresh = function () {
                $http.get(`/cms-site-map`).then(({data})=> {
                    $scope.tree = [data.tree];
                    $timeout(() => $scope.treeConfig.version++);
                })
            }
            $scope.refresh();

            $scope.treeConfig = {
                core: {
                    themes: {name: 'proton', responsive: true},
                    animation: true,
                    check_callback: true
                },
                plugins: [],
                version: 1
            }

            $scope.selectNode = function (e, select) {
                const _node = JsonFn.clone((select && select.node) ? select.node.original : null);
                $scope.url = _node.path;
            }

            $scope.choose = function () {
                $uibModalInstance.close($scope.url);
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }

        function typesChooseCtrl($scope, $uibModalInstance, url) {
            $scope.treeConfig = {
                core: {
                    themes: {name: 'proton', responsive: true},
                    animation: true,
                    check_callback: true
                },
                plugins: ["checkbox"],
                version: 1
            }

            $scope.refresh = function () {
                $http.post(`/cms-import/types`, {url}).then(({data})=> {
                    $scope.tree = data.map(type => ({text: type}));
                    $timeout(() => $scope.treeConfig.version++);
                })
            }

            $scope.refresh();

            $scope.selectNode = function (e, select) {
                const _node = JsonFn.clone((select && select.node) ? select.node.original : null);

            }

            $scope.choose = function () {
                let _arr = $scope.treeInstance.jstree(true).get_checked();
                _arr = _arr.map(id => $scope.treeInstance.jstree(true).get_node(id).text);
                $uibModalInstance.close(_arr);
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }

        var modalInstance = $uibModal.open({
            size: 'lg',
            animation: true,
            template,
            controller: modalCtrl
        });


        modalInstance.result.then(function (url) {
            const modal2 = $uibModal.open({
                size: 'lg',
                animation: true,
                template,
                controller: typesChooseCtrl,
                resolve: {url: () => url}
            });
            modal2.result.then((types) => {
                cms.importAll(types, url);
            })
        });
    }

    return {
        start
    }
}

export default service;