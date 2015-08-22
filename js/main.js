$(document).ready(function() {

	// Gradient
	var startPos = 0
		, endPos = 3*$(window).height()
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

	// Navbar
	var $bodytag = $('html, body');
	var $gotoTags = $('#goto-who, #goto-what, #goto-committees');
	$gotoTags.click(function(e) {
		var elementName = e.target.id.substr(5);
		$bodytag.animate({
			scrollTop: $('#'+elementName).offset().top
		}, 300);
	});

	// Arrow
	$('#down').click(function() {
		$('html, body').animate({
			scrollTop: $('#who').offset().top
		}, 300);
	});

	// Committees
	var currentCommittee = 'default';
	var $committeeTags = $('#show-exec, #show-hack, #show-xfair, #show-make, #show-projx, #show-think, #show-devops, #show-mkt, #show-fin');
	$committeeTags.click(function(e) {
		var elementName = e.target.id.substr(5);
		if (currentCommittee !== elementName) {
			$('#show-'+currentCommittee).css('color', 'rgba(242,246,249,1)');
			$('#show-'+elementName).css('color', 'rgba(80,131,191,1)');
			$('#'+currentCommittee).fadeOut('fast', function() {
				$('#'+elementName).fadeIn('fast');
				currentCommittee = elementName;
			});
		}
	});

	// Photo hover
	$('.person').hover(function(){
		$(this).find('.overlay').fadeIn('fast');
	},
	function(){
		$(this).find('.overlay').fadeOut('fast');
	});
});