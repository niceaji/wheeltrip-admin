'use strict';

app.factory('Places',
    function ($resource, $window) {
        'use strict';

        return $resource($window.pageConfig.urlPrefix + '/api/places/:id?limit=:limit&offset=:offset', {id: '@id'},
            {
                'get': {method: 'GET', isArray: true},
                'update': {method: 'PUT'}
            });

    });