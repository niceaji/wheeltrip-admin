'use strict';

app.controller('BaseCtrl',
    function ($scope, $location, $window) {

        $scope.back=function() {
            $window.history.back();
        };
    });