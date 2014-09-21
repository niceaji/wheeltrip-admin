'use strict';

var
    _ = require('lodash'),
    config = require('../config');


function safeMerge(model, src) {
    return _.pick(_.merge({}, model, src), _.keys(model));
}
function schema2model(schema) {
    var model={};
    _.forEach(_.pluck(schema, 'key'), function (item) {
        model[item] = ''
    });
    return model;
}
function isLogged(session) {

    if(config.checkSession) {
        if(session.userid) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return true;
    }
}

module.exports = {

    safeMerge: safeMerge,
    schema2model: schema2model,
    isLogged: isLogged
};