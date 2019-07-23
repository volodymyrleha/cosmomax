$(document).ready(function(){
  $('.item-favorite').click(function() {
  	$(this).children().eq(1).fadeToggle(300);
  });

  $('.toggler').click(function() {
  	if (!$(this).hasClass('toggler-active')) {
  		$(this).addClass('toggler-active');
  		$('.top').css('left', 0);
  	} else {
  		$(this).removeClass('toggler-active');
  		$('.top').css('left', '-100%');
  	}
  });

  $('.plus').click(function() {
  	$(this).parent().find('.info').slideToggle(500);

  	if ($(this).hasClass('active-plus')) {
  		$(this).removeClass('active-plus');
  	} else {
  		$(this).addClass('active-plus');
  	}
  });

  $('.popup-close').click(function() {
  	$(this).parent().parent().fadeOut(300);
  });

  $('#login-btn').click(function() {
  	$('#login-popup').fadeIn(300);
  });
});