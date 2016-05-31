import angular from 'angular';

import 'angular-ui-bootstrap';
import formlyTemplate from './editable-formly.html';
import formly from '../formly/module';
import template from './tpl.html';
import common from '../../common/common.module';
import 'ng-json-explorer/dist/angular-json-explorer';
import 'ng-json-explorer/dist/angular-json-explorer.css';

const module = angular
    .module('components.cmsEditable', [formly, 'ui.bootstrap', 'ngJsonExplorer', common])
    .directive('cmsEditable', directive)
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

cmsDirectEditableDirective.$inject = ['cms'];

function cmsDirectEditableDirective(cms) {

    function link(scope, element, attrs, elementController) {
        const {vm} = scope;

        // resolve type and ref
        const {type, ref} = vm;

        var property = vm.property.replace('model.', '');

        const refKey = Types[type].checkAndGetRef(property);

        vm.showJson = () => vm._value instanceof Object && !refKey;

        scope.$watch('vm._value', v => vm.value = v && refKey ? v[refKey] : v);

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

function prepareForm(cms, type, ref, scope) {
    const {vm} = scope;

    cms.getType(type, ref, Type => {
        const {form} = Type;
        scope.model = _.find(Type.list, {_id: ref});

        // todo: create function in utils
        vm.fields = cms.findField(form, vm.property);

        vm.onSubmit = function () {
            cms.updateModel(type, ref, scope.model);
            vm.isOpen = false;
        }
    })
}

export default module.name;