var express = require("express");

var router = express.Router();

// var bouts = require("models/bouts.js");
// var jams = require("models/jams.js");
// var penalties = require("models/penalties.js");
// var referee = require("models/referee.js");
// var skaters = require("models/skaters.js");
// var teams = require("models/teams.js");

router.get("/league", function(req, res) {
  res.render("league");
});

router.get("/team", function(req, res) {
  res.render("team");
});

router.get("/register", function(req, res) {
  res.render("register");
});

router.get("*", function(req, res) {
  res.render("index");
});

module.exports = router;