'use strict';

var
    config = require('../config'),
    lib = require('../common/lib'),
    debug = require('debug')('wheeltrip:login');

function check(req, res) {

    var
        userid = req.param('userid'),
        password = req.param('password');

    if (lib.checkLogin(userid, password)) {
        debug('login success:', userid);
        res.redirect(config.defaultStartUrl);
    }
    else {
        res.redirect(config.urlPrefix + '/');
    }

}

module.exports = {
    check: check
};