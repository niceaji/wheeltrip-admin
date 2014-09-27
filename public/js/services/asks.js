'use strict';

app.factory('Asks',
    function ($resource, $window) {
        'use strict';

        return $resource($window.pageConfig.urlPrefix + '/api/asks/:id', {id: '@id'},
            {
                'get': {method: 'GET', isArray: true },
                'query': { method:'GET', isArray: true, params: {limit:'',offset:'',title:''} },
                'update': {method: 'PUT'}
            });

    });