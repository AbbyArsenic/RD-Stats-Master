var db = require("../models");

var Team = require("../models/team.js");

module.exports = function(app) {

	// Route to get all teams
	app.get("/api/team", function (req, res) {
		Team.findAll({}).then(function (dbTeam){
			res.json(dbTeam);
		});
	});

	// Route to get a specific team
	app.get("/api/team/:teamName", function (req, res) {
		Team.findOne({
			where: {
				teamName: req.params.teamName
			}
		}).then(function(data) {
			res.json(data);
		});
	});

};

