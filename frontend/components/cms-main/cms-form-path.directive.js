directive.$inject = ['cms'];
function directive(cms) {

    return {
        // replace: true,
        restrict: 'A',
        scope: {},
        bindToController: {
            model: '=',
            type: '@',
            path: '@cmsFormPath',
            class: '@?cmsClass'
        },
        template: `
        <formly-form model="vm.model" fields="vm.fields" form="vm.form" options="vm.options"></formly-form>
        `,
        controller: function () {
            const vm = this;

            const Path = _.find(cms.types[vm.type].paths, {path: vm.path});

            if (Path) {
                vm.fields = [angular.copy(_.get(cms.types[vm.type].form, Path.pathInForm))];

                if (vm.class && vm.class !== '') _.merge(vm.fields[0], {templateOptions: {class: vm.class}});
            }



        },
        controllerAs: 'vm'
    };
}

export default directive;