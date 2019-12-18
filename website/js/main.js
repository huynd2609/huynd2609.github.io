$(document).ready(function() {
	var width = screen.width;
	var height = screen.height;

	$("#menuMobile button").click(function() {
		$("#menu-list").toggleClass("menuActive");
		$("#menuMobile button i").toggleClass("iActive");
	});

	if(height >= 320 && height < 500) {
		$("#main-content.pd0 .main-content-text").css("height", "170%");
		$("#main-content.pd0 .main-content-title").css("height", "170%");
	} else {
		$("#main-content.pd0 .main-content-text").css("height", "100%");
		$("#main-content.pd0 .main-content-title").css("height", "100%");
	}

});
