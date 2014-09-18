'use strict';

/** @module dao/admins */

var mysqlMgr = require('../common/mysql-manager'),
    lib = require('../common/lib'),
    _ = require('lodash');


function exists(userid, password, callback) {
    var sql = 'select count(userid) as count from admins where userid=? and passwd=md5(?)';
    mysqlMgr.query(sql, [userid, password], callback);
}


module.exports = {
    exists: exists
};
