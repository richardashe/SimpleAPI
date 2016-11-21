// express gives you a web server framework
var express = require("express");
// bodyParser allows our app to process POST requests
var bodyParser = require("body-parser");

// initialise express and assign it to variable called app
var app = express();
 
 // configure bodyParser to accept JSON requests
app.use(bodyParser.json());
// configure bodyParser to accept URL encoded values
app.use(bodyParser.urlencoded({ extended: true }));

// setup our routes location
// This is where all our API endpoints will be defined 
var routes = require("./routes/routes.js")(app);
 
var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});