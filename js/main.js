$(document).ready(function(){
  $('.item-favorite').click(function() {
  	$(this).children().eq(1).fadeToggle(800);
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
});