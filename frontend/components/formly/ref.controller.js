import QueryBuilder from "../../common/cms/QueryBuilder";

controller.$inject = ['$scope', 'cms', '$timeout'];

function controller($scope, cms, $timeout) {

    // resolve
    const type = $scope.options.templateOptions.Type;
    $scope.models = [];

    const labelProp = $scope.to.labelProp;

    $scope.config = {
        plugins: ['remove_button'],
        dropdownParent: 'body',
        valueField: '_id',
        labelField: labelProp,
        searchField: [labelProp],
        onChange: function (val) {
            $timeout(function () {
                if (!$scope.to.multiple) {
                    $scope.model[$scope.options.key] = _.find($scope.models, {_id: val});
                } else {
                    $scope.model[$scope.options.key] = val.map(_id => _.find($scope.models, {_id}));
                }
            })
        }
    }

    if ($scope.to.async) {
        $scope.config.load = function (query, callback) {
            const queryBuilder = new QueryBuilder().limit(100).query({_textIndex: new RegExp(query, 'i')});
            cms.loadElements(type, function (list) {
                // $scope.models = list;
                callback(list);
            }, queryBuilder);

        }
    } else {
        cms.loadElements(type, () => {
            $scope.models.push(...Types[type].list);
        })
    }

    if (!$scope.to.multiple) $scope.config.maxItems = 1;

    if ($scope.to.sortField) {
        $scope.config.sortField = $scope.to.sortField;
        $scope.config.score = function (search) {
            return function (item) {
                if (item[$scope.to.labelProp].toLowerCase().indexOf(search.toLowerCase()) === -1) return 0;
                return 1000000 - item[$scope.to.sortField];
            };
        }
    }

    $scope.$watch(`model['${$scope.options.key}']`, () => {
        if ($scope.model[$scope.options.key] && $scope.model[$scope.options.key]._id) {
            $scope._model = $scope.model[$scope.options.key]._id;
        } else if (Array.isArray($scope.model[$scope.options.key]) && $scope.model[$scope.options.key][0]._id) {
            $scope._model = $scope.model[$scope.options.key].map(m => m._id);
        }
    })

}

export default controller;