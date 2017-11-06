// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var expressValidator = require('express-validator');

// Authenication packages
var session = require("express-session");
var passport = require("passport");

// Set Handlebars.
var exphbs = require("express-handlebars");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(expressValidator());

// Static directory
app.use(express.static("public"));

app.use(session({
  secret: 'viuwevbbvuabvmastvc', // Update with random string generator - Phase 2
  resave: false,
  saveUninitialized: false, // Only saves session cookie is signed in
  // cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes - - This will be replaced by a controller file to follow the MVC Paradigm
// =============================================================
// require("./routes/html-routes.js")(app);
// require("./routes/player-api-routes.js")(app);
// require("./routes/team-api-routes.js")(app);
// require("./routes/referee-api-routes.js")(app);

var routes = require("./controllers/rollerDerbyController.js");
app.use("/", routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ /* force: true */ }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});