'use strict';

var
    config = require('../config'),
    lib = require('../common/lib'),
    _ = require('lodash'),
    debug = require('debug')('wheeltrip:route:index');


function index(req, res) {
    res.render('main', {
        pageConfig: {
            urlPrefix: config.urlPrefix,
            path: req.path,
            isLogged: lib.isLogged(req.session),
            userid: req.session.userid
        }
    });
}
function logout(req, res) {

    req.session.userid = '';
    res.redirect(config.urlPrefix);
}
function checkLogin(req, res) {

    var
        userid = req.param('userid'),
        password = req.param('password'),
        adminDao = require('../dao/admins');

    if (!userid || !password) {
        res.redirect(config.urlPrefix);
    }

    adminDao.exists(userid, password, function (err, rows) {

        if (!err && rows[0].count === 1) {
            debug('login success:', userid);
            req.session.userid = userid;
            res.redirect(config.defaultStartUrl);
        }
        else {
            res.redirect(config.urlPrefix);
        }
    });
}

module.exports = {
    index: index,
    logout: logout,
    checkLogin: checkLogin,

    api: {
        places: require('./api/places')
    }
};

