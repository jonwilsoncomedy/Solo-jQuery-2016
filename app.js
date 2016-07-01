$( document ).ready(function() {

var red = 0;
var yellow = 0;
var green = 0;
var blue = 0;

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
