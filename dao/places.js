'use strict';

/** @module dao/places */

var mysqlMgr = require('../common/mysql-manager'),
    lib = require('../common/lib'),

    tableName = 'places';

var model = {
    title: '',
    lat: '',
    lng: '',
    address: ''
};

function create(place, callback) {
    var data = lib.ownExtend(model, place),
        sql = 'insert into {table} set ?';
    mysqlMgr.query(sql, [data], callback);
}

function selectById(id, callback) {
    var sql = 'select * from {table} where id=?';
    return mysqlMgr.query(sql, [id], callback);
}

function selectAll(callback) {
    //TODO. page
    var sql = 'select * from {table} order by id desc'; //limit 20';
    return mysqlMgr.query(sql, callback);
}

function deleteById(id, callback) {
    var sql = 'delete from {table} where id=?';
    return mysqlMgr.query(sql, [id], callback);
}

function updateById(id, place, callback) {
    var sql = 'update {table} set ? where id=?';
    var data = lib.ownExtend(model, place);
    mysqlMgr.query(sql, [data, id], callback);
}


module.exports = {
    create: create,
    updateById: updateById,
    deleteById: deleteById,
    selectById: selectById,
    selectAll: selectAll
};
