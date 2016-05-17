import template from './container.html';
directive.$inject = ['cms', '$timeout'];
function directive(cms, $timeout) {
    function controller() {
        const vm = this;
        let container = vm.cmsContainersData ? _.find(vm.cmsContainersData, c => c.name === vm.cmsContainer) :
            _.find(cms.data.containers, c => c.name === vm.cmsContainer);
        if (!container) {
            container = {
                name: vm.cmsContainer,
                elements: []
            };
            if (vm.cmsContainersData) {
                vm.cmsContainersData.push(container);
            } else {
                cms.data.containers.push(container);
            }
        }
        vm.showControll = function () {
            vm._showControll = true;
            $timeout(function () {
                vm._showControll = false;
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
        replace: false,
        restrict: 'A',
        scope: {},
        bindToController: {
            cmsContainer: '@',
            cmsContainersData: '=',
            cmsContainerTypes: '@',
            cmsInline: '@'
        },
        template,
        controllerAs: 'vm',
        controller
    };
}


export default directive;