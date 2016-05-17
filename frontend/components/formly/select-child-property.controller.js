controller.$inject = ['$scope', 'cms', '$timeout'];

function controller($scope, cms, $timeout) {
    function getProperties() {
        try {
            const Type = cms.data.types[$scope.model.child.Type];
            $scope.to.options = _.map(Type.columns, v => ({name: v, value: v}));
        } catch (e) {
        }
    }

    getProperties();
    $timeout(()=> {
        $scope.$watch('model.child.Type', () => {
            getProperties();
        })
    }, 200);

}


export default controller;