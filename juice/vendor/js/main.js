$(document).ready(function() {
	var fix = "fixed";
	$(document).scroll(function() {
		if ($("html, body").scrollTop() > 0) {
			if (fix == "fixed") {
				$(".banner").addClass("fixed-top");
				fix = "notFix";
			}
		} else {
			if (fix == "notFix") {
				$(".banner").removeClass("fixed-top");
				fix = "fixed";
			}
		}
	});

	$("#navbar").click(function() {
		$("#wrapper").addClass("sidebar-right");
		$("#sidebar-menu").removeClass("to-left");
		$(".layout-black").addClass("visible-black");
	});
	$(".layout-black").click(function() {
		$("#wrapper").removeClass("sidebar-right");
		$(".layout-black").removeClass("visible-black");
		$("#sidebar-menu").addClass("to-left");
	});
	$(".icon-close").click(function() {
		$("#wrapper").removeClass("sidebar-right");
		$(".layout-black").removeClass("visible-black");
		$("#sidebar-menu").addClass("to-left");
	});
});
