'use strict';

app.controller('CommentsIndexCtrl',
    function ($scope, $location, $routeParams, $window, Comments) {


        $scope.$parent.nowMenu = 'comments';
        $scope.$parent.hasNavbar = true;

        $scope.page = $routeParams.page || 1;
        $scope.pages = [1,2,3,4,5,6,7,8,9,10];//일단;

        var limit = 50,
            offset = ($scope.page - 1) * limit,
            queryParams = {limit: limit, offset: offset};


        Comments.query(queryParams, function (comments) {
            $scope.comments= comments;
        });
        $scope.delete = function (comment) {

            if (!confirm('정말 삭제하시겠습니까?')) {
                return;
            }

            comment.$delete(function () {
                $scope.comments.forEach(function (item, index) {
                    if (item.id === comment.id) {
                        $scope.comments.splice(index, 1);
                    }
                });
            });

        };

    });