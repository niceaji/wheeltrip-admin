app.directive('uploadBtn', function ($window) {
    'use strict';

    return {
        restrict: 'E',
        templateUrl: '/template/upload-btn.html',
        link: function (scope, element, attr) {

            scope.popupUpload = function () {

                $window.open('/upload/index.html', '', 'width=600,height=200');

                //overwrite
                (function(scope) {
                    $window.callbackUploadWindow = function(data) {
                        scope.result[scope.options.key] = data.url;
                        scope.$apply();
                    };
                })(scope);
            };
            scope.delete = function() {

                //console.log(scope.options.key)
                scope.result[scope.options.key] = '';
            };


        }
    };

});