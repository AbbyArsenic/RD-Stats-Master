$(document).ready(function() {

	let newJam = {};

	// These 3 COULD be received via URL IF we build a prelim page to 
	// declare bout, team being tracked, and start at bout 1
	// https://stackoverflow.com/questions/15128849/using-multiple-parameters-in-url-in-express
	let newjam_number = parseInt($("#jamNumber").html());
	console.log("jam number: ", newjam_number);

	let newbout_id = 1;

	let newteam_id;
	$("#teamSelect").on("change", function () {
		newteam_id = parseInt($("#teamSelect").val());
		console.log("team id: ", newteam_id);
	});

	// This value generated at click of Submit button
	let newpoints,
		newjammer = null,
		newpivot = null,
		newblocker1 = null,
		newblocker2 = null,
		newblocker3 = null;

	// get the value of star pass which is defined based on if it was clicked
	let newstar_pass = 0;
	$("#starPass").on("change", function () {
		if ($("#starPass").is(":checked")) {
			newstar_pass = 1;
		} else {
			newstar_pass = 0;
		}
		console.log(`Star Pass: ${newstar_pass}`);
	}); 

	// Array to hold the generated position select elements
	let positionSelects = [];

	// Arrays for each player
	let blockersArray = [];
	let jammerArray = [];
	let pivotArray = [];

	// When a position is selected for a player, push the skater_id value to the appropriate array
	$(document).on("change", "#choosePosition", function () {
		console.log("Chose a position!");
	  let skaterPosition = $(this).val();
	  let skaterID = $(this).data("skater_id");
	  console.log("Skater's ID: ", skaterID);
	  console.log("Position: ", skaterPosition);
	  if (skaterPosition === "j") {
	  	jammerArray.push(skaterID);
	  	console.log(`Jammer: ${jammerArray}`);
	  	removeFromArray(skaterID, pivotArray, blockersArray);
	  } else if (skaterPosition === "p") {
	  	pivotArray.push(skaterID);
	  	console.log(`Pivot: ${pivotArray}`);
	  	removeFromArray(skaterID, jammerArray, blockersArray);
	  } else if (skaterPosition === "b") {
	  	blockersArray.push(skaterID);
	  	console.log(`Blockers: ${blockersArray}`);
	  	removeFromArray(skaterID, jammerArray, pivotArray);
	  } else {
	  	// If the blank option is selected
	  	removeFromArray(skaterID, jammerArray, pivotArray, blockersArray);
	  }
	});

	$("#next").on("click", function (event) {
		event.preventDefault();

		if (!newteam_id) {
			alert("Whoa, slow down! Choose a team, first.");
		} else {
			// Get this jam's points 
			newpoints = parseInt($("#jamScore").val());
			if (!newpoints) {
				alert("Forgot to update this jam's score!");
			} else {
					// Split up arrays to get the values for positions and players
					let individualBlocker = blockersArray.slice(",");
							
					if (individualBlocker[2]) {
						newblocker3 = individualBlocker[2];
					} 
					if (individualBlocker[1]) {
						newblocker2 = individualBlocker[1];
					} 
					if (individualBlocker[0]) {
						newblocker1 = individualBlocker[0];
					}
					if (jammerArray.length === 1) {
						newjammer = jammerArray[0];
					} else if (jammerArray.length > 1) {
						alert("Only ONE jammer per jam!");
					}
					if (pivotArray.length === 1) {
						newpivot = jammerArray[0];
					} else if (pivotArray.length > 1) {
						alert("Only ONE pivot per jam!");
					}

					console.log(`Pivot: ${newpivot}\nJammer: ${newjammer}`);
					console.log(`Blocker1: ${newblocker1}\nBlocker2: ${newblocker2}\nBlocker3: ${newblocker3}`);

					
					// Build newJam object that will be posted to the db
					newJam = {
						bout_id: newbout_id,
						team_id: newteam_id,
						jam_number: newjam_number,
						points: newpoints,
						jammer: newjammer,
						pivot: newpivot,
						blocker1: newblocker1,
						blocker2: newblocker2,
						blocker3: newblocker3,
						star_pass: newstar_pass
					};
					console.log(newJam);
					// display data to be POSTed in a modal 
					// and ask for confirmation to:
						// continue to next jam or 
							// If confirm yes, submit
							// submitJam(newJam);
						// close out bout
							// If confirm yes, 
							// submitJam(newJam);
							// Route to bout/team selection page
					submitJam(newJam);
				}
			}	
	});

	// Submits a new jam and brings user to fresh jam page upon completion
	function submitJam(jamData) {
	  $.post("/api/jams/", jamData, function() {
	    location.reload();
	  });
	}

	function removeFromArray (value, array1, array2, array3) {
		// cycle through each array and remove that player from if it is in any of the arrays
		for (let i = 0; i < array1.length; i++) {
			if (value === array1[i]) {
				array1.splice(i, 1);
			}
		}
		for (let i = 0; i < array2.length; i++) {
			if (value === array2[i]) {
				array2.splice(i, 1);
			}
		}
		if(array3) {
			for (let i = 0; i < array3.length; i++) {
				console.log()
				if (value === array3[i]) {
					array3.splice(i, 1);
				}
			}
		}
		
	}

});
