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

	$("#down").click(function() {
		$('html, body').animate({
			scrollTop: $("#who").offset().top
		}, 300);
	});

	$(".person").hover(function(){
		$(this).find(".overlay").fadeIn('fast');
	},
	function(){
		$(this).find(".overlay").fadeOut('fast');
	});
});