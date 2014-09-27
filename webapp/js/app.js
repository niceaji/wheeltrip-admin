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
    function ($scope, $http,$window, dmap) {

        $scope.openCategory = false;
        $scope.categorys = [
            { name: '모두보기' },
            { name: '휠체어' },
            { name: '충전' },
            { name: '관광지' },
            { name: '화장실' },
            { name: '식당' },
            { name: '숙박' },
            { name: '병원' },
            { name: '복지' }
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
                place.marker = dmap.putMarker(place.latitude, place.longitude);

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

            $scope.openCategory =false;

            $scope.places.forEach(function (place) {
                if(category.name ==='모두보기' || place.category_name === category.name) {
                    place.marker.setVisible(true);
                }
                else {
                    place.marker.setVisible(false);
                }
            });
        };


        $scope.$watch('openCategory', function () {
            if($scope.openCategory){
               $scope.selectedPlace=null;
            }
        })
    });
app.controller('MainCtrl',
    function ($scope, $http, $routeParams, dmap) {


    });