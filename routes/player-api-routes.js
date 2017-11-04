var db = require("../models");

var Skaters = require("../models/skaters.js");

module.exports = function(app) {

	// Route to get all skaters
	app.get("/api/skaters", function (req, res) {
		Skaters.findAll({}).then(function (data){
			res.json(data);
		});
	});

	// Route for finding all skaters on a team by teamID
	app.get("/api/skaters/:team_id", function (req, res) {
		Skaters.findAll({
			where: {
				team_id: req.params.team_id
			}
		}).then(function(data) {
			res.json(data);
		});
	});

	// Route to get a specific skater
	app.get("/api/skaters/:skater_id", function (req, res) {
		Skaters.findOne({
			where: {
				skater_id: req.params.skater_id
			}
		}).then(function(data) {
			res.json(data);
		});
	});

};

