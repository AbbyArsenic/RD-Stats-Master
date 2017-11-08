$(document).ready(function() {

	// Build newJam object that will be posted to the db
	var newJam = {
		jam_id: ,
		bout_id: ,
		team_id: ,
		jam_number: ,
		points: ,
		jammer: ,
		pivot: ,
		blocker1: ,
		blocker2: ,
		blocker3: ,
		star_pass:
	};

	submitJam(newJam);

	// Submits a new jam and brings user to fresh jam page upon completion
	function submitJam(jamData) {
	  $.post("/api/jams/", jamData, function() {
	    window.location.href = "/league";
	  });
	}

});
