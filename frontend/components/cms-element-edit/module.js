import angular from 'angular';
import formly from '../formly/module';

const module = angular
    .module('components.cmsElementEdit', [formly])
    .directive('cmsElementEdit', directive);

import template from './tpl.html';

directive.$inject = [];

function directive() {
    controller.$inject = [];
    function controller() {
        const vm = this;
        vm.isTab = vm.cmsFields[0].isTab ? true : false;
        vm.fullScreenText = 'Fullscreen';
        vm.changeScreenSize = function(){
            if ($('.cms-window-placeholder').hasClass('cms-window')){
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
            onApply: '&'
        },
        template,
        controllerAs: 'vm',
        controller
    };
}

export default module.name;
