'use strict';

app.factory('Comments',
    function ($resource, $window) {
        'use strict';

        return $resource($window.pageConfig.urlPrefix + '/api/comments/:id', {id: '@id'},
            {
                'get': {method: 'GET', isArray: true },
                'query': { method:'GET', isArray: true, params: {limit:'',offset:'',title:''} },
                'update': {method: 'PUT'}
            });

    });