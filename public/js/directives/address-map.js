app.directive('addressMap', function ($window) {
    'use strict';

    return {
        restrict: 'E',
        templateUrl: '/template/address-map.html',
        link: function (scope, element, attr) {

            scope.popupMap = function () {
                var lat = scope.result.latitude || '',
                    lng = scope.result.longitude || '';
                $window.open('/daum-map/map.html#?lat='+lat+'&lng='+lng, '', 'width=1000,height=700');
            };

            $window.callbackMapWindow = function (lat, lng, content) {
                scope.result.latitude = lat;
                scope.result.longitude = lng;
                scope.result.address = content;
                scope.$apply();
            };

        }
    }
});