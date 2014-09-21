app.config(
    function ($routeProvider, $locationProvider) {
        'use strict';

        $routeProvider
            .when('/', {
                templateUrl: '/template/login.html',
                controller: 'LoginCtrl'
            })
            .otherwise({ redirectTo: '/'});

//    $locationProvider.html5Mode(true);

    });
