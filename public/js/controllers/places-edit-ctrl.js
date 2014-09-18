'use strict';

app.controller('PlacesEditCtrl',
    function ($scope, $location, $routeParams, Places) {

//        $scope.place = Places.get({id: $routeParams.pid});
//
//        $scope.schema = [
//            {"property": "name", "type": "text"},
//            {"property": "latitude", "type": "text"},
//            {"property": "longitude", "type": "text"},
//
//            {"property": "image_0", "type": "text"},
//            {"property": "image_1", "type": "text"},
//            {"property": "image_2", "type": "text"},
//            {"property": "image_3", "type": "text"},
//            {"property": "image_4", "type": "text"}
//        ];

//        https://github.com/nimbly/angular-formly
        $scope.formData = {
            username: '1111'
        };
        $scope.formFields = [
            {
                //the key to be used in the result values {... "username": "johndoe" ... }
                key: 'username',

                type: 'text',
                label: '하하하',
                placeholder: 'johndoe',
                required: true,
                description: 'Descriptive text'
            },
            {
                key: 'password',
                type: 'password',
                label: 'Password',
                required: true,
                hideExpression: '!username' // hide when username is blank
            }

        ];

        $scope.formOptions = {
//            uniqueFormId: null,
//            submitCopy: 'Submit',
//            hideSubmit: false,
//            submitButtonTemplate: null,
//            useNgIfToHide: false
            submitCopy: '저장'
        };

        $scope.onSubmit = function() {
            console.log('form submitted:', $scope.formData);
        };


    });