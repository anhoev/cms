controller.$inject = ['$scope', 'cms'];

function controller($scope, cms) {
    $scope.to.options = _.map(cms.data.types, (v, k) => ({name: k, value: k}));
}


export default controller;