/* global $ */
$(document).ready(function () {
  // Use jQuery to select the <div> with id "red_header"
  $('#red_header').click(function () {
    // Add the class "red" to the <header> element
    $('header').addClass('red');
  });
});
