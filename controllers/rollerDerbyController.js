const express = require("express");

const router = express.Router();

const db = require("../models/");



router.get("/league", function(req, res) {
	db.teams.findAll({})
		.then(function(teams) {
			res.render("league",
				{ title: "League",
					team: teams					
				});
		});
});

router.get("/team", function(req, res) {
  res.render("team", { title: 'Team' });
});

router.get("/register", function(req, res) {
  res.render("register", { title: 'Registration' });
});

router.get("/register", function(req, res) {
  res.render("register", { title: 'Registration' });
});

router.get("/login", function(req, res) {
  res.render("login", { title: 'Login' });
});


// -------API ROUTES--------- //
	router.get("/api/teams", function(req, res) {
		db.teams.findAll({}).then(function(data){
			res.json(data);
		});
	});

	router.get("/api/skaters", function(req, res) {
		db.skaters.findAll({}).then(function(data){
			res.json(data);
		});
	});

	router.get("/api/skaters/team/:team_id", function(req, res) {
		db.skaters.findAll({
			where: {
				team_id: req.params.team_id
			}
		}).then(function(data) {
			res.json(data);
		});
	});


// -------TEST ROUTES--------- //

	// Find all skaters
	router.get("/skaters", function(req, res) {
		db.skaters.findAll()
			.then(function(data) {
				res.render("test", { skater: data });
			});
	});

	// Find all skaters by team_id
	router.get("/team-members/:team_id", function(req, res) {
		db.skaters.findAll({
			where: {
				team_id: req.params.team_id
			}
		}).then(function(data) {
				res.render("test", { skater: data });
			});
	});

	// Find a skater by skater_id
	router.get("/skater/:skater_id", function(req, res) {
		db.skaters.findOne({
			where: {
				skater_id: req.params.skater_id
			}
		}).then(function(data) {
				console.log("\nSelected skater: ", data.get('skater_name'), "\n");
				res.render("test", { skater: data });
			});
	});


// Any undefinted routes direct to home page
router.get("*", function(req, res) {
  res.render("index", { title: 'AZDD' });
});

module.exports = router;
