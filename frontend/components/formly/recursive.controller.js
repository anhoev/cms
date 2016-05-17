controller.$inject = ['$scope'];

function controller($scope) {
    const path  = $scope.to.path;
    const fields = $scope.formState.fields || $scope.fields;
    const field = angular.copy(_.find(fields, {key:path}));
    field.key = $scope.options.key;
    // resolve fields
    $scope._fields = [field];

    // resolve model
    if (!$scope.model[$scope.options.key]) $scope.model[$scope.options.key] = {};
    $scope._model = $scope.model[$scope.options.key];

    // resolve formState;
    $scope._formState = {
        model: $scope.model,
        fields
    }

}

export default controller;