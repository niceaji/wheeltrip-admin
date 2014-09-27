var app = angular.module('app', ["ngRoute"]);

//app.config(
//    function ($routeProvider, $locationProvider) {
//        'use strict';
//
//        $routeProvider
//            .when('/:category?', {
//                templateUrl:'template/main.html',
//                controller: 'MainCtrl'
//            });
//    });

app.controller('BaseCtrl',
    function ($scope, $http, $window, dmap) {

        $scope.openCategory = false;
        $scope.categorys = [
            { name: '모두보기' },
            { name: '휠체어', icon: 'wheel' },
            { name: '충전', icon: 'charge' },
            { name: '관광지', icon: 'tourist' },
            { name: '화장실', icon: 'restroom'},
            { name: '식당', icon: 'food' },
            { name: '숙박', icon: 'house' },
            { name: '병원', icon: 'hospital' },
            { name: '복지', icon: 'help' }
        ];


        function getGeolocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
//                if(!confirm('현재 위치로 이동할까요?')) return;
                    dmap.panTo(position.coords.latitude, position.coords.longitude);
                });
            }
        }

        function putMarker() {
            $scope.places.forEach(function (place) {
                var arr= _.where($scope.categorys, {name: place.category_name}),
                    icon = arr.length > 0 ? arr[0].icon : '';

                place.marker = dmap.putMarker(place.latitude, place.longitude, icon);

                $window.daum.maps.event.addListener(place.marker, 'click', function () {
                    $scope.selectedPlace = place;
                    $scope.$apply();
                });
            });
        }

        function loadPlacesData() {
            $http.get('data.json')
                .success(function (data) {
                    $scope.places = data;
                    putMarker();
                });
        }

        getGeolocation();
        loadPlacesData();


        $scope.zoomin = function () {
            dmap.map().setLevel(map.getLevel() - 1);
        };
        $scope.zoomout = function () {
            dmap.map().setLevel(map.getLevel() + 1);
        };
        $scope.filterCategory = function (category) {

            $scope.openCategory = false;

            $scope.places.forEach(function (place) {
                if (category.name === '모두보기' || place.category_name === category.name) {
                    place.marker.setVisible(true);
                }
                else {
                    place.marker.setVisible(false);
                }
            });
        };


        $scope.$watch('openCategory', function () {
            if ($scope.openCategory) {
                $scope.selectedPlace = null;
            }
        })
    });
app.controller('MainCtrl',
    function ($scope, $http, $routeParams, dmap) {


    });