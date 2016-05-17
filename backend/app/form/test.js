angular.module('formly').config(function (formlyConfigProvider) {
    formlyConfigProvider.setType({
        name: 'test',
        template: '<h2>{{test}}</h2>',
        controller: function ($scope) {
            $scope.test = 'lalala';
        },
        overwriteOk:true
    });
});