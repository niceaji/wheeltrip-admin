'use strict';

var express = require('express'),
    path = require('path'),
    routes = require('./routes'),
    config = require('./config'),
    debug = require('debug')('wheeltrip:server'),
    app = express(),

    port = process.env.PORT || 3333;

app.engine('.ejs', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

function defineRouter() {

    var
        router = express.Router();


    router
        .get('/', routes.index)
        .post('/login/check', routes.checkLogin)

        .get('/api/places', routes.api.places.index)
        .get('/api/places/:pid', routes.api.places.show)
        .post('/api/places', routes.api.places.create)
        .put('/api/places/:pid', routes.api.places.update)
        .delete('/api/places/:pid', routes.api.places.destroy)

//        .get('/places', routes.placesIndex)

    return router;
}

function start() {
    app.listen(port, function () {
        debug('Listening on port %d', port);
    });
}

app.use(require('body-parser').json({}));
//app.use(require('body-parser').urlencoded({}));
app.use(express.static('public'));
app.use(config.urlPrefix, defineRouter());

start();
