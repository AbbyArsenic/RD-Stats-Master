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

      var jForm = $("<form>").addClass("col-3");
        var jDiv = $("<div>").addClass("form-row align-items-center");
        var pDiv =$("<div>").addClass("col-auto");
        // var jLabel = $("<label>").attr({
        //       class:"custom-select mb-2 mr-sm-2 mb-sm-0",
        //       for: "jpb"
        //       }).append($("<p>Please select</p>").addClass("normal"));
        var jSelect = $("<select>").attr({
              class:"custom-select mb-2 mr-sm-2 mb-sm-0",
              id: "jpb"
              });
        var optionselect = $("<option>").prop("selected", true).append($("<p>Choose...</p>").addClass("normal"));
        var joption = $("<option>").attr("value", "j").append($("<p>Jammer</p>").addClass("normal"));
        var poption = $("<option>").attr("value", "p").append($("<p>Pivot</p>").addClass("normal"));
         var boption = $("<option>").attr("value", "b").append($("<p>Blocker</p>").addClass("normal"));


       jSelect.append(boption);
        jSelect.append(poption);
        jSelect.append(joption);
        jSelect.append(optionselect);
        pDiv.append(jSelect);
        // pDiv.append(jLabel);
        jDiv.append(pDiv);
        jForm.append(jDiv);

       

       

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
        mainDiv.append(jForm);
        mainDiv.append(penaltiesDiv);
      // append the row to the league.html
      $("#playerData").append(mainDiv);
    }
  }

});

