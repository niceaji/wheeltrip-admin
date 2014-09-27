'use strict';

var
    config = require('../../config/index'),
    dao = require('../../dao'),
    debug = require('debug')('wheeladmin:comments');

function index(req, res) {

    var options = {
        title: req.param('title'),
        offset: parseInt(req.param('offset'), 10),
        limit: parseInt(req.param('limit'), 10)
    };

    dao.comments.selectAll(options, function (err, rows) {
        res.json(rows);
    });
}
function show(req, res) {
    var cid = req.param('cid');
    dao.comments.selectById(cid, function (err, rows) {
        res.json(rows);
    });
}
function create(req, res) {
    dao.comments.create(req.body, function (err, rows) {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
}
function update(req, res) {
    var cid = req.param('cid');

    dao.comments.updateById(cid, req.body, function (err, rows) {
        if (err) {
            throw  err;
        }
        res.json(rows);
    });
}
function destroy(req, res) {

    var cid = req.param('cid');

    dao.comments.deleteById(cid, function (err, rows) {
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