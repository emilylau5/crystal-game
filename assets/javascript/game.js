// random nuber for user to try and get
var targetNumber = 0;
// counter of value user clicks, keep addiing values to it
var counter = 0;
// number options per crystal
var valueOptions = [];

var wins = 0;

var losses = 0;

// updates counter
$("#user-score").text(counter);
// resets game when over, and sets the values of crystals when game starts
function reset() {
  counter = 0;
  valueOptions= [];
  for (var i = 0; i < 4; i++) {
     valueOptions.push(Math.ceil(Math.random() * 12));
  }
  targetNumber = Math.floor((Math.random() * 120) + 19);
  // shows target number
  $("#guess").html(targetNumber);
  console.log(targetNumber);

}
// on click 
$("button").on("click", function() {
  // take the value and make it the index
  var index = ($(this).attr("value"));
  // use the value # and take it as index for value options
  var add = valueOptions[index];
  console.log(add);
  // set the user "score"
  counter = counter + add;
  // add to html
  $("#user-score").html(counter);
 // if it reaches the same number
  if (counter === targetNumber) {
    // alert
    alert("You win!");
    // add to score
    wins++;
    // add score to html
    $("#win").html(wins);
    // reset values and number to guess
    reset();
  }
  if (counter > targetNumber) {
    alert("You lose!")
    losses++;
    $("#lose").html(losses);
    reset();
  }

});

reset();