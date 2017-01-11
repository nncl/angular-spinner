var app = angular.module('angular-spinner', []);

app.directive('caSpinner', function () {
    return {
        'restrict' : 'AEC',
        'template' : '<div ng-if="isLoading">Is Loading</div>',
        'scope' : {
            'isLoading' : '='
        }
    }
});
