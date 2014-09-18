'use strict';

/** @module dao/admins */

var mysqlMgr = require('../common/mysql-manager'),
    lib = require('../common/lib'),
    _ = require('lodash');


function selectById(id, callback) {
    var sql = 'select * from admins where userid=?';
    mysqlMgr.query(sql, [id], callback);
}


module.exports = {
    selectById: selectById
};
