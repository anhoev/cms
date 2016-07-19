controller.$inject = ['$scope'];
function controller($scope) {
    var unique = 1;

    $scope.formOptions = {formState: $scope.formState};
    $scope.addNew = addNew;

    $scope.copyItemOptions = copyItemOptions;

    function copyItemOptions(field) {
        return angular.copy(field);
    }

    function addNew() {
        $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
        var array = $scope.model[$scope.options.key];
        array.push('');
    }

    $scope.createFormState = ($index) => {
        let path = `${$scope.formState.path}.${$scope.options.key}[${$index}]`;
        if (_.startsWith(path, '.')) path = path.substring(1);
        return {
            path,
            model: $scope.formState.model || $scope.model
        }
    }
}

export default controller;