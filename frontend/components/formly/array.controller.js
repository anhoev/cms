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
}

export default controller;