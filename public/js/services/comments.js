'use strict';

app.factory('Comments',
    function ($resource, $window) {
        'use strict';

        return $resource($window.pageConfig.urlPrefix + '/api/comments/:id?limit=:limit&offset=:offset', {id: '@id'},
            {
                'get': {method: 'GET', isArray: true},
                'update': {method: 'PUT'}
            });

    });