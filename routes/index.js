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
function checkLogin(req, res) {

    var
        userid = req.param('userid'),
        password = req.param('password'),
        adminDao = require('../dao/admins');

    if(!userid || !password){
        res.json({code:403});
    }

    adminDao.exists(userid, password, function (err, rows) {

        if (!err && rows[0].count===1) {
            debug('login success:', userid);
            res.json({code:200});
        }
        else {
            res.json({code:401});
        }
    });



}

module.exports = {
    index: index,
    checkLogin: checkLogin,

    api: {
        places: require('./api/places')
    }

};

