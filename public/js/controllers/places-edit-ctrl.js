app.controller('PlacesEditCtrl',
    function ($scope, $location, $routeParams, $window, $anchorScroll, Places) {
        'use strict';

        $scope.$parent.nowMenu = 'places';
        $scope.$parent.hasNavbar = true;

        $scope.fields = $window.schema.place;

        Places.get({id: $routeParams.pid}, function (place) {
            $scope.place = place[0];

        });

        $scope.formOptions = {
            uniqueFormId: 'editForm',
//            submitCopy: 'Submit',
//            hideSubmit: false,
//            submitButtonTemplate: null,
//            useNgIfToHide: false
            submitCopy: '저장'
        };

        $scope.countUploaedImage = function() {

            return 1;

        };

        $scope.onSubmit = function () {
            console.log('onSubmit:', $scope.place);
            Places.update({id: $scope.place.id}, $scope.place, function (rows) {
                if (rows.affectedRows === 1) {

                    $window.toastr.success('수정 했습니다');

                    console.log('success!');
                }
            });
        };




        $anchorScroll();
    });