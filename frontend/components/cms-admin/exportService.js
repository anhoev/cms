import template from './exportService.html';

function service($http, $timeout, cms, $uibModal) {
    function start() {
        function modalCtrl($scope, $uibModalInstance, cms) {
            $scope.data = {
                types: []
            }
            $scope.types = Object.keys(cms.types).map(k => ({name: k, value: k}));

            const types = Object.keys(cms.types).map(k => ({text: k, value: k}));

            $scope.choose = function () {
                $uibModalInstance.close({filename: $scope.filename, types: $scope.data.types});
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };

            $scope.options = {};

            $scope.fields = [{
                key: 'types',
                type: 'tree',
                templateOptions: {
                    label: '',
                    class: 'col-xs-12',
                    options: types
                }
            }]
        }

        var modalInstance = $uibModal.open({
            size: 'lg',
            animation: true,
            template,
            controller: modalCtrl
        });


        modalInstance.result.then(function ({filename, types}) {
            cms.exportAll(filename, types);
        });
    }

    return {
        start
    }
}

export default service;