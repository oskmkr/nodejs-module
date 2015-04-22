var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes');
var users = require('./routes/user');
var map = require('./maproutecontroller.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);
app.use(express.methodOverride());

app.get('/', routes.index);
//app.get('/users', users.list);

var prefixes = ['keywords', 'users'];

prefixes.forEach(function(prefix) {
    map.mapRoute(app, prefix);    
});


app.get('/content/*', function(req, res) {
    res.send(req.params);
});

app.get('/products/:id/:operation', function(req, res) {
    // console.log(req);
    res.send(req.params.operation + ' ' + req.params.id);
});

/**
 * curl -i -X PUT http://localhost:3000/products
 */
app.put('/products', function(req, res) {
    res.send('create products');
});

app.post('/products/:id', function(req, res) {
    res.send('update products ' + req.params.id);
});

app.del('/products/:id', function(req, res) {
    res.send('delete products ' + req.params.id);
});

app.get('/products/:id', function(req, res) {
    res.send('read products ' + req.params.id);
});

// / catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// / error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
	res.render('error', {
	    message : err.message,
	    error : err
	});
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
	message : err.message,
	error : {}
    });
});

module.exports = app;
