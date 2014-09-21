app.config(
    function ($routeProvider, $locationProvider) {
        'use strict';

        $routeProvider
            .when('/places', {
                templateUrl: '/template/places-index.html',
                controller: 'PlacesIndexCtrl'
            })
            .when('/places/new', {
                templateUrl: '/template/places-edit.html',
                controller: 'PlacesNewCtrl'
            })
            .when('/places/edit/:pid', {
                templateUrl: '/template/places-edit.html',
                controller: 'PlacesEditCtrl'
            })
            .when('/comment', {
                templateUrl: '/template/comments-index.html',
                controller: 'CommentsIndexCtrl'
            })
            .
            otherwise({ redirectTo: '/'});


//    $locationProvider.html5Mode(true);

    });