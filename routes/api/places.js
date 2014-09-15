'use strict';

var
    config = require('../../config/index'),
    debug = require('debug')('wheeltrip:places');

function index(req, res) {

    res.render('map')
}
function show(req, res) {

    res.render('map')
}
function create(req, res) {

}
function update(req, res) {

}
function destroy(req, res) {

}

module.exports = {
    index: index,
    show: show,
    create: create,
    update: update,
    destroy: destroy
};