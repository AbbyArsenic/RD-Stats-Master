$(document).ready(function() {

  $("#teamSelect").on("change", handleTeamChange);

  var eachSkater;

  getTeamsSkaters();


  function handleTeamChange() {
    var teamID = $(this).val();
    getTeamsSkaters(teamID);
  }

  function getTeamsSkaters (team) {
    var teamURL = team || "";
    if (teamURL) {
      teamURL = "team/"+teamURL
    }
    $.get("/api/skaters/"+teamURL, function(data) {
      // Do something with that data...
        // make it hit the row.handlebars file?
        // or render the rows here?
        eachSkater = data;
        if (!eachSkater || !eachSkater.length || eachSkater.length >= 30) {
          displayEmpty();
        } else {
          skaterRows(eachSkater);
        }
      });
  }

  function displayEmpty () {
    $("#playerData").empty();
    var messageh2 = $("<h2>");
    messageh2.css({ "text-align": "center", "margin-top": "50px" });
    messageh2.html("Select a team above.");
    $("#playerData").append(messageh2);
  }

  function skaterRows(eachSkater) {
    $("#playerData").empty();
    
    for (var i = 0; i < eachSkater.length; i++) {

      // creates a main div to hold each row
      var mainDiv = $("<div>").addClass("row mt-2");

      // div to hold player # buttons
      var playerName = $("<div>").addClass("col-4");
      var numberBtn = $("<button>").attr({
        type:"button",
        // WE NEED TO PUT LINK TO PLAYER IN DB HERE
        "data-skater_id": eachSkater[i].skater_id,
        class:"btn btn-danger"
        //20 SHOULD BE THE PATH TO GRAB THE NUMBERS
        }).append($("<p>"+eachSkater[i].skater_number+" - "+eachSkater[i].skater_name+"</p>").addClass("normal"));
      playerName.append(numberBtn);

      // div to hold the position select dropdown
      var positionForm = $("<form>").addClass("col-3");
      var jDiv = $("<div>").addClass("form-row align-items-center");
      var pDiv =$("<div>").addClass("col-auto");
      var positionSelect = $("<select>").attr({
            class:"form-control mb-2 mr-sm-2 mb-sm-0",
            id: "choosePosition",
            "data-skater_id":eachSkater[i].skater_id
            });
      var optionBlank = $("<option selected>").attr({"value":" "}).append($("<p> </p>").addClass("normal"));
      var optionJ = $("<option>").attr({"value":"j", "data-skater_id":eachSkater[i].skater_id}).append($("<p>Jammer</p>").addClass("normal"));
      var optionP = $("<option>").attr({"value":"p", "data-skater_id":eachSkater[i].skater_id}).append($("<p>Pivot</p>").addClass("normal"));
      var optionB = $("<option>").attr({"value":"b", "data-skater_id":eachSkater[i].skater_id}).append($("<p>Blocker</p>").addClass("normal"));
      positionSelect.append(optionB, optionP, optionJ, optionBlank);
      pDiv.append(positionSelect);
      jDiv.append(pDiv);
      positionForm.append(jDiv);

      // div for penalties text input
      var penaltiesDiv = $("<div>").addClass("col-4");
      var penaltiesInput = $("<input>").attr({
        type:"text",
        "data-skater_id": eachSkater[i].skater_id,
        class:"form-control",
        placeholder:"Penalties"
      });
      penaltiesDiv.append(penaltiesInput);

      // Place all 3 parts into mainDiv
      mainDiv.append(playerName, positionForm, penaltiesDiv);
      // Place the whole row into the playerData div
      $("#playerData").append(mainDiv);
    }
  }

});

