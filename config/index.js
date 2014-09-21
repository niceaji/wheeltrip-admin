'use strict';

var
    debug = require('debug')('wheeladmin:config'),
    config = '',
    _ = require('lodash');

function load() {

    var
        env = process.env.NODE_ENV || 'development';

    if (!config) {
        config = _.merge(require('./default.js'), require('./' + env));
        debug('config.load():', env, config);
    }
    return config;
}

module.exports = load();