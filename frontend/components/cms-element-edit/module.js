import angular from 'angular';
import formly from '../formly/module';

const module = angular
    .module('components.cmsElementEdit', [formly])
    .directive('cmsElementEdit', directive)
    .factory('formService', service);

import template from './tpl.html';

directive.$inject = [];

function directive() {
    controller.$inject = [];
    function controller() {
        const vm = this;
        vm.isTab = vm.cmsFields[0].isTab ? true : false;
        vm.fullScreenText = 'Fullscreen';
        vm.changeScreenSize = function () {
            if ($('.cms-window-placeholder').hasClass('cms-window')) {
                $('.cms-window-placeholder').removeClass('cms-window');
                vm.fullScreenText = 'Fullscreen';
            } else {
                $('.cms-window-placeholder').addClass('cms-window');
                vm.fullScreenText = 'Minimize';
            }
        }

    }

    return {
        replace: true,
        restrict: 'A',
        scope: {},
        bindToController: {
            cmsType: '=',
            cmsModel: '=',
            cmsFields: '=',
            onCancel: '&',
            onSubmit: '&',
            onAdd: '&',
            onApply: '&'
        },
        template,
        controllerAs: 'vm',
        controller
    };
}

service.$inject = ['$http', '$timeout', 'cms', '$uibModal'];
function service($http, $timeout, cms, $uibModal) {
    function edit(ref, type, cb) {

        const Type = Types[type];

        function modalCtrl($scope, $uibModalInstance) {
            $scope.$on('saveContainers', (e, obj) => scope.$emit('saveContainersFw', obj));
            $scope.$on('restoreContainers', (e, obj) => scope.$emit('restoreContainersFw', obj));

            $scope.model = _.find(Type.list, {_id: ref});
            if (!$scope.model) {
                $http.get(`api/v1/${type}/${ref}`)
                    .then((res)=> {
                        Type.list.push(res.data);
                        $scope.model = _.find(Type.list, {_id: ref});
                    });
            }
            $scope.fields = Type.form;
            $scope.type = type;

            const post = () => $http.post(`api/v1/${type}/${ref}`, JsonFn.stringify($scope.model));
            $scope.submit = function () {
                post().then(() => {
                    $uibModalInstance.close();
                    console.log('update element successful');
                }, () => $uibModalInstance.dismiss('cancel'));
            };

            $scope.apply = function () {
                post().then();
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };

            $scope.add = function () {
                $scope.apply()
                cms.createElement(type, {}, model => {
                    $uibModalInstance.close();
                    edit(model._id, type, cb);
                })
            };


        }

        cms.getType(type, ref, () => {
            const modalInstance = $uibModal.open({
                animation: false,
                size: 'lg',
                template: `
                <div cms-element-edit
                     cms-type="type"
                     cms-model="model"
                     cms-fields="fields"
                     on-cancel="cancel()"
                     on-submit="submit()"
                     on-add="add()"
                     on-apply="apply()">
                </div>
                `,
                controller: modalCtrl,
                windowClass: 'cms-window-placeholder'
            });

            if (cb) modalInstance.result.then(() => {
                $timeout(cb, 100);
            });
        })

    }

    return {
        edit
    }
}

export default module.name;
