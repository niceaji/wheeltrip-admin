'use strict';

/** @module dao/places */

var mysqlMgr = require('../common/mysql-manager'),
    lib = require('../common/lib'),
    _ = require('lodash'),
    schema = require('../public/schema/place'),
    model = lib.schema2model(schema);


function create(place, callback) {
    var data = lib.safeMerge(model, place),
        sql = 'insert into LOCATIONS set ?';
    mysqlMgr.query(sql, [data], callback);
}

function selectById(id, callback) {
    var sql = 'select * from LOCATIONS where id=?';
    mysqlMgr.query(sql, [id], callback);
}

function selectAll(options, callback) {

    var sql = 'select * from LOCATIONS order by id desc ';
    var params = [];

    options = options || {};

    if (options.limit > 0) {
        sql += 'limit ? ';
        params.push(options.limit);
    }
    if (options.offset > 0) {
        sql += 'offset ? ';
        params.push(options.offset);
    }

    mysqlMgr.query(sql,params, callback);
}

function deleteById(id, callback) {
    var sql = 'delete from LOCATIONS where id=?';
    mysqlMgr.query(sql, [id], callback);
}

function updateById(id, place, callback) {
    var sql = 'update LOCATIONS set ? where id=?';
    var data = lib.safeMerge(model, place);
    data.updatedt = new Date();
    mysqlMgr.query(sql, [data, id], callback);
}


module.exports = {
    create: create,
    updateById: updateById,
    deleteById: deleteById,
    selectById: selectById,
    selectAll: selectAll
};
