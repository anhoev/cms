controller.$inject = ['$scope'];
function controller($scope) {
    var unique = 1;

    $scope.formOptions = {formState: $scope.formState};
    $scope.addNew = addNew;

    $scope.copyField = copyField;

    function copyField(field, index) {
        const _field = angular.copy(field);
        _field.key = `${$scope.options.key}[${index}]`;
        return [_field];
    }

    function addNew() {
        $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
        var array = $scope.model[$scope.options.key];
        array.push('');
    }
}

export default controller;