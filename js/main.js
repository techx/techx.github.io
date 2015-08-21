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

	var tStart = 0
		, tEnd = 4*$(window).height()+70
		, cStart = [29,29,29]
		, cEnd = [32,78,160]
		, cDiff = [cEnd[0] - cStart[0], cEnd[1] - cStart[1], cEnd[2] - cStart[2]];

	$(document).scroll(function() {
		var p = ($(this).scrollTop() - tStart) / (tEnd - tStart);
		p = Math.min(1, Math.max(0, p));
		var cBg = [Math.round(cStart[0] + cDiff[0] * p), Math.round(cStart[1] + cDiff[1] * p), Math.round(cStart[2] + cDiff[2] * p)];
		$('body').css('background-color', 'rgb(' + cBg.join(',') +')');
		$('nav.navbar.navbar-inverse').css('background-color', 'rgb(' + cBg.join(',') +')');
	});
});