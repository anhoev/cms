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
    .run(run);

run.$inject = ['$templateCache'];
function run($templateCache) {
    $templateCache.put('editable-formly.html', formlyTemplate);
}


directive.$inject = ['$http', 'cms', '$window'];

function directive($http, cms, $window) {

    function link(scope, element, attrs, ctrl) {
        const vm = ctrl;
        cms.getType(vm.cmsType,vm.cmsId, Type => {
            const {form} = Type;
            scope.model = _.find(Type.list, {_id: vm.cmsId});
            vm.cmsEditable = vm.cmsProperty && vm.cmsProperty !== '' ? vm.cmsProperty : vm.cmsEditable;
            vm.value = _.get(scope, vm.cmsEditable);
            if (form[0].isTab) {
                form.forEach(({fields}) => {
                    const f = fields.find(f => f.key === vm.cmsEditable.split('\.')[1]);
                    if (f) vm.fields = [f];
                })
            } else {
                vm.fields = [form.find(f => f.key === vm.cmsEditable.split('\.')[1])];
            }
            vm.onSubmit = function () {
                $http.post(`api/v1/${vm.cmsType}/${vm.cmsId}`, _.pick(scope.model, (v, k) => k !== '$data'))
                    .then(function (res) {
                        console.log(res.data);
                    });
                vm.isOpen = false;
            }
            vm.showJson = () => {
                return vm.adminList === 'true' && vm.value instanceof Object;
            }
            scope.adminList = vm.adminList;
        })
    }

    return {
        restrict: 'A',
        scope: {},
        bindToController: {
            cmsEditable: '@',
            cmsValue: '=cmsEditable',
            cmsProperty: '@',
            cmsId: '@',
            cmsType: '@',
            adminList: '@'
        },
        template,
        controllerAs: 'vm',
        controller: function () {
        },
        link: link
    };
}

export default module.name;
