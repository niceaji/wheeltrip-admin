'use strict';

var
    _ = require('lodash');

function checkLogin(userid, password) {
    //TODO. db에서 체크하세요~

//    var result = dao.exists(userid, password);

    console.log(result)

    if (true) {
        return true;
    }
    else {
        return false;
    }
}

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

module.exports = {

    safeMerge: safeMerge,
    schema2model: schema2model,
    checkLogin: checkLogin
};