'use strict';

var
    config = require('../../config/index'),
    dao = require('../../dao'),
    debug = require('debug')('wheeladmin:asks');

function index(req, res) {

    var options = {
        title: req.param('title'),
        offset: parseInt(req.param('offset'), 10),
        limit: parseInt(req.param('limit'), 10)
    };

    dao.asks.selectAll(options, function (err, rows) {
        res.json(rows);
    });
}
function show(req, res) {
    var aid = req.param('aid');
    dao.asks.selectById(aid, function (err, rows) {
        res.json(rows);
    });
}
function create(req, res) {
    dao.asks.create(req.body, function (err, rows) {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
}
function update(req, res) {
    var aid = req.param('aid');

    dao.asks.updateById(aid, req.body, function (err, rows) {
        if (err) {
            throw  err;
        }
        res.json(rows);
    });
}
function destroy(req, res) {

    var aid = req.param('aid');

    dao.asks.deleteById(aid, function (err, rows) {
        if (err) {
            throw err;
        }

        res.json(rows);
    })
}

module.exports = {
    index: index,
    show: show,
    create: create,
    update: update,
    destroy: destroy
};