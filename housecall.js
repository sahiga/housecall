$(document).ready(function() {
  var lists = $('.sidebar-list');
  var titles = $('.sidebar-title');
  var icons = $('.toggle-icon');

  titles.click(function() {
    var icon = $(this).children('.toggle-icon');
    if (icon.hasClass('fa-minus')) {
      icon.removeClass('fa-minus').addClass('fa-plus');
    } else {
      icon.removeClass('fa-plus').addClass('fa-minus');
    }

    $(this).parent().next().toggle('fast');
  });

  function hideLists() {
    if ($(window).width() < 800) {
      lists.css('display', 'none');
      icons.removeClass('fa-minus').addClass('fa-plus');
    } else {
      lists.css('display', 'block');
      icons.removeClass('fa-plus').addClass('fa-minus');
    }

  }

  $(window).resize(function() {
    hideLists();
  });

  hideLists();

});
