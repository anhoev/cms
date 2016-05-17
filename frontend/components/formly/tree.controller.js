controller.$inject = ['$scope', '$timeout', 'size'];
/**
 *
 * @param {{treeInstance}} $scope
 * @param $timeout
 */
function controller($scope, $timeout, size) {
    $scope.size = size;
    $scope.tree = $scope.options.templateOptions.options;
    function injectStatus(tree) {
        if (Array.isArray(tree)) {
            tree.forEach(child => injectStatus(child));
        } else {
            if (_.find($scope.model[$scope.options.key], p => p === tree.path)) {
                tree.state = {checked: true}
            } else {
                tree.state = {checked: false}
            }
            _.each(tree.children, child => injectStatus(child));
        }
    }

    injectStatus($scope.tree);

    $scope.treeConfig = {
        core: {
            themes: {name: 'proton', responsive: true},
            animation: true,
            check_callback: true
        },
        plugins: ['checkbox'],
        checkbox: {
            tie_selection: false
        },
        version: 1
    }
    $scope.check = function () {
        $timeout(() => {
            let _arr = $scope.treeInstance.jstree(true).get_checked();
            _arr = _arr.map(id => $scope.treeInstance.jstree(true).get_node(id));
            $scope.model[$scope.options.key] = _arr.map(node => node.original.path);
        });
    }
    $scope.clear = function () {
        $scope.model[$scope.options.key] = [];
        injectStatus($scope.tree);
        $scope.treeConfig.version++;
    }
}

export default controller;