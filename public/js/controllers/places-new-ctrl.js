'use strict';

app.controller('PlacesNewCtrl',
    function ($scope, $location, $routeParams, $window, Places) {


        $scope.$parent.nowMenu = 'places';
        $scope.$parent.hasNavbar = true;

        $scope.fields = $window.schema.place;

        $scope.place = {};

        $scope.formOptions = {
            uniqueFormId: 'editForm',
            submitCopy: '저장'
        };

        $scope.onSubmit = function () {
            console.log('onSubmit:', $scope.place);
            Places.save($scope.place, function (rows) {
                if (rows.affectedRows === 1) {
                    $window.toastr.success('추가 했습니다');
                    console.log('success!');
                    $location.path('/places/edit/' + rows.insertId).replace();
                }
            });
        };


    });