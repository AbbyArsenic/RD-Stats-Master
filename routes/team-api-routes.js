var db = require("../models");

var Teams = require("../models/teams.js");

module.exports = function(app) {

  // Route to get all teams
  app.get("/api/teams", function(req, res) {
    Teams.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  // Route to get a specific team
  app.get("/api/teams/:team_id", function(req, res) {
    Teams.findOne({
      where: {
        team_id: req.params.team_id
      }
    }).then(function(data) {
      res.json(data);
    });
  });

};