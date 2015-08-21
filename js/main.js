$(document).ready(function() {

	var $bodytag = $('html, body');
	var $tags = $('#goto-who, #goto-what, #goto-committees, #goto-team');
	$tags.click(function(e) {
		var elementName = e.target.id.substr(5);
		console.log(e);
		$bodytag.animate({
			scrollTop: $('#'+elementName).offset().top
		}, 300);
	});

	$('#down').click(function() {
		$('html, body').animate({
			scrollTop: $('#who').offset().top
		}, 300);
	});

	$('.person').hover(function(){
		$(this).find('.overlay').fadeIn('fast');
	},
	function(){
		$(this).find('.overlay').fadeOut('fast');
	});

	var startPos = 0
		, endPos = 4*$(window).height()
		, startColor = [29,29,29]
		, endColor = [32,78,160]
		, diffColor = [endColor[0] - startColor[0], endColor[1] - startColor[1], endColor[2] - startColor[2]];

	$(document).scroll(function() {
		var pos = ($(this).scrollTop() - startPos) / (endPos - startPos);
		pos = Math.min(1, Math.max(0, pos));
		var bgColor = [Math.round(startColor[0] + diffColor[0] * pos), Math.round(startColor[1] + diffColor[1] * pos), Math.round(startColor[2] + diffColor[2] * pos)];
		$('body').css('background-color', 'rgb(' + bgColor.join(',') +')');
		// $('nav.navbar.navbar-inverse').css('background-color', 'rgb(' + bgColor.join(',') +')');
	});
});