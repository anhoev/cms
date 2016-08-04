import template from './element.control.html';

directive.$inject = ['cms', '$http', '$timeout', 'formService'];
function directive(cms, $http, $timeout, formService) {
    controller.$inject = ['$scope'];

    function controller(scope) {
        const vm = this;
        const {ref, type} = vm.cmsEditor;
        const Type = cms.data.types[type];

        vm.editState = cms.editState;
        vm.showControl = function () {
            vm._showControl = true;
            $timeout(function () {
                vm._showControl = false;
            }, 1000)
        }

        vm.getControlVisible = function () {
            return !vm._showControl &&
                (vm.editState.editMode === Enum.EditMode.ALL ||
                (vm.editState.editMode === Enum.EditMode.VIEWELEMENT && Type.info.isViewElement) ||
                (vm.editState.editMode === Enum.EditMode.DATAELEMENT && !Type.info.isViewElement))
        }

        vm.edit = function (cb) {
            const {ref, type} = vm.cmsEditor;
            formService.edit(ref, type, cb);
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

    function link(scope, element, attr, elementController) {
        scope.menu = [];
        const {vm} = scope;
        const {ref, type} = vm.cmsEditor;
        if (vm.cmsMenu === 'true') {
            scope.menu = [
                ['Edit', () => vm.edit(refresh)],
                ['Remove', function () {
                    vm.remove();
                }],
                ['Remove (in database)', function () {
                    vm.remove();
                    $http.delete(`api/v1/${vm.cmsEditor.type}/${vm.cmsEditor.ref}`).then(() => {
                        elementController.refresh();
                    });
                }],
                ['Add new', function () {
                    $http.get(`/cms-types/${vm.cmsEditor.type}`).then(res => {
                        const Type = cms.data.types[vm.cmsEditor.type];
                        Type.list.unshift(res.data.data);
                        elementController.refresh();
                    })
                }]
            ];
        }
        var Type = cms.data.types[type];
        vm.editorIcon = Type.info.editorIcon;
    }

    return {
        restrict: 'A',
        require: '^^?cmsElement',
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