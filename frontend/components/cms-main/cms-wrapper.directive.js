directive.$inject = ['cms', '$compile', '$http', '$timeout', '$controller'];
function directive(cms, $compile, $http, $timeout, $controller) {

    function link(scope, element) {
        const {vm} = scope;
        const Type = cms.data.types['Wrapper'];
        if (!Type.store) Type.store = {};
        render();

        /*if (!Type.store[vm.cmsWrapper]) {
         $http.get(`/cms-wrappers/${vm.cmsWrapper}`, _transform).then(res => {
         Type.store[vm.cmsWrapper] = res.data;
         render();
         }, () => {
         render();
         })
         } else {
         render();
         }*/

        function render() {
            if (Type.store[vm.cmsWrapper]) {
                const {template, serverFn, fn, serverFnData, controller} = Type.store[vm.cmsWrapper];

                _.assign(scope, {fn: {}, model: vm.element, serverFn: {}, serverFnData});

                _.each(fn, (v, k) => scope.fn[k] = v.bind(scope.model));
                _.each(serverFn, (fn, k) =>fn($http.post, scope, vm.cmsWrapper, k))

                if (controller) $controller(controller, {$scope: scope});

                element.html(template);
            } else {
                const {list, element:_element, Fn:_fn} = vm.element;
                let template;
                if (!list.null) {
                    const {BindType, layout, query} = list;
                    // resolve data before render
                    if (!Types[BindType]._load) {
                        cms.loadElements(BindType, () => render());
                        return;
                    }
                    try {
                        scope.result = query.bind(vm.element)();
                    } catch (e) {
                    }
                    if (!scope.result) scope.result = cms.data.types[BindType].list;
                    scope.type = BindType;
                    if (layout) {
                        scope.layout = layout;
                        template = `
                        <div ng-repeat="element in result track by $index">
                            <div cms-fragment="{{layout.ID}}" model="element"></div>
                        </div>
                        `
                    } else {
                        scope.e = {type: BindType}
                        template = `
                        <br>
                        <div ng-repeat="element in result track by $index">
                            <div cms-element="{type:type,ref:element._id}"></div>
                        </div>
                        `
                    }
                } else if (!_element.null) {
                    const {BindType, layout, model, query} = _element;
                    _.assign(scope, {model, layout, type: BindType});
                    template = `<br><div cms-element="{type:type,ref:vm.element.element.model._id}"></div>`
                }
                if (_fn) {
                    vm.element.fn = _.mapValues(_fn(), f => f.bind(vm.element));
                }
                element.html(template);
            }

            $compile(element.contents())(scope);
        }
    }

    return {
        replace: true,
        restrict: 'A',
        scope: {},
        bindToController: {
            cmsWrapper: '@',
            element: '='
        },
        controller: function () {
        },
        link,
        controllerAs: 'vm'
    };
}

export default directive;