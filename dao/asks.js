'use strict';

/** @module dao/ASKS */

var mysqlMgr = require('../common/mysql-manager'),
    lib = require('../common/lib'),
    _ = require('lodash'),
    schema = require('../public/schema/asks'),
    model = lib.schema2model(schema);


function create(place, callback) {
    var data = lib.safeMerge(model, place),
        sql = 'insert into ASKS set ?';

    data.editor  = 'admin';
    mysqlMgr.query(sql, [data], callback);
}

function selectById(id, callback) {
    var sql = 'select * from ASKS where id=?';
    mysqlMgr.query(sql, [id], callback);
}

function selectAll(options, callback) {

    var sql = "select c.id,c.editor,c.content,c.updatedt,c.email,l.id as place_id, l.name " +
        "from ASKS c, LOCATIONS l where c.location_id=l.id  ";
    var params = [];

    options = options || {};

    if (options.title) {
        sql += "and c.content like '%"+options.title+"%' ";
        params.push(options.limit);
    }
    sql += 'order by c.id desc ';
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
    var sql = 'delete from ASKS where id=?';
    mysqlMgr.query(sql, [id], callback);
}

function updateById(id, place, callback) {
    var sql = 'update ASKS set ? where id=?';
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
