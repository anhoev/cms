controller.$inject = ['$scope', '$timeout', 'size'];
/**
 *
 * @param {{treeInstance}} $scope
 * @param $timeout
 */
function controller($scope, $timeout) {
    $scope.tree = $scope.options.templateOptions.options;

    $scope.treeConfig = {
        core: {
            themes: {name: 'proton', responsive: true},
            animation: true,
            check_callback: true
        },
        plugins: ["checkbox"],
        checkbox: {
            tie_selection: false
        },
        version: 1
    }

    $timeout(() => $scope.treeConfig.version++);

    $scope.data = {};

    $scope.check = function () {
        $timeout(() => {
            let _arr = $scope.data.treeInstance.jstree(true).get_checked();
            _arr = _arr.map(id => $scope.data.treeInstance.jstree(true).get_node(id).text);
            $scope.model[$scope.options.key] = _arr;
        });
    }
}

export default controller;