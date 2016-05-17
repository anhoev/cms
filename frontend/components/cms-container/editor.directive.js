import modal from './modal.html';
import template from './element.control.html';

directive.$inject = ['cms', '$http', '$timeout', '$uibModal'];
function directive(cms, $http, $timeout, $uibModal) {
    controller.$inject = ['$scope'];

    function controller(scope) {
        const vm = this;
        vm.editState = cms.editState;
        vm.showControll = function () {
            vm._showControll = true;
            $timeout(function () {
                vm._showControll = false;
            }, 1000)
        }
        function modalCtrl($scope, $uibModalInstance) {
            $scope.$on('saveContainers', (e, obj) => scope.$emit('saveContainersFw', obj));
            $scope.$on('restoreContainers', (e, obj) => scope.$emit('restoreContainersFw', obj));

            const {ref, type} = vm.cmsEditor;
            const Type = cms.data.types[type];
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
        }

        vm.edit = function (cb) {
            const {ref, type} = vm.cmsEditor;
            cms.getType(type, ref, () => {
                const modalInstance = $uibModal.open({
                    animation: false,
                    size: 'lg',
                    template: modal,
                    controller: modalCtrl,
                    windowClass: 'cms-window-placeholder'
                });

                if (cb) modalInstance.result.then(() => {
                    $timeout(cb, 100);
                });
            })
        }

        vm.remove = function () {
            vm.cmsRemove();
            cms.updateContainerPage();
        }
        vm.removeByDatabase = function () {
            vm.remove();
            $http.delete(`api/v1/${vm.cmsEditor.type}/${vm.cmsEditor.ref}`).then(() => {
                _.remove(Types[vm.cmsEditor.type].list, {_id: vm.cmsEditor.ref})
                vm.refresh();
            });
        }

        vm.refresh = function () {
            scope.$emit('refresh', {type: 'Wrapper', finish: false});
        }

    }

    function link(scope, element) {
        scope.menu = [];
        const {vm} = scope;
        if (vm.cmsMenu === 'true') {
            const _refresh1 = scope.$parent.$parent.$parent.vm.refreshFnServer;
            const _refresh2 = scope.$parent.$parent.vm.refreshFnServer;
            const refresh = () => {
                if (_refresh2) return _refresh1()
                if (_refresh1) _refresh1()
            };
            scope.menu = [
                ['Edit', () => vm.edit(refresh)],
                ['Remove', function () {
                    vm.remove();
                }],
                ['Remove (in database)', function () {
                    vm.remove();
                    $http.delete(`api/v1/${vm.cmsEditor.type}/${vm.cmsEditor.ref}`).then(() => {
                        refresh();
                    });
                }],
                ['Add new', function () {
                    $http.get(`/cms-types/${vm.cmsEditor.type}`).then(res => {
                        const Type = cms.data.types[vm.cmsEditor.type];
                        Type.list.unshift(res.data.data);
                        refresh();
                    })
                }]
            ];

            /*if (element.attr('cms-editor-compiled') !== 'true') {
             element.removeAttr('ng-repeat');
             element.attr('cms-editor-compiled', 'true');

             }*/
        }

    }

    return {
        restrict: 'A',
        scope: {},
        bindToController: {
            cmsEditor: '=',
            cmsRemove: '&',
            cmsRefresh: '&',
            cmsMenu: '@',
            cmsTemplate: '='
        },
        controller,
        link,
        controllerAs: 'vm',
        transclude: true,
        template
    };
}

export default directive;