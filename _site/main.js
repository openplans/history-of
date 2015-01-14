'use strict;'

$(document).foundation();

$('#project-list').hide();
$('.project-list-button').click(function(e) {
  e.preventDefault();
  if ($('#project-list:hidden').length) {
    $('#project-list').slideDown('fast');
    $('html, body').animate({ scrollTop: $(this).offset().top - 30 }, 200);
  } else {
    $('html, body').animate({ scrollTop: $(this).offset().top - 30 }, 200);
  }
});
