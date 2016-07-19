controller.$inject = ['$scope'];

function controller($scope) {
    const options = $scope.to.options = [];
    let {path, model} = $scope.formState;
    path = _.dropRight(path.split('\.')).join('.');

    let {containers} = _.get(model, path);
    $scope.to.labelProp = 'Type';
    const map = {};
    $scope.getLabel = selected => selected && selected.ref ? map[selected.ref] : '';

    cms.walkInContainers(containers, (element, e) => {
        options.push({Type: element.type, ref: e._id});
        map[e._id] = `${element.type} : ${e[Types[element.type].info.title]}`;
    })
}


export default controller;