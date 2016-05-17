import angular from 'angular';

const module = angular
    .module('components.cmsEditState', [])
    .directive('cmsEditState', directive);

import template from './tpl.html';

directive.$inject = ['cms'];

function directive(cms) {
    controller.$inject = [];
    function controller() {
        const vm = this;
        vm.editState = cms.editState;
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

export default module.name;
