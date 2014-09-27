var app = angular.module('app', ["ngRoute"]);

var markerImg='';

app.controller('BaseCtrl',

    function ($scope, $http, dmap) {

        $http.get('data.json')
            .success(function (data) {

                data.forEach(function (place) {
                    dmap.putMarker(place.latitude, place.longitude);
                })
            })

    });