app.directive('addressMap', function ($window) {
    'use strict';

    return {
        restrict: 'E',
        templateUrl: '/template/address-map.html',
        link: function (scope, element, attr) {

            scope.popupMap = function () {
                $window.open('/daum-map/map.html', '', 'width=1000,height=700');
            };

        }
    }
});