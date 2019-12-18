$(document).ready(function () {
	$(".back-top").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 800);
	});
	// var fix = "fixed";
	if ($('#wrapper').hasClass('index')) {
		var fade = $(".order-items").offset().top - 400;
		if (screen.width > 1199) {
			$(document).scroll(function () {
				// if ($("html, body").scrollTop() > 0) {
				// 	if (fix == "fixed") {
				// 		$(".banner").addClass("fixed-top");
				// 		fix = "notFix";
				// 	}
				// } else {
				// 	if (fix == "notFix") {
				// 		$(".banner").removeClass("fixed-top");
				// 		fix = "fixed";
				// 	}
				// }

				if ($("html, body").scrollTop() > fade) {
					$(".order-item-wrapper:nth-of-type(1)").addClass("animated fadeInLeft");
					$(".order-item-wrapper:nth-of-type(2)").addClass("animated fadeInUp");
					$(".order-item-wrapper:nth-of-type(3)").addClass("animated fadeInRight");
				}

				if ($("html, body").scrollTop() > $(".reservation-form").offset().top - 400) {
					$(".reservation-form").addClass("animated fadeInUp");
				}
				if ($("html, body").scrollTop() > $(".categories").offset().top - 400) {
					$(".categories li").addClass("animated bounceIn");
				}
			});
		}
		
	// TODO: xử lý load và hiển thị thư viện ảnh bằng thư viện isotope
	$(".online-product-list").isotope({
		itemSelector: ".online-product-wrapper",
		percentPosition: true
	});
	$(".categories li button").click(function () {
		$(".categories li button").removeClass("selected");
		$(this).addClass("selected");

		var _data = $(this).data("filter");
		if (_data == "all") {
			$(".online-product-list").isotope({ filter: "*" });
		} else {
			$(".online-product-list").isotope({ filter: _data });
		}
	});
	}

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
	if (screen.width < 1199) {
		$(".card-img-top").removeClass("ih6");
	}
	if (screen.width < 1199) {
		$(".order-item-wrapper").addClass("animated");
		$(".reservation-form").addClass("animated");
		$(".categories li").addClass("animated");
		$(".section-heading h1 span").addClass("animated");
	}

	//TODO: PAGE MENU
	if ($('#wrapper').hasClass('menu')) {
		var spnb = [
			{
				loại: "Món nổi bật",
				ảnh: "images/menu/cf1.jpg",
				giá: "29.000 đ",
				tên: "Cà phê sữa",
				size: "S M L"
			},
			{
				loại: "Món nổi bật",
				ảnh: "images/menu/cf2.jpg",
				giá: "50.000 đ",
				tên: "Cold brew sữa tươi",
				size: "S - M - L"
			},
			{
				loại: "Món nổi bật",
				ảnh: "images/menu/cf3.jpg",
				giá: "55.000 đ",
				tên: "Caramel Macchiato",
				size: "S - M - L"
			},
			{
				loại: "Món nổi bật",
				ảnh: "images/menu/mc1.jpg",
				giá: "45.000 đ",
				tên: "Trà gạo rang Macchiato",
				size: "S - M - L"
			},
			{
				loại: "Món nổi bật",
				ảnh: "images/menu/t1.jpg",
				giá: "25.000 đ",
				tên: "Bánh bông lan trứng muối",
				size: "1 miếng"
			},
			{
				loại: "Món nổi bật",
				ảnh: "images/menu/t2.jpg",
				giá: "55.000 đ",
				tên: "Bạc sỉu",
				size: "S - M - L"
			},
			{
				loại: "Món nổi bật",
				ảnh: "images/menu/b1.jpg",
				giá: "55.000 đ",
				tên: "Trà xoài Macchiato",
				size: "S - M - L"
			},
			{
				loại: "Món nổi bật",
				ảnh: "images/menu/cf-hat.jpg",
				giá: "85.000 đ",
				tên: "Cà phê rang mộc nguyên chất",
				size: "250 gram"
			},
		]
		var cf = [
			{
				loại: "Cà phê",
				ảnh: "images/menu/cf1.jpg",
				giá: "55.000 đ",
				tên: "Caramel Macchiato",
				size: "S - M - L"
			},
			{
				loại: "Cà phê",
				ảnh: "images/menu/cf2.jpg",
				giá: "29.000 đ",
				tên: "Cà phê sữa",
				size: "S - M - L"
			},
			{
				loại: "Cà phê",
				ảnh: "images/menu/cf3.jpg",
				giá: "50.000 đ",
				tên: "Cold brew sữa tươi",
				size: "S - M - L"
			},
			{
				loại: "Cà phê",
				ảnh: "images/menu/cf2.jpg",
				giá: "55.000 đ",
				tên: "Caramel Macchiato",
				size: "S - M - L"
			},
			{
				loại: "Cà phê",
				ảnh: "images/menu/cf1.jpg",
				giá: "29.000 đ",
				tên: "Cà phê sữa",
				size: "S - M - L"
			},
		]
		var tea = [
			{
				loại: "Cà phê",
				ảnh: "images/menu/t1.jpg",
				giá: "55.000 đ",
				tên: "Caramel Macchiato",
				size: "S - M - L"
			},
			{
				loại: "Cà phê",
				ảnh: "images/menu/t2.jpg",
				giá: "29.000 đ",
				tên: "Cà phê sữa",
				size: "S - M - L"
			},
			{
				loại: "Cà phê",
				ảnh: "images/menu/t3.jpg",
				giá: "50.000 đ",
				tên: "Cold brew sữa tươi",
				size: "S - M - L"
			},
		]
		var mac = [
			{
				loại: "Cà phê",
				ảnh: "images/menu/mc2.jpg",
				giá: "55.000 đ",
				tên: "Caramel Macchiato",
				size: "S - M - L"
			},
			{
				loại: "Cà phê",
				ảnh: "images/menu/mc1.jpg",
				giá: "29.000 đ",
				tên: "Cà phê sữa",
				size: "S - M - L"
			},
			{
				loại: "Cà phê",
				ảnh: "images/menu/mc2.jpg",
				giá: "50.000 đ",
				tên: "Cold brew sữa tươi",
				size: "S - M - L"
			},
			{
				loại: "Cà phê",
				ảnh: "images/menu/mc1.jpg",
				giá: "55.000 đ",
				tên: "Caramel Macchiato",
				size: "S - M - L"
			},
		]
		var bakery = [
			{
				loại: "Cà phê",
				ảnh: "images/menu/b1.jpg",
				giá: "29.000 đ",
				tên: "Bánh bông lan trứng muối",
				size: "1 miếng"
			},
			{
				loại: "Cà phê",
				ảnh: "images/menu/b2.jpg",
				giá: "29.000 đ",
				tên: "Bánh Croissant bơ tỏi",
				size: "1 cái"
			},
			{
				loại: "Cà phê",
				ảnh: "images/menu/b3.jpg",
				giá: "39.000 đ",
				tên: "Bánh gấu chocolate",
				size: "1 cái"
			},
			{
				loại: "Cà phê",
				ảnh: "images/menu/b4.jpg",
				giá: "29.000 đ",
				tên: "Bánh Tiramisu",
				size: "1 miếng"
			},
		]
		var cfh = [
			{
				loại: "Cà phê",
				ảnh: "images/menu/cf-hat.jpg",
				giá: "85.000 đ",
				tên: "Cà phê hạt nguyên chất",
				size: "250 gram"
			},
		]
		var products = function (e) {
			var html = "";
			for (var i = 0; i < e.length; i++) {
				html += '<div class="online-product-wrapper w33 cafe bsbb pr25 mb25">';
				html += '<div class="online-product">';
				html += '<div class="card">';
				html += '<div class="card-img relative">';
				html += '<img class="card-img-top" src="' + e[i].ảnh + '" alt="' + e[i].tên + '"/></div>';
				html += '<div class="card-body relative">';
				html += '<div class="card-body-price pa t0 l0 plr25 ptb10">';
				html += '<span>' + e[i].giá + '</span></div>';
				html += '<div class="title-detail plr25 ptb50">';
				html += '<h5 class="card-title fs13" title="' + e[i].tên + '">' + e[i].tên + '</h5>';
				html += '<span>' + e[i].size + '</span></div>';
				html += '<div class="add-buy tac w1">';
				html += '<a href="" class="add-cart ptb10 w50 fl">Thêm vào giỏ</a>';
				html += '<a href="" class="btn-buy ptb10 w50 fl">Mua ngay</a></div></div></div></div></div>';
			}
			return html;
		}
		$('#monnoibat .product-items').html(products(spnb));
		$('#cafe .product-items').html(products(cf));
		$('#tea .product-items').html(products(tea));
		$('#macchiato .product-items').html(products(mac));
		$('#bakery .product-items').html(products(bakery));
		$('#cafehat .product-items').html(products(cfh));

		$(document).scroll(function () {
			if ($("html, body").scrollTop() > $(".col-left").offset().top) {
				$(".col-left").addClass('sticky');
			};
			var location = function (e) {
				return $(e).offset().top - 100;
			}

			$(".col-left ul li a").click(function () {
				$(".col-left ul li").removeClass('nav-active');
				$(this).parent().addClass('nav-active');
				var id = $(this).attr("href"); //lấy về giá trị của href được click
				var location = $(id).offset().top; //lấy vị trí của id được click
				//tạo chuyển động Scroll
				$("html, body").animate({ scrollTop: location }, 800);
			});
			if ($("html, body").scrollTop() > location('#monnoibat') && $("html, body").scrollTop() < location('#cafe')) {
				$(".col-left ul li").removeClass('nav-active');
				$('.col-left ul li a[href="#monnoibat"]').parent().addClass('nav-active');
			}
			else if ($("html, body").scrollTop() > location('#cafe') && $("html, body").scrollTop() < location('#tea')) {
				$(".col-left ul li").removeClass('nav-active');
				$('.col-left ul li a[href="#cafe"]').parent().addClass('nav-active');
			}
			else if ($("html, body").scrollTop() > location('#tea') && $("html, body").scrollTop() < location('#macchiato')) {
				$(".col-left ul li").removeClass('nav-active');
				$(".col-left ul li a[href='#tea']").parent().addClass('nav-active');
			}
			else if ($("html, body").scrollTop() > location('#macchiato') && $("html, body").scrollTop() < location('#bakery')) {
				$(".col-left ul li").removeClass('nav-active');
				$(".col-left ul li a[href='#macchiato']").parent().addClass('nav-active');
			}
			else if ($("html, body").scrollTop() > location('#bakery') && $("html, body").scrollTop() < location('#cafehat')) {
				$(".col-left ul li").removeClass('nav-active');
				$(".col-left ul li a[href='#bakery']").parent().addClass('nav-active');
			}
			else if ($("html, body").scrollTop() > location('#cafehat')) {
				$(".col-left ul li").removeClass('nav-active');
				$(".col-left ul li a[href='#cafehat']").parent().addClass('nav-active');
			}
		});
	}

	//TODO: PAGE BLOG
	if ($('#wrapper').hasClass('blog')) {
		$(".bpc").isotope({
			itemSelector: ".gi",
			percentPosition: true
		});
		
		$('.imgz').click(function() {
			$('body').append('<div id="popup" class="wh1 t0 b0 l0 r0 pf relative" style="background: rgba(0, 0, 0, 0.9); opacity: 0; visibility: hidden;"></div>');
			$('#popup').css({"opacity": "1", "visibility": "visible"});
			var image = $(this).html();
			$('#popup').append('<div class="container pa wh512 tac pa25" style="top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%); width:512px; height:512px;">' + image + '</div>');
			$('#popup img').css({
				"position": "absolute", "top": "50%", "left": "50%","transform": "translateX(-50%) translateY(-50%)", "max-width": "100%", "max-height": "100%",
			})
		})
		$(document).mouseup(function(e) {
			var container = $("img");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				console.log(456);
				$('#popup').remove();
			} else {
				console.log(123);
			}
		});
	}

	// window.fbAsyncInit = function() {
	// 	FB.init({
	// 		appId: "460575254854502",
	// 		cookie: true,
	// 		xfbml: true,
	// 		version: "v5.0"
	// 	});

	// 	FB.AppEvents.logPageView();
	// };

	// (function(d, s, id) {
	// 	var js,
	// 		fjs = d.getElementsByTagName(s)[0];
	// 	if (d.getElementById(id)) {
	// 		return;
	// 	}
	// 	js = d.createElement(s);
	// 	js.id = id;
	// 	js.src = "https://connect.facebook.net/en_US/sdk.js";
	// 	fjs.parentNode.insertBefore(js, fjs);
	// })(document, "script", "facebook-jssdk");

	// (function() {
	// 	console.log('Start file login with firebase');
	// 	// Initialize Firebase
	// 	var config = {
	// 		apiKey: "xxxxx",
	// 		authDomain: "xxxx.firebaseapp.com",
	// 		databaseURL: "xxxx.firebaseio.com",
	// 		projectId: "xxxx",
	// 		storageBucket: "xxxx.appspot.com",
	// 		messagingSenderId: "xxxxx"
	// 	};
	// 	firebase.initializeApp(config);
	// 	var database = firebase.database();
	
	// 	//Google singin provider
	// 	var ggProvider = new firebase.auth.GoogleAuthProvider();
	// 	//Facebook singin provider
	// 	var fbProvider = new firebase.auth.FacebookAuthProvider();
	// 	//Login in variables
	// 	const btnGoogle = document.getElementById('btnGoogle');
	// 	const btnFaceBook = document.getElementById('btnFacebook');
	
	// 		//Sing in with Google
	// 		btnGoogle.addEventListener('click', e => {
	// 			firebase.auth().signInWithPopup(ggProvider).then(function(result) {
	// 				var token = result.credential.accessToken;
	// 				var user = result.user;
	// 				console.log('User>>Goole>>>>', user);
	// 				userId = user.uid;
	
	// 			}).catch(function(error) {
	// 				console.error('Error: hande error here>>>', error.code)
	// 			})
	// 		}, false)
	
	// 		//Sing in with Facebook
	// 		btnFaceBook.addEventListener('click', e => {
	// 			firebase.auth().signInWithPopup(fbProvider).then(function(result) {
	// 				// This gives you a Facebook Access Token. You can use it to access the Facebook API.
	// 				var token = result.credential.accessToken;
	// 				// The signed-in user info.
	// 				var user = result.user;
	// 				console.log('User>>Facebook>', user);
	// 				// ...
	// 				userId = user.uid;
				
	// 			}).catch(function(error) {
	// 				// Handle Errors here.
	// 				var errorCode = error.code;
	// 				var errorMessage = error.message;
	// 				// The email of the user's account used.
	// 				var email = error.email;
	// 				// The firebase.auth.AuthCredential type that was used.
	// 				var credential = error.credential;
	// 				// ...
	// 				console.error('Error: hande error here>Facebook>>', error.code)
	// 			});
	// 		}, false)
	// 		//jquery 
	// }())
});
