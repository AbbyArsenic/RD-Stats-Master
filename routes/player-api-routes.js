var db = require("../models");

var Player = require("../models/player.js");

module.exports = function(app) {

	// Route to get all players
	app.get("/api/player", function (req, res) {
		Player.findAll({}).then(function (dbPlayer){
			res.json(dbPlayer);
		});
	});

	// Route for finding all players on a team by teamID
	app.get("/api/player/:teamID", function (req, res) {
		Player.findAll({
			where: {
				teamID: req.params.teamID
			}
		}).then(function(data) {
			res.json(data);
		});
	});

	// Route to get a specific player
	app.get("/api/player/:playerName", function (req, res) {
		Player.findOne({
			where: {
				teamID: req.params.playerName
			}
		}).then(function(data) {
			res.json(data);
		});
	});

};

