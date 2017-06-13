$(document).ready(function() {
	$('.slider').slick({
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="icon icon-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="icon icon-arrow-right"></i></button>',
		dots: true
	})
	$('.reviews__link').click(function() {
		var friend = $(this).prev('.reviews__hidden'),
			anons = $(this).prevAll('.reviews__anons');
		friend.slideDown(400);
		anons.addClass('reviews__anons_toggle');
		$(this).hide();
	});
});




// Select
// $('form').submit(function() {
// 	$.ajax({
// 	    type: "POST",
// 	    url: "/order.php",
// 	    data: $(this).serialize()
// 	}).done(function() {
// 	    popupForm.css('display','none');
// 	    popupMessage.css('display','block');
// 	});
// 	return false;
// });