'use strict';

app.factory('Places',
    function ($resource, $window) {
        'use strict';



        return $resource($window.pageConfig.urlPrefix + '/api/places/:id', {id: '@id'},
            {
                'get': {method: 'GET', isArray: true },
                'query': { method:'GET', isArray: true, params: {limit:'',offset:'',title:''} },
                'update': {method: 'PUT'}
            });

    });