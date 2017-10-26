// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Link to external 'database' files
var tables = require('./app/data/friends.js');

// var waitlist = require('./waitlist-data.js');

// Link to external routes files
var routesHTML = require('./app/routing/htmlRoutes.js');
var routesAPI = require('./app/routing/apiRoutes.js');

// Initialize Routing
routesAPI(app);
routesHTML(app);

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
