'use strict';

app.controller('LoginCtrl',
    function ($scope, $location, $window) {

        $scope.$parent.nowMenu = 'login';
        $scope.$parent.hasNavbar = false;


    });