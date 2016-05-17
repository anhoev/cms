controller.$inject = ['$scope', 'cms'];

function controller($scope, cms) {
    const {BindType} = $scope.formState.model;
    const Type = cms.data.types[BindType];
    $scope.to.options = _.map(Type.fn, (v, k) => ({name: k, value: k}));
}


export default controller;