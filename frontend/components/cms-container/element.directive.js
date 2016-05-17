import modal from './modal.html';
import controll from './element.control.html';

elementDirective.$inject = ['cms', '$compile', '$http', '$timeout'];
function elementDirective(cms, $compile, $http, $timeout) {

    function link(scope, element) {
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

        cms.getType(type, ref, (_Type, _ref) => {
            if (!_ref) {
                vm.dndMoved();
                cms.updateContainerPage();
                return;
            }
            vm.element.ref = _ref;
            if (!ref) cms.updateContainerPage();
            Type = _Type;
            render();
        })

        function render() {
            scope.cmsInline = scope.$parent.vm.cmsInline === 'true';

            scope.$parent.$watch('vm.cmsInline', () => {
                scope.cmsInline = scope.$parent.vm.cmsInline === 'true';
                reRender();
            });
            $timeout(() => scope.$watch('vm.element.ref', (newValue, oldValue) => {
                if (newValue !== oldValue) reRender();
            }), 2000);

            function reRender() {
                ref = vm.element.ref;
                const e = _.find(Type.list, {_id: ref});
                if (binding) {
                    let template = Type.template;
                    scope.model = angular.copy(e);
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
                    element.html(template);
                } else {
                    scope.model = e;
                    element.html(`
                    <div cms-refresh="vm.refreshFnServer()"
                         cms-editor="vm.element"
                         cms-remove="vm.dndMoved()"
                         cms-menu="{{cmsInline?'true':'false'}}"
                         ng-class="{'cms-edit-shadow':cmsInline}">
                         ${Type.template}
                    </div>
                    `);
                }

                $(element).find('[cms-editable]')
                    .attr({'cms-id': ref, 'cms-type': type});

                _render();
            }

            function _render() {
                let {serverFn} = Type;
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
                    fn($http.post, scope, type, k);
                })

                vm.refreshFnServer = function () {
                    if (scope.serverFnData) scope.serverFnData = [];
                    render();
                }
                scope.$on('refresh', (e, req) => {
                    if (req.type === vm.element.type && !req.finish) {
                        req.finish = true;
                        vm.refreshFnServer();
                    }
                })

                //todo:  cms-containers-data -> cms-container-data
                $(element).find(`[cms-container]`).each(function () {
                    vm.element.containers = vm.element.containers || [];
                    $(this).attr('cms-containers-data', `vm.element.containers`);
                })
                // todo : transfer per attr
                $compile(element.contents())(scope);
            }
        }
    }

    return {
        restrict: 'A',
        replace: true,
        scope: {},
        bindToController: {
            element: '=cmsElement',
            dndMoved: '&'
        },
        controller: function () {
        },
        controllerAs: 'vm',
        link
    };
}

export default elementDirective;