import angular from 'angular';

import 'angular-ui-bootstrap';
import formlyTemplate from './editable-formly.html';
import formly from '../formly/module';
import template from './tpl.html';
import common from '../../common/common.module';

const module = angular
    .module('components.cmsEditable', [formly, 'ui.bootstrap', common])
    .directive('cmsEditable', directive)
    .directive('cmsEditableTransclude', cmsEditableTransclude)
    .directive('cmsDirectEditable', cmsDirectEditableDirective)
    .run(run);

run.$inject = ['$templateCache'];
function run($templateCache) {
    $templateCache.put('editable-formly.html', formlyTemplate);
}

directive.$inject = ['cms'];

function directive(cms) {

    function link(scope, element, attrs, elementController) {
        // resolve type and ref
        const {type, ref} = elementController.getElement();

        const {vm} = scope;

        vm.showJson = () => false;

        prepareForm(cms, type, ref, scope);

        scope.$watch('model', v => {
            vm.value = _.get(scope, vm.property)
            vm.isValueUndefined = _.isEmpty(vm.value);
        }, true);

    }

    return {
        require: '^^?cmsElement',
        restrict: 'A',
        scope: {},
        bindToController: {
            property: '@cmsEditable'
        },
        template,
        controllerAs: 'vm',
        controller: function () {
        },
        link: link
    };
}

// inheritance

cmsDirectEditableDirective.$inject = ['cms', '$filter'];

function cmsDirectEditableDirective(cms, $filter) {

    function link(scope, element, attrs, elementController) {
        const {vm} = scope;

        // resolve type and ref
        const {type, ref} = vm;

        var property = vm.property.replace('model.', '');

        const refKey = Types[type].checkAndGetRef(property);

        vm.showJson = () => vm._value instanceof Object && !refKey && !(vm._value instanceof Date);

        scope.$watch('vm._value', v => {
            if (v instanceof Date) {
                vm.value = $filter('date')(v, 'dd-MM-yyyy HH:mm');
            } else {
                vm.value = v && refKey ? v[refKey] : v
            }

            vm.isValueUndefined = typeof vm.value === 'undefined';

        });

        if (!ref) return;

        prepareForm(cms, type, ref, scope);
    }

    return {
        restrict: 'A',
        scope: {},
        bindToController: {
            _value: '=cmsValue',
            property: '@cmsDirectEditable',
            type: '@cmsType',
            ref: '@cmsRef'
        },
        template,
        controllerAs: 'vm',
        controller: function () {
        },
        link: link
    };
}

cmsEditableTransclude.$inject = ['cms', '$timeout'];

function cmsEditableTransclude(cms, $timeout) {

    function link(scope, element, attrs, elementController) {
        // resolve type and ref
        const {type, ref} = elementController.getElement();

        const {vm} = scope;

        vm.showJson = () => false;

        prepareForm(cms, type, ref, scope);

        scope.$watch('model', v => {
            vm.value = _.get(scope, vm.property);
            vm.isValueUndefined = _.isEmpty(vm.value);
        }, true);

        vm.hide = function () {
            $timeout(() => vm.show = false, 1000);
        }
    }

    return {
        require: '^^?cmsElement',
        restrict: 'A',
        scope: {},
        bindToController: {
            property: '@cmsEditableTransclude',
            withEditBtn: '@withEditBtn'
        },
        transclude: true,
        template: `
<span class="cms">
    <span   ng-if="vm.withEditBtn !== 'true'"
            popover-placement="bottom"
            popover-is-open="vm.isOpen"
            uib-popover-template="'editable-formly.html'"
            popover-append-to-body="true"
            style="cursor: pointer">
        <ng-transclude></ng-transclude>
        <span ng-show="vm.isValueUndefined" class="cms-empty-value">
            empty
        </span> 
    </span>
    <span ng-if="vm.withEditBtn === 'true'" style="position: relative">
        <button ng-style="{opacity:vm.show? 1: 0.1}"
                class="btn btn-white btn-xs"
                popover-placement="bottom"
                popover-is-open="vm.isOpen"
                uib-popover-template="'editable-formly.html'"
                popover-append-to-body="true"
                style="position: absolute;z-index: 1000;top:-24px"
                ng-mouseover="vm.show = true" 
                ng-mouseout="vm.hide();">
                   Edit
        </button>
        <ng-transclude 
            ng-mouseover="vm.show = true" 
            ng-mouseout="vm.hide();"
            ></ng-transclude>
        <span ng-show="vm.isValueUndefined" class="cms-empty-value">
            empty
        </span> 
    </span>   
</span>
`,
        controllerAs: 'vm',
        controller: function () {
        },
        link: link
    };
}

function prepareForm(cms, type, ref, scope) {
    const {vm} = scope;

    cms.getType(type, ref, (model) => {
        const {form} = Types[type];
        scope.model = model;

        vm.fields = [cms.findField(form, vm.property.split("\.")[1])];

        vm.fields[0].templateOptions.focus = 'true';

        vm.onSubmit = function () {
            cms.updateElement(type, scope.model);
            vm.isOpen = false;
        }

        vm.options = {formState: {path: ''}}
    })
}

export default module.name;