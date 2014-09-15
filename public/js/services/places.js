
app.factory('Places', function ($resource) {

    'use strict';

    return $resource('/api/places/:id', {},
        {
            'get': {method: 'GET', isArray: true}
        });

});