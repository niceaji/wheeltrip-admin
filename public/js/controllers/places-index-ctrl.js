'use strict';

app.controller('PlacesIndexCtrl',
    function ($scope, $location, $window, $routeParams, Places) {

        $scope.$parent.nowMenu = 'places';
        $scope.$parent.hasNavbar = true;

        $scope.page = $routeParams.page || 1;

        var limit = 50,
            offset = ($scope.page - 1) * limit;


        Places.query({limit: limit, offset: offset}, function (places) {
            $scope.places = places;
        });

        $scope.edit = function (place) {
            $location.path('places/edit/' + place.id);
        };
        $scope.add = function () {
            $location.path('places/new');
        };
        $scope.delete = function (place) {

            if (!confirm('정말 삭제하시겠습니까?')) {
                return;
            }
            place.$delete(function () {
                $scope.places.forEach(function (item, index) {
                    if (item.id === place.id) {
                        $scope.places.splice(index, 1);
                    }
                });
            });

        };
        $scope.popupMap = function (place) {
            var lat = place.latitude || '',
                lng = place.longitude || '';
            $window.open('/daum-map/map.html#?lat=' + lat + '&lng=' + lng, '', 'width=1000,height=700');
        };
        $scope.prev = function() {
            $location.path('places/'+ (--$scope.page));
        };
        $scope.next= function() {
            $location.path('places/'+ (++$scope.page));
        };
    })

