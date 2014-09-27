app.config(
    function ($routeProvider, $locationProvider) {
        'use strict';

        $routeProvider
            .when('/places/new', {
                templateUrl: '/template/places-edit.html',
                controller: 'PlacesNewCtrl'
            })
            .when('/places/:page?', {
                templateUrl: '/template/places-index.html',
                controller: 'PlacesIndexCtrl'
            })
            .when('/places/edit/:pid', {
                templateUrl: '/template/places-edit.html',
                controller: 'PlacesEditCtrl'
            })
            .when('/comments/:page?', {
                templateUrl: '/template/comments-index.html',
                controller: 'CommentsIndexCtrl'
            })
            .when('/asks/:page?', {
                templateUrl: '/template/asks-index.html',
                controller: 'AsksIndexCtrl'
            })
            .
            otherwise({ redirectTo: '/'});


//    $locationProvider.html5Mode(true);

    });
