$(window).scroll(function(){
	if ($(window).scrollTop() >= 930) {
		$("#fixed").addClass("fixed-nav");
	} else {
		$("#fixed").removeClass("fixed-nav");
	}
});
