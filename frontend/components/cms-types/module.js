import angular from 'angular';
import 'angular-drag-and-drop-lists';

const module = angular
    .module('components.cmsTypes', ['dndLists'])
    .directive('cmsTypes', directive);

import template from './tpl.html';

directive.$inject = ['cms', '$http'];

function directive(cms, $http) {
    controller.$inject = [];
    function controller() {
        const vm = this;
        vm.types = _.map(Types,(v,k) => ({type:k}));

        /*
        dedicated;
        $http.get('/cms-types').then(function (res) {
            vm.types = res.data;
        });
        */
        vm.selectType = function (type) {
            cms.loadElements(type, () => {
                vm.list = cms.data.types[type].list;
                vm._type = type;
            });
        }
        vm.convert = function (element) {
            return {
                type: vm._type,
                ref: element._id,
                containers: []
            }
        }
        vm.getTitle = function (element) {
            return _.get(element, cms.data.types[vm._type].info.title)
        }
        vm.end = function () {
            cms.updateContainerPage();
            cms.editState.dragType = null;
        }
        vm.start = type => {
            cms.editState.dragType = type;
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
