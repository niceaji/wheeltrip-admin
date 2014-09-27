app.directive('starScore', function ($window) {
    'use strict';

    return {
        restrict: 'E',
        scope:{
            score:'=ngModel'
        },
        template: '<span class="glyphicon glyphicon-star" ng-repeat="i in getNumber(score) track by $index"></span>',
        link: function (scope, element, attr) {
            scope.getNumber = function (num) {
                return new Array(num);
            };

//            console.log(scope.model)
        }
    }
});