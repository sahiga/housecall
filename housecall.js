$(document).ready(function() {
  var lists = $('.sidebar-list');
  var titles = $('.sidebar-title');
  var icons = $('.toggle-icon');

  // Switch +/- icons when titles are clicked
  titles.click(function() {
    var icon = $(this).children('.toggle-icon');
    if (icon.hasClass('fa-minus')) {
      icon.removeClass('fa-minus').addClass('fa-plus');
    } else {
      icon.removeClass('fa-plus').addClass('fa-minus');
    }

    // Toggle the menu below the title
    $(this).next().toggle('fast');
  });

  // Hide sidebar menus in viewports of less than 800 pixels; otherwise, show them
  function toggleLists() {
    if ($(window).width() < 800) {
      lists.css('display', 'none');
      icons.removeClass('fa-minus').addClass('fa-plus');
    } else {
      lists.css('display', 'block');
      icons.removeClass('fa-plus').addClass('fa-minus');
    }

  }

  // Call toggleLists() on window resize as well as document ready
  $(window).resize(function() {
    toggleLists();
  });

  toggleLists();

});
