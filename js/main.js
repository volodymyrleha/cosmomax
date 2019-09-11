$(document).ready(function(){
  $('.item-favorite').click(function() {
  	$(this).children().eq(1).fadeToggle(300);
  });

  $('.toggler').click(function() {
	$('.top').css('left', 0);
	$('.nav-close').fadeToggle(300);
  });

  $('.nav-close').click(function() {
  	$('.top').css('left', '-100%');
  	$(this).fadeToggle(300);
  });

  $('.block').find('h3').click(function() {
  	$(this).parent().find('.info').slideToggle(500);

  	if ($(this).parent().find('.plus').hasClass('active-plus')) {
  		$(this).parent().find('.plus').removeClass('active-plus');
  	} else {
  		$(this).parent().find('.plus').addClass('active-plus');
  	}
  });

  $('.popup-close').click(function() {
  	$(this).parent().parent().fadeOut(300);
  	$('.nav-close').click();
  });

  $('#login-btn').click(function() {
  	$('#login-popup').fadeIn(300);
  });


  $('.add').click(function() {
  	var number = parseInt($(this).parent().find('input').val());
  	if (number < 99) {
  		$(this).parent().find('input').val(number + 1);
  	}
  });

  $('.sub').click(function() {
  	var number = parseInt($(this).parent().find('input').val());
  	if (number > 1) {
  		$(this).parent().find('input').val(number - 1);
  	}
  });

  $('.shop-item-close').click(function() {
  	$(this).parent().fadeOut(500);
  	$(this).parent().remove(600);
  });

  $("#open").click(function() {
  	$("#thanks-popup").fadeIn(300);
  });

  $("#close").click(function() {
  	$("#thanks-popup").fadeOut(300);
  });


	$('.label').click(function() {
		var text_for_p = "";

	  	if ($(this).find('input').prop("checked") == true) {
	  		$(this).find('input').prop("checked", false);
	  	} else {
	  		$(this).find('input').prop("checked", true);
	  	}

	  	var n = 0;

	  	$(this).parent().find('.label-2').each(function() {
	  		if ($(this).find('input').prop("checked") == true) {
	  			if (n == 0) {
	  				text_for_p += ": ";
	  				n = 1;
	  			} else {
	  				text_for_p += ", ";
	  			}
	  			text_for_p += $(this).find('span').eq(1).text();
	  		}
	  	});

	  	if (n == 1) {
	  		$(this).parent().parent().find('.input-popup').addClass('input-popup-active');
	  	} else {
	  		$(this).parent().parent().find('.input-popup').removeClass('input-popup-active');
	  	}

	  	$(this).parent().parent().find('.input-popup').find('p').find('span').text(text_for_p);
	});


	$('.input-popup').click(function(event) {
		if (event.target.className == "input-popup-arrow") {
			if ($(this).hasClass('input-popup-active')) {
				$(this).removeClass('input-popup-active');

				$(this).parent().find('.input-popup-content').find('.label-2').each(function() {
					if ($(this).find('input').prop("checked") == true) {
						$(this).find('input').prop("checked", false);
					}
				});

				$(this).find('span').text("");

				$(this).parent().find("#number_btn").removeClass("button-active");
				$(this).parent().find("#min-range-number").prop("disabled", true);
               	$(this).parent().find("#max-range-number").prop("disabled", true);

			} else {
				$('.input-popup').not($(this)).each(function() {
					if ($(this).hasClass('input-popup-open')) {
				  		$(this).removeClass('input-popup-open');
				  		$(this).parent().find('.input-popup-content').fadeToggle(300);
				  	}
				});

				if ($(this).hasClass('input-popup-open')) {
			  		$(this).removeClass('input-popup-open');
			  	} else {
			  		$(this).addClass('input-popup-open');
			  	}

			  	$(this).parent().find('.input-popup-content').fadeToggle(300);
			}

		} else {
			$('.input-popup').not($(this)).each(function() {
				if ($(this).hasClass('input-popup-open')) {
			  		$(this).removeClass('input-popup-open');
			  		$(this).parent().find('.input-popup-content').fadeToggle(300);
			  	}
			});

			if ($(this).hasClass('input-popup-open')) {
		  		$(this).removeClass('input-popup-open');
		  	} else {
		  		$(this).addClass('input-popup-open');
		  	}

		  	$(this).parent().find('.input-popup-content').fadeToggle(300);
		}
	});


	$('.input-popup-content').find('p').click(function() {
		var radio = "";
		$('.input-popup-radio').find('p').text($(this).text());

		radio += $(this).attr("to");
		$(radio).prop('checked', true);		
	});

	$('.checkmark').click(function() {
		$(this).parent().find('input').prop("checked", true);
	});

	$('.radio-popup').click(function() {
		$(this).fadeToggle(300);
		$(this).parent().find('.input-popup').removeClass('input-popup-open');
	});
});
