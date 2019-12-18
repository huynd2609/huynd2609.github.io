$(document).ready(function() {
	var swiper = new Swiper(".swiper-container", {
		slidesPerView: 4,
		spaceBetween: 30,
		slidesPerGroup: 1,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		}
	});

	$(".schedule-day").addClass("hidden-sche");
	$(".schedule-day:nth-child(1)").removeClass("hidden-sche");
	var day = $(".title-note ul li");
	day.click(function() {
		var dayClass = $(this).attr("id");
		day.removeClass("sche-active");
		$(this).addClass("sche-active");
		$(".schedule-day").each(function() {
			var _class = $(this).hasClass(dayClass);
			if (_class) {
				$(".schedule-day").addClass("hidden-sche");
				$(this).removeClass("hidden-sche");
			}
		});
	});

	$("#carouselExampleIndicators").hover(function() {
		$(".carousel").carousel("pause");
	});

	$("#menuMobile").click(function() {
		$("#home-text").addClass("visibleMenu");
		$("#top-bar").addClass("l500");
	});

	$(".closeMenu").click(function() {
		$("#home-text").removeClass("visibleMenu");
		$("#top-bar").removeClass("l500");
	});

	if (screen.width < 1199) {
		var swiper = new Swiper(".swiper-container", {
			slidesPerView: 3,
			spaceBetween: 30,
			slidesPerGroup: 1,
			loop: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true
			}
		});
		$("#carouselExampleIndicators").click(function() {
			$(".carousel").carousel("pause");
		});
	}

	if (screen.width < 991) {
		var swiper = new Swiper(".swiper-container", {
			slidesPerView: 2,
			spaceBetween: 30,
			slidesPerGroup: 1,
			loop: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true
			}
		});
		$(".schedule-detail").addClass("mbdb");
		$(".schedule-title").addClass("mbw100");
		$(".schedule-main").addClass("mbw100");
		$(".footer-detail").addClass("mbdb");
	}

	if (screen.width < 767) {
		$(".schedule-day").addClass("mbdb");
		$(".info-day").addClass("mbw100");
		$(".programs-day").addClass("mbw100");
	}
});
