'use strict';

var _ = require('lodash');

function checkLogin(userid, password) {

    var
        adminList = require('../.admin.json'),
        user = _.where(adminList, {id: userid});

    if (user.length > 0 && user[0].password === password) {
        return true;
    }
    else {
        return false;
    }
}

function safeMerge(model, src) {
    return _.pick(_.merge({}, model, src), _.keys(model));
}

module.exports = {

    safeMerge: safeMerge,
    checkLogin: checkLogin
};