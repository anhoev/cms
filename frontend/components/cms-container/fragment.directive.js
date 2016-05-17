directive.$inject = ['cms', '$compile', '$timeout'];
export function directive(cms, $compile, $timeout) {

    function link(scope, element) {
        const {vm} = scope;
        const Layout = cms.data.types['Layout'];
        const layout = _.find(Layout.list, layout => layout.ID === vm.fragment);
        let {containers, bind, BindType} = vm.save ? _.find(layout.SAVE, save => save.name === vm.save) : layout.SAVE[0];
        containers = angular.copy(containers);
        Layout.fn.getTreeWithBinding(containers, bind, vm.model, BindType);
        vm.element = {ref: layout._id, type: 'Layout', containers, binding: {}};
        element.html('<div cms-element="vm.element"></div>');
        $compile(element.contents())(scope);
    }

    return {
        restrict: 'A',
        replace: false,
        scope: {},
        bindToController: {
            fragment: '@cmsFragment',
            save: '@',
            model: '='
        },
        controller: function () {
        },
        controllerAs: 'vm',
        link
    };
}
export default directive;

