var config = require('../config'),
    mysql = require('mysql'),
    _ = require('lodash'),
    Q = require('q'),
    debug = require('debug')('wheeladmin:mysql'),
    pool = null,
    poolConfig = _.merge(config.mysql, {
        connectionLimit: 10
    });


function getPool() {
    if (!pool) {
        debug('create mysql connection pool:', poolConfig);
        pool = mysql.createPool(poolConfig);
    }
    return pool;
}

function query(sql, values, callback) {
    if (callback) {
        return getPool().query(sql, values, function () {
            debug('query:', this.sql);
            return callback && callback.apply(this, arguments);
        });
    }
    // for streaming...
    return getPool().query(sql, values);
}

process.on('exit', function () {
    debug('exit: release mysql connection pool...');
    pool && pool.end();
});

module.exports = {
    query: query,
    queryDefer: Q.denodeify(query),
    getPool: getPool
};

