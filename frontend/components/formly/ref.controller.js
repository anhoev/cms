controller.$inject = ['$scope', '$http'];

function controller($scope, $http) {
    $scope.models = [{[$scope.to.labelProp]: 'None', _id: null}];
    $http.get(`api/v1/${$scope.options.templateOptions.Type}`).then(({data}) => {
        $scope.models.push(...data);
        // resolve
        if (typeof $scope.model[$scope.options.key] === 'string') {
            $scope.model[$scope.options.key] = _.find($scope.models, {_id: $scope.model[$scope.options.key]});
        }
    })
    $scope.inject = function () {
        if ($scope.model[$scope.options.key]) $scope.model[$scope.options.key].isObjectId = true;
    }
    $scope.inject();
}

export default controller;