controller.$inject = ['$scope'];
function controller($scope) {
    $scope.choice = $scope.to.fields[0].templateOptions.choice;
    $scope.marginTop = $scope.choice ? '0px' : '15px';
    if ($scope.choice) $scope.to.fields[0].templateOptions.noPanel = true;

    $scope.formOptions = {formState: $scope.formState};

    $scope.addNew = function () {
        $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
        $scope.model[$scope.options.key].push({});
    }

    $scope.addNewWithChoice = function (choice) {
        $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
        $scope.model[$scope.options.key].push({choice});
    }

    $scope.copyFields = function (fields) {
        return angular.copy(fields);
    }

    $scope.createFormOptions = ($index) => {
        let path = `${$scope.formState.path}.${$scope.options.key}[${$index}]`;
        if (_.startsWith(path, '.')) path = path.substring(1);
        return {
            formState: {
                path,
                model: $scope.formState.model || $scope.model
            }
        }
    }
}

export default controller;