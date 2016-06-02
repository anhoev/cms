import angular from 'angular';

const module = angular
    .module('components.cmsEditState', ['ui.select'])
    .directive('cmsEditState', directive);

import template from './tpl.html';

directive.$inject = ['cms'];

function directive(cms) {
    controller.$inject = [];
    function controller() {
        const vm = this;
        vm.editState = cms.editState;
        vm.modes = _.map(Enum.EditMode, (v, k) => ({label: k, value: v}));
        vm.onSelect = function ({value}) {
            if (value === Enum.EditMode.DATAELEMENT) {
                $('body').addClass('cms-data-element');
            } else {
                $('body').removeClass('cms-data-element')
            }
        }
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
