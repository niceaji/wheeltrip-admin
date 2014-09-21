'use strict';

app.controller('BaseCtrl',
    function ($scope, $location, $window) {

        $scope.nowMenu = '';
        $scope.hasNavbar = false;

        $scope.config = $window.config;

        $scope.back=function() {
            $window.history.back();
        };


//        $scope.$watch('nowMenu',function() {
//
//            if($scope.nowMenu==='login') {
//                $scope.hasCoverBg = true;
//            }
//            else{
//                $scope.hasCoverBg= false;
//            }
//
//        });

    });