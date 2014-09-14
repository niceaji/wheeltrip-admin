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
        .get('/', routes.login.index)
        .post('/', routes.login.check)

        .get('/api/places', routes.places.index)
        .get('/api/places/:pid', routes.places.show)
        .post('/api/places', routes.places.create)
        .put('/api/places/:pid', routes.places.update)
        .delete('/api/places/:pid', routes.places.destroy)

//        .get('/places', routes.places.index)

    return router;
}

function start() {
    app.listen(port, function () {
        debug('Listening on port %d', port);
    });
}

app.use(require('body-parser').json({}));
app.use(require('body-parser').urlencoded({}));
app.use(express.static('public'));
app.use(config.urlPrefix, defineRouter());

start();
