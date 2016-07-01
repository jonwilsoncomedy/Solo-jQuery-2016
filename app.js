$( document ).ready(function() {

// sets variables to be added to each time the color's corresponding button is clicked
var red = 0;
var yellow = 0;
var green = 0;
var blue = 0;

// // These onClick functions do the following, in order: 1) create a new object to
//    hold the code that will be added inside the container div; 2) append that code
//    inside the container div; 3) add 1 to the color counter; 4) create a new object
//    to hold the current value of the counter variable; 5) empty the content inside the
//    current html counter <p>; 6) append the new code into that <p> which updates the
//    counter value.
$('body').on('click', '#red1', function() {
  var $redBox = $('<div class="redBox color-cube"></div>' );
  $('.container').append($redBox);
  red++;
  var $newNumber = red;
  $('#red').empty();
  $('#red').append('Total red: ' + $newNumber);

});

$('body').on('click', '#yellow1', function() {
  var $yellowBox = $('<div class="yellowBox color-cube"></div>');
  $('.container').append($yellowBox);
  yellow++;
  var $newNumber = yellow;
  $('#yellow').empty();
  $('#yellow').append('Total yellow: ' + $newNumber);

});

$('body').on('click', '#green1', function() {
  var $greenBox = $('<div class="greenBox color-cube"></div>');
  $('.container').append($greenBox);
  green++;
  var $newNumber = green;
  $('#green').empty();
  $('#green').append('Total green: ' + $newNumber);

});

$('body').on('click', '#blue1', function() {
  var $blueBox = $('<div class="blueBox color-cube"></div>');
  $('.container').append($blueBox);
  blue++;
  var $newNumber = blue;
  $('#blue').empty();
  $('#blue').append('Total blue: ' + $newNumber);

});



















});
