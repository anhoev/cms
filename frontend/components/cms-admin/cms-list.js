import template from './cms-list.html';
directive.$inject = ['cms', 'formService'];

function directive(cms, formService) {
    controller.$inject = [];
    function controller() {
        const vm = this;
    }

    return {
        replace: true,
        restrict: 'A',
        scope: {},
        bindToController: {},
        template,
        controllerAs: 'vm',
        controller
    };
}

export default directive;