elementDirective.$inject = ['cms', '$compile', '$http', '$timeout', '$controller'];
function elementDirective(cms, $compile, $http, $timeout, $controller) {

    function link(scope, element, attr, controller) {
        const {vm} = scope;
        let {ref, type, containers, binding} = vm.element;
        scope.$on('saveContainersFw', (e, obj) => {
            if (obj.type === type) obj.cb(vm.element.containers)
        });
        scope.$on('restoreContainersFw', (e, obj) => {
            if (obj.type === type) {
                vm.element.containers.length = 0;
                vm.element.containers.push(...obj.containers);
                render();
                cms.updateContainerPage();
            }
        });

        let Type;

        cms.getType(type, ref, model => {
            if (!model) {
                vm.dndMoved();
                cms.updateContainerPage();
                return;
            }
            vm.element.ref = model._id;
            if (!ref) cms.updateContainerPage();
            Type = Types[type];
            render();
        })

        function processBinding(binding, e, template) {
            if (binding.binds) {
                scope.parentModel = binding.parentModel;
                for (const bind of binding.binds) {
                    if (bind.choice === 'model') {
                        const {parentKey, key} = bind.model;
                        scope.$watch(`parentModel.${parentKey}`, () => scope.model[key] = scope.parentModel[parentKey], true);
                    } else if (bind.choice === 'fn') {
                        const {parentKey, key} = bind.fn;
                        scope.model[key] = Types[binding.BindType].fn[parentFn].bind(model);
                    } else if (bind.choice === 'scope') {
                        const {key} = bind.scope;
                        scope.model[key] = e[key].bind(scope.parentModel);
                    } else if (bind.choice === 'array') {
                        const {parentKey} = bind.array;
                        scope.prepareElement = function (item) {
                            const containers = JsonFn.clone(vm.element.containers);
                            Types.Layout.fn.getTreeWithBinding(containers, bind.array.bind, item, binding.BindType);
                            return {type: vm.element.type, ref: vm.element.ref, containers, binding: {}};
                        }
                        template = `
                                <div ng-repeat="item in parentModel.${parentKey} track by $index"
                                     ng-init="e = prepareElement(item)">
                                     <div cms-element="e"></div>
                                </div>`;
                    }
                }
            }
            return template;
        }

        function render() {

            if (vm.inline) {
                scope.cmsInline = vm.inline === 'true';
                reRender();
            } else {
                try {
                    scope.cmsInline = scope.$parent.vm.cmsInline === 'true';

                    scope.$parent.$watch('vm.cmsInline', () => {
                        scope.cmsInline = scope.$parent.vm.cmsInline === 'true';
                        reRender();
                    });
                } catch (e) {
                }
            }

            $timeout(() => scope.$watch('vm.element.ref', (newValue, oldValue) => {
                if (newValue !== oldValue) reRender();
            }), 2000);

            function reRender() {
                ref = vm.element.ref;
                const e = _.find(Type.list, {_id: ref});
                if (binding) {
                    let template = Type.template;
                    scope.model = angular.copy(e);
                    template = processBinding(binding, e, template);
                    element.html(template);
                } else {
                    scope.model = e;
                    element.html(`
                    <div cms-refresh="vm.refresh()"
                         cms-editor="vm.element"
                         cms-remove="vm.dndMoved()"
                         cms-menu="{{cmsInline?'true':'false'}}"
                         ng-class="{'cms-edit-shadow':cmsInline}">
                         ${Type.template}
                    </div>
                    `);
                }

                _render();
            }

            function _render() {
                let {serverFn, controller: ctrl} = Type;
                let fn = JsonFn.clone(Type.fn);
                if (fn) {
                    const _fn = {};
                    _.each(fn, (v, k) => {
                        _fn[k] = v.bind(scope.model);
                    });
                    scope.fn = _fn;
                }

                scope.serverFn = {};
                _.each(serverFn, (fn, k) => {
                    fn.bind(scope.model)($http.post, scope, type, k);
                })
                if (ctrl) $controller(ctrl, {$scope: scope});

                controller.refresh = function () {
                    if (scope.serverFnData) scope.serverFnData = null;
                    render();
                }

                controller.getPath = () => `${vm.path}.containers`;
                controller.getElement = () => vm.element;

                $compile(element.contents())(scope);
            }
        }
    }


    return {
        restrict: 'A',
        replace: true,
        scope: {},
        bindToController: {
            path: '@cmsPath',
            element: '=cmsElement',
            inline: '@inline',
            dndMoved: '&'
        },
        controllerAs: 'vm',
        controller: function () {
        },
        link
    };
}

export default elementDirective;


