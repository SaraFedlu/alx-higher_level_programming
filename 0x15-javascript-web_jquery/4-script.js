/* global $ */
$(document).ready(function () {
  // Use jQuery to select the <div> with id "toggle_header"
  $('#toggle_header').click(function () {
    // Use jQuery to select the <header> element
    const header = $('header');

    // Check the current class and toggle between "red" and "green"
    if (header.hasClass('red')) {
      header.removeClass('red').addClass('green');
    } else {
      header.removeClass('green').addClass('red');
    }
  });
});
