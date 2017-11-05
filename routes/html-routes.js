var path = require("path");

module.exports = function(app) {

  app.get("/league", function(req, res) {
    res.render("league", { title: 'League' });
  });

  app.get("/team", function(req, res) {
    res.render("team", { title: 'Team' });
  });

  app.get("/register", function(req, res) {
    res.render("register", { title: 'Registration' });
  });

  app.get("*", function(req, res) {
    res.render("index", { title: 'AZDD' });
  });

};