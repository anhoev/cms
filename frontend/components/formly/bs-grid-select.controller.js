controller.$inject = ['$scope', '$http'];

function controller($scope, $http) {
    $scope.add = function (item) {
        $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
        $scope.model[$scope.options.key].push(item);
    }
}


export default controller;