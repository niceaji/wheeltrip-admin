'use strict';

var
    config = require('../config'),
    lib = require('../common/lib'),
    _ = require('lodash'),
    debug = require('debug')('wheeltrip:route:index');


function index(req, res) {
    res.render('main', {
        pageConfig : {
            urlPrefix: config.urlPrefix,
            path: req.path
        }
    });
}

module.exports = {
    index: index,

    api: {
        places: require('./api/places')
    }

};

