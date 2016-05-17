controller.$inject = ['$scope', 'cms'];

function controller($scope, cms) {
    const Type = cms.data.types[$scope.formState.model.BindType];
    $scope.to.options = _.map(Type.columns, v => ({name: v, value: v}));
}


export default controller;