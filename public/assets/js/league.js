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

      // creates a main Div to hold the row
      var mainDiv = $("<div>").addClass("row mt-2");

      //section to display number
      var numberDiv = $("<div>").addClass("col-2");
      var numberBtn = $("<button>").attr({
        type:"button",
        // WE NEED TO PUT LINK TO PLAYER IN DB HERE
        "data-type": "linkTo.player["+eachSkater[i].skater_id+"]",
        class:"btn btn-danger"
        //20 SHOULD BE THE PATH TO GRAB THE NUMBERS
        }).append($("<p>" + eachSkater[i].skater_number + "</p>").addClass("normal"));
      numberDiv.append(numberBtn);

      //section to display Jammer checkbox
      var jDiv = $("<div>").addClass("col-1");
      var jLabel = $("<label>").addClass("form-check-label");
      var jInput = $("<input>").attr({
        type:"checkbox",
        "data-type": "linkTo.player["+eachSkater[i].skater_id+"]",
        class:"form-check-input",
        id: "jammer["+eachSkater[i].skater_id+"]",
        value:"j"
     }).append($("<p>J</p>").addClass("normal"));
      jLabel.append(jInput);
      jDiv.append(jLabel);

      //section to display Pivot checkbox
      var pDiv = $("<div>").addClass("col-1");
      var pLabel = $("<label>").addClass("form-check-label");
      var pInput = $("<input>").attr({
       type:"checkbox",
       "data-type": "linkTo.player["+eachSkater[i].skater_id+"]",
       class:"form-check-input",
       id: "pivot["+eachSkater[i].skater_id+"]",
       value:"p"
     }).append($("<p>P</p>").addClass("normal"));
      pLabel.append(pInput);
      pDiv.append(pLabel);

      //section to display Blocker checkbox
      var bDiv = $("<div>").addClass("col-1");
      var bLabel = $("<label>").addClass("form-check-label");
      var bInput = $("<input>").attr({
       type:"checkbox",
       "data-type": "linkTo.player["+eachSkater[i].skater_id+"]",
       class:"form-check-input",
       id: "blocker["+eachSkater[i].skater_id+"]",
       value:"b"
     }).append($("<p>B</p>").addClass("normal"));
      bLabel.append(bInput);
      bDiv.append(bLabel);

      //section for form input
      var penaltiesDiv = $("<div>").addClass("col-7");
      var penaltiesInput = $("<input>").attr({
       type:"text",
       "data-type": "linkTo.player["+eachSkater[i].skater_id+"]",
       class:"form-control",
       id: "blocker["+eachSkater[i].skater_id+"]",
       placeholder:"Penalties"
     });
      penaltiesDiv.append(penaltiesInput);

      //Appending everthing
      mainDiv.append(numberDiv);
      mainDiv.append(jDiv);
      mainDiv.append(pDiv);
      mainDiv.append(bDiv);
      mainDiv.append(penaltiesDiv);
      // append the row to the league.html
      $("#playerData").append(mainDiv);
    }
  }

});

