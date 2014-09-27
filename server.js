'use strict';

var express = require('express'),
    path = require('path'),
    routes = require('./routes/index'),
    config = require('./config/index'),
    lib = require('./common/lib'),
    debug = require('debug')('wheeladmin:server'),
    bodyParser = require('body-parser'),
    expressSession = require('express-session'),
    cookieParser = require('cookie-parser'),
    app = express(),

    port = process.env.PORT || 3333;

app.engine('.ejs', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


function defineRouter() {

    var
        router = express.Router();

    router
        //login index
        .get('/', routes.index)
        .get('/logout', routes.logout)
        .post('/login', routes.checkLogin)


        .get('/api/places', auth, routes.api.places.index)
        .get('/api/places/:pid', auth, routes.api.places.show)
        .post('/api/places', auth, routes.api.places.create)
        .put('/api/places/:pid', auth, routes.api.places.update)
        .delete('/api/places/:pid', auth, routes.api.places.destroy)

        .get('/api/comments', auth, routes.api.comments.index)
        .get('/api/comments/:cid', auth, routes.api.comments.show)
        .post('/api/comments', auth, routes.api.comments.create)
        .put('/api/comments/:cid', auth, routes.api.comments.update)
        .delete('/api/comments/:cid', auth, routes.api.comments.destroy)

        .get('/api/asks', auth, routes.api.asks.index)
        .get('/api/asks/:aid', auth, routes.api.asks.show)
        .post('/api/asks', auth, routes.api.asks.create)
        .put('/api/asks/:aid', auth, routes.api.asks.update)
        .delete('/api/comments/:aid', auth, routes.api.asks.destroy)

    return router;
}

function start() {
    app.listen(port, function () {
        debug('Listening on port %d', port);
    });
}
function session() {
    app.use(cookieParser());
    app.use(expressSession({secret: config.appName}));
}
function auth(req, res, next) {

    if (!lib.isLogged(req.session)) {
        res.redirect(config.urlPrefix);
        return;
    }
    next();
}

session();
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));
app.use(config.urlPrefix, defineRouter());


start();
