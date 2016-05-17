controller.$inject = ['$scope'];

function controller($scope) {
    $scope.save = () => $scope.$emit('saveContainers', {
        type: 'Layout',
        cb: containers => {
            $scope.model[$scope.options.key] = containers;
        }
    });
    $scope.restore = () => $scope.$emit('restoreContainers', {
        type: 'Layout',
        containers: $scope.model[$scope.options.key]
    });
}

export default controller;