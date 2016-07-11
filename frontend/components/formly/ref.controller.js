controller.$inject = ['$scope', 'cms'];

function controller($scope, cms) {
    $scope.models = [{[$scope.to.labelProp]: 'None', _id: null}];

    // resolve
    const type = $scope.options.templateOptions.Type;
    cms.loadElements(type, () => {
        $scope.models.push(...Types[type].list);

        if (typeof $scope.model[$scope.options.key] === 'string') {
            $scope.model[$scope.options.key] = _.find($scope.models, {_id: $scope.model[$scope.options.key]});
        } else if (Array.isArray($scope.model[$scope.options.key]) && typeof $scope.model[$scope.options.key][0] === 'string') {
            const _ids = JsonFn.clone($scope.model[$scope.options.key]);
            $scope.model[$scope.options.key] = _.filter($scope.models, ({_id}) => _ids.indexOf(_id) !== -1);
        }
    })

}

export default controller;