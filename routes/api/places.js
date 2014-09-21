'use strict';

var
    config = require('../../config/index'),
    dao = require('../../dao'),
    debug = require('debug')('wheeladmin:places');

function index(req, res) {
    dao.places.selectAll(function (err, rows) {
        res.json(rows);
    });
}
function show(req, res) {
    var pid = req.param('pid');
    dao.places.selectById(pid, function (err, rows) {
        res.json(rows);
    });
}
function create(req, res) {
    dao.places.create(req.body, function (err, rows) {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
}
function update(req, res) {
    var pid = req.param('pid');

    dao.places.updateById(pid, req.body, function (err, rows) {
        if (err) {
            throw  err;
        }
        res.json(rows);
    });
}
function destroy(req, res) {

    var pid = req.param('pid');

    dao.places.deleteById(pid, function (err, rows) {
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