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
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');
// var flash = require("connect-flash");

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

// app.use(flash());

app.use(expressValidator());

// Static directory
app.use(express.static("public"));

app.use(session({
  secret: 'viuwevbbvuabvmastvc', // Update with random string generator - Phase 2
  resave: false,
  saveUninitialized: false, // Only saves session cookie if signed in
  // cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes - - This will be replaced by a controller file to follow the MVC Paradigm
// =============================================================

var routes = require("./controllers/rollerDerbyController.js");

app.use("/", routes);

passport.use(new LocalStrategy(
  function(username, password, done) {
    var db = require("./models/");
    db.referee.findOne({ where: { referee_name: username } }).then(function(user) {
      // Username doesn't match - Returns to login page - Need to display error message - Phase 2!!
      if (!user) { return done(null, false, { message: "No user found." }); }

      var hash = user.dataValues.referee_password;
      var referee_id = user.dataValues.referee_id;
      bcrypt.compare(password, hash, function(err, response) {
        console.log("response is: " + response);

        // If name and password match, return id
        if (response === true) { return done(null, { referee_id: referee_id }); }
        // Username match but password not match - Returns to login page - Need to display error message - Phase 2!!
        else { return done(null, false, { message: "Wrong password." }); }
      });
    });
  }
));

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ /* force: true */ }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});