directive.$inject = ['cms', '$compile', '$http', '$timeout'];
function directive(cms, $compile, $http, $timeout) {

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
                const {template, serverFn, fn} = Type.store[vm.cmsWrapper];
                scope.fn = {};
                scope.model = vm.element;
                _.each(fn, (v, k) => scope.fn[k] = v.bind(scope.model));
                scope.serverFn = {};
                _.each(serverFn, (fn, k) =>fn($http.post, scope, vm.cmsWrapper, k))
                element.html(template);
            } else {
                const {list, element:_element, Fn:_fn} = vm.element;
                let template;
                if (!Type.store[vm.cmsWrapper] && !list.null) {
                    const {BindType, layout, query} = list;
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
                        scope.e = {type:BindType}
                        template = `
                        <br>
                        <div ng-repeat="element in result track by $index">
                            <div cms-element="{type:type,ref:element._id}"></div>
                        </div>
                        `
                    }
                } else if (!Type.store[vm.cmsWrapper] && !_element.null) {
                    const {BindType, layout, model, query} = _element;
                    scope.model = model;
                    scope.layout = layout;
                    scope.type = BindType;
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