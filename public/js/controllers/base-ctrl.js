'use strict';

app.controller('BaseCtrl',
    function ($scope, $location, $window) {

        $scope.nowMenu = '';
        $scope.back=function() {
            $window.history.back();
        };

    });