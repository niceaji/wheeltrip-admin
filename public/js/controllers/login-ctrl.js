'use strict';

app.controller('LoginCtrl',
    function ($scope, $location, $window) {

        $scope.back=function() {
            $window.history.back();
        };
    });