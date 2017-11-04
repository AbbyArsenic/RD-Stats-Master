var db = require("../models");

var Player = require("../models/player.js");
var Team = require("../models/team.js");

module.exports = function(app) {

	// Route to get all teams
	app.get("api/enter-stats", function (req, res) {
		Team.findAll({}).then(function (data) {
			res.json(data);
		});
	});


	// Route to get all player #s of a certain team
	app.get("api/enter-stats", function (req, res) {
		Player.findAll({})
	});


};

