controller.$inject = ['$scope', 'cms'];

function controller($scope, cms) {
    $scope.models = [{[$scope.to.labelProp]: 'None', _id: null}];

    // resolve
    const type = $scope.options.templateOptions.Type;
    cms.loadElements(type, () => {
        $scope.models.push(...Types[type].list);

        if (typeof $scope.model[$scope.options.key] === 'string') {
            $scope.model[$scope.options.key] = _.find($scope.models, {_id: $scope.model[$scope.options.key]});
        }
    })
    
}

export default controller;