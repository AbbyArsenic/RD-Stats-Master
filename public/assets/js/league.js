$(document).ready(function() {

      // Arrays for holding Numbers(need to be able to grab arrays out of database)
      var numbers = [1,5,10,13,15,20,27,33,40,44];


      // DYNAMICALLY CREATE BUTTONS
      // =================================================================================
      $("#select").on("click", function(event) {
        event.preventDefault();
      //for-loop to iterate through the numbers array.
      for (var i = 0; i < numbers.length; i++) {

        // creates a main Div to hold the row
        var mainDiv = $("<div>").addClass("row mt-2");

        //section to display number
        var numberDiv = $("<div>").addClass("col-2");
        var numberBtn = $("<button>").attr({
             type:"button",
             // WE NEED TO PUT LINK TO PLAYER IN DB HERE
             "data-type": "linkTo.player["+i+"]",
              class:"btn btn-danger"
              //20 SHOULD BE THE PATH TO GRAB THE NUMBERS
              }).append($("<p>" + numbers[i] + "</p>").addClass("normal"));
        numberDiv.append(numberBtn);

        //section to display Jammer checkbox
        var jDiv = $("<div>").addClass("col-1");
        var jLabel = $("<label>").addClass("form-check-label");
        var jInput = $("<input>").attr({
             type:"checkbox",
             "data-type": "linkTo.player["+i+"]",
              class:"form-check-input",
              id: "jammer["+i+"]",
              value:"j"
              }).append($("<p>J</p>").addClass("normal"));
        jLabel.append(jInput);
        jDiv.append(jLabel);

        //section to display Pivot checkbox
        var pDiv = $("<div>").addClass("col-1");
        var pLabel = $("<label>").addClass("form-check-label");
        var pInput = $("<input>").attr({
             type:"checkbox",
             "data-type": "linkTo.player["+i+"]",
              class:"form-check-input",
              id: "pivot["+i+"]",
              value:"p"
              }).append($("<p>P</p>").addClass("normal"));
        pLabel.append(pInput);
        pDiv.append(pLabel);

        //section to display Blocker checkbox
        var bDiv = $("<div>").addClass("col-1");
        var bLabel = $("<label>").addClass("form-check-label");
        var bInput = $("<input>").attr({
             type:"checkbox",
             "data-type": "linkTo.player["+i+"]",
              class:"form-check-input",
              id: "blocker["+i+"]",
              value:"b"
              }).append($("<p>B</p>").addClass("normal"));
        bLabel.append(bInput);
        bDiv.append(bLabel);

        //section for form input
        var penaltiesDiv = $("<div>").addClass("col-7");
        var penaltiesInput = $("<input>").attr({
             type:"text",
             "data-type": "linkTo.player["+i+"]",
              class:"form-control",
              id: "blocker["+i+"]",
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
    });

    });

      