// random nuber for user to try and get
var targetNumber = 0;
// counter of value user clicks, keep addiing values to it
var counter = 0;
// number options per crystal
var valueOptions = [];
// shows target number
$("#number-to-guess").text(targetNumber);

// updates counter
$("#user-score").text(counter);

function reset() {
  counter = 0
  for (var i = 0; i < 4; i++) {
     valueOptions.push(Math.ceil(Math.random() * 12));
  }
  targetNumber; = math.floor((math.random() * 100) + 1);
}