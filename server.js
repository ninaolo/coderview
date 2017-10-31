/**
 * MODULES
 * The modules to import.
 */
var express = require("express");
var app = express();
var request = require("request");
var fs = require("fs");
var xml2js = require("xml2js");
var bodyParser = require("body-parser");


/**
 * CONFIG
 */
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/js', express.static(__dirname + '/frontend/js'));
app.use('/img', express.static(__dirname + '/frontend/img'));
app.use('/bower_components', express.static(__dirname + '/frontend/bower_components'));
app.use('/css', express.static(__dirname + '/frontend/css'));
app.use('/partials', express.static(__dirname + '/frontend/partials'));


/**
 * ROUTES
 * This is the API.
 */
app.use(require('./backend/controllers'));


/**
 * ROUTING
 * This makes sure that AngularJS routing and node.js routing work together.
 */
app.all('/', function (req, res, next) {
    res.sendFile(__dirname + '/frontend/index.html');
});



app.listen(8080);
console.log("App listening on port 8080");