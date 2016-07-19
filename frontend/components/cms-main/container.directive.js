import template from './container.html';
directive.$inject = ['cms', '$timeout'];
function directive(cms, $timeout) {
    function link(scope, element, attr, elementController) {
        const vm = scope.vm;
        const elementPath = elementController ? elementController.getPath() : null;
        vm.path = `${elementPath ? elementPath + '.' : ''}${vm.name}`;
        const container = cms.getContainer(vm.path);

        vm.showControl = function () {
            vm._showControl = true;
            $timeout(function () {
                vm._showControl = false;
            }, 1000)
        }
        vm.editState = cms.editState;
        vm.elements = container.elements;
        vm.start = type => {
            cms.editState.dragType = type;
        }
        vm.end = function () {
            cms.editState.dragType = null;
            cms.updateContainerPage();
        }
        vm.allowedTypes = vm.cmsContainerTypes ? vm.cmsContainerTypes.split(',') : [];
        vm.highlight = ()=> vm.allowedTypes.indexOf(vm.editState.dragType) !== -1 && !(vm.elements.length > 0 && vm.elements[0].binding);
    }

    return {
        require: '^^?cmsElement',
        replace: false,
        restrict: 'A',
        scope: {},
        bindToController: {
            name: '@cmsContainer',
            cmsContainerTypes: '@',
            cmsInline: '@'
        },
        template,
        controller: function () {
        },
        controllerAs: 'vm',
        link
    };
}


export default directive;