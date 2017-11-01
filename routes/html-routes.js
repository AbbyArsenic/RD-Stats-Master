var path = require("path");

module.exports = function(app) {

	app.get("/team-display", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/team.html"));
	});

	app.get("/enter-bout-stats", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/enterStats.html"));
	});

	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});

};

