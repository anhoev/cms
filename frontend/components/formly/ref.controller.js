import QueryBuilder from "../../common/cms/QueryBuilder";

controller.$inject = ['$scope', 'cms', '$timeout', 'formService'];

function controller($scope, cms, $timeout, formService) {

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
        },
        onInitialize: function (selectize) {
            $scope.selectize = selectize
        }
    }

    if ($scope.to.async) {
        $scope.config.load = function (query, callback) {
            const queryBuilder = new QueryBuilder().limit(100).query({_textIndex: $scope.to.makeRegex ? $scope.to.makeRegex(query) : new RegExp(query, 'i')});
            cms.loadElements(type, function (list) {
                // $scope.models = list;
                callback(list);
            }, queryBuilder);

        }
    } else if ($scope.to.showWithQuery) {
        $scope.config.load = function (query, callback) {
            if (!query || query === '') return callback([]);
            callback(Types[type].list);
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
            if (!_.includes($scope.models.map(obj => obj._id), $scope.model[$scope.options.key]._id)) {
                $scope.models.push($scope.model[$scope.options.key]);
            }
        } else if (Array.isArray($scope.model[$scope.options.key]) && $scope.model[$scope.options.key][0]._id) {
            $scope._model = $scope.model[$scope.options.key].map(m => m._id);
        } else if (!$scope.model[$scope.options.key]) {
            $scope._model = '';
            if ($scope.selectize) $scope.selectize.clear();
        }
    })

    $scope.create = function () {
        formService.add({}, type, () => {
            if ($scope.config.load) return;
            cms.loadElements(type, () => {
                $scope.models = [...Types[type].list];
            })
        });
    }
}

export default controller;