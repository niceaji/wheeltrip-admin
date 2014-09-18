'use strict';

/** @module dao/places */

var mysqlMgr = require('../common/mysql-manager'),
    lib = require('../common/lib'),
    _ = require('lodash');



var model = {
    name: '',
    latitude: '',
    longitude: '',
    image_0: '',
    image_1: '',
    image_2: '',
    image_3: '',
    image_4: '',
    description: '',
    homepage: '',
    category: '',
    area: '',
    regdttm: new Date()
};

function create(place, callback) {
    var data = lib.safeMerge(model, place),
        sql = 'insert into places set ?';
    mysqlMgr.query(sql, [data], callback);
}

function selectById(id, callback) {
    var sql = 'select * from places where id=?';
    mysqlMgr.query(sql, [id], callback);
}

function selectAll( callback) {
    var sql = 'select * from places order by id desc';// limit '+start+', '+listSize;
    mysqlMgr.query(sql, [], callback);
}

function deleteById(id, callback) {
    var sql = 'delete from places where id=?';
    mysqlMgr.query(sql, [id], callback);
}

function updateById(id, place, callback) {
    var sql = 'update places set ? where id=?';
    var data = lib.safeMerge(model, place);
    mysqlMgr.query(sql, [data, id], callback);
}


module.exports = {
    create: create,
    updateById: updateById,
    deleteById: deleteById,
    selectById: selectById,
    selectAll: selectAll
};
