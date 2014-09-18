'use strict';

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/template/login.html',
            controller: 'LoginCtrl'
        })
        .when('/places', {
            templateUrl: '/template/places-index.html',
            controller: 'PlacesIndexCtrl'
        })
        .when('/places/edit/:pid', {
            templateUrl: '/template/places-edit.html',
            controller: 'PlacesEditCtrl'
        })
//            .otherwise({ redirectTo: '/'});


//    $locationProvider.html5Mode(true);

});
