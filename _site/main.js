'use strict;'

$(document).foundation();

$('#project-list').hide();
$('.project-list-button').click(function(e) {
  e.preventDefault();
  if ($('#project-list:hidden').length) {
    $('#project-list').slideDown('fast');
    $('html, body').animate({ scrollTop: $(this).offset().top - 30 }, 200, function(){
      // need to recalculate position of topbar when project list open
      // $(document).foundation('magellan', 'reflow');
      // ^ this doesn't work
    });
  } else {
    $('html, body').animate({ scrollTop: $(this).offset().top - 30 }, 200, function(){
      // need to recalculate position of topbar when project list open
      // $(document).foundation('magellan', 'reflow');
      // ^ this doesn't work
    });
  }
});
