controller.$inject = ['$scope', 'cms'];

function controller($scope, cms) {
    let {path, model, fields} = $scope.formState;
    path = _.dropRight(path.split('\.')).join('.');

    const {BindType} = _.get(model, path);
    const Type = cms.data.types[BindType];
    $scope.to.options = _.map(Type.fn, (v, k) => ({name: k, value: k}));
}


export default controller;