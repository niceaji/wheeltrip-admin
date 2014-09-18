'use strict';

app.controller('PlacesIndexCtrl',
    function ($scope, $location, Places) {

        //TODO. paging
        var listSize = 100;
        $scope.page = 1;

        Places.query(function (places) {
            $scope.places = places;
        });

        $scope.edit = function (place) {
            $location.path('places/edit/' + place.id);
        };
        $scope.delete = function (place) {

            if (!confirm('정말 삭제하시겠습니까?')) {
                return;
            }
            place.$delete(function () {
                $scope.places.forEach(function (item, index) {
                    if (item.id === place.id) {
                        $scope.places.splice(index, 1);
                    }
                });
            });

        };
    })

