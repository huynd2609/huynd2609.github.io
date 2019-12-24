$(document).ready(function () {
	$('#main').load("html/index.html");
	$('.page').click(function () {
		if (this.attributes.class.value.match(/\bhome\b/)) {
			$('#wrapper').removeClass('html-child');
			$('#banner').empty();
		} else {
			$('#wrapper').addClass('html-child');
			$('#banner').html(
				'<div class="container"><div class="banner-detail"><h1>'+$(this).attr('data-name')+'</h1></div></div>'
			)
		};
		$('#main').empty();
		$('.page').removeClass('nav-active');
		var location = $(this).attr("name");
		$('li[name="'+location+'"]').addClass('nav-active');
		$('#main').load("html/" + location, function(){
		
		});
	});
	$('.login').click(function () {
		$('#wrapper').empty();
		var location = $(this).attr("name");
		$('#wrapper').load("html/" + location);
	});

	$(document).on("click", '.newsDetail', function () {
		$('#main').empty();
        var location = $(this).attr("name");
		$('#main').load("html/" + location);
		$('#main').addClass(location);
    })
	
	$(".back-top").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 800);
	});

	$("#menuMobile").click(function () {
		$("#home-text").addClass("visibleMenu");
		$(".layoutBlack").addClass("visibleBlack");
	});

	$(".layoutBlack").click(function () {
		$("#home-text").removeClass("visibleMenu");
		$(".layoutBlack").removeClass("visibleBlack");
	});

	$(".closeMenu").click(function () {
		$("#home-text").removeClass("visibleMenu");
		$(".layoutBlack").removeClass("visibleBlack");
	});
});
