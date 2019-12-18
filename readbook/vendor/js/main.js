$(document).ready(function() {
	//TODO: SÁCH ĐỌC NHIỀU
	var books = [
		{
			ảnh: "images/section/hot/h_nh_ph_c_kh_ng_m_c_ng_ph_c.jpg",
			tên: "Hạnh phúc không mặc đồng phục",
			votes: "90 votes",
			miêuTả: "Phụ nữ hiện đại không nên làm “nàng công chúa ngủ trong rừng” thụ động chờ “hoàng tử” của đời mình đến đánh thức, bởi ngộ nhỡ chẳng có “chàng hoàng tử” nào xuất hiện thì sao?"
		},
		{
			ảnh: "images/section/hot/9e6a45a1-1ed9-45c2-9834-0e1b19463a21.jpg",
			tên: "20 Hành trang cho chuyến xe tuổi 20s",
			votes: "87 votes",
			miêuTả: "Tuổi trẻ là lúc ta sung sức nhất, đầu óc còn nhạy bén nhất và vì vậy đó là lúc chúng ta phải tích cực học và tích luỹ kinh nghiệm cho sự phát triển của bản thân sau này."
		},
		{
			ảnh: "images/section/hot/ha_noi_quan_xa_pho_phuong-02.jpg",
			tên: "Hà Nội quán xá phố phường",
			votes: "80 votes",
			miêuTả:
				"Cuốn sách là tập tản vẳn các bài viết về những điều bình dị ở Hà Nội. Chia thành 2 phần chính là phố phường với những con phố thân thuộc, gắn với những câu chuyện lịch sử như Đê La Thành, Hàng Đào, Hàng Ngang, không diêm dúa, đẽo gọt mà cố gắng mô tả, cung cấp thông tin vừa đủ để độc giả hình dung"
		},
		{
			ảnh: "images/section/hot/image_142222.jpg",
			tên: "Ván cờ cuộc đời",
			votes: "69 votes",
			miêuTả: "Ván Cờ Cuộc Đời được viết với quan niệm: Những quân cờ vua nhỏ bé không chỉ mang đến cho con người những cung bậc cảm xúc khác nhau mà còn dạy con người nhiều bài học về cuộc đời."
		},
		{
			ảnh: "images/section/hot/image_175155.jpg",
			tên: "Bạn đã bao giờ hôn bố mẹ chưa?",
			votes: "200 votes",
			miêuTả: "Bản thảo là một món quà gợi nhắc lại những kỷ niệm về cha mẹ thời ấu thơ, những hương vị đã theo cùng năm tháng mà qua thời gian, những người trưởng thành dễ bị lãng quên."
		},
		{
			ảnh: "images/section/hot/image_180024.jpg",
			tên: "Đoạn tuyệt",
			votes: "90 votes",
			miêuTả:
				"Tiểu thuyết Đoạn tuyệt của nhà văn Nhất Linh xuất bản năm 1934, viết về cuộc đời Loan, một cô gái mới được tiếp thu những tư tưởng mới và hành trình chống lại những luật lệ phong kiến hà khắc, kìm kẹp quyền tự do cá nhân của con người, đặc biệt là người phụ nữ."
		}
	];

	var html = "";
	for (var i = 0; i < books.length; i++) {
		html += '<div class="content-wrapper-item col-xs-6 col-lg-4 mt25 mb25 pt25 pl15 pr15">';
		html += '<div class="item-about wh1">';
		html += '<a href="" class="relative fl w45 ml15">';
		html += '<div class="book"><img src="' + books[i].ảnh + '" alt="" class="w1"></div>';
		html += '<div class="icon-read"></div></a>';
		html += '<div class="item-info fl w45 pt10 pl15 pb25">';
		html += '<a href="" title="' + books[i].tên + '"><h3 class="fs08">' + books[i].tên + "</h3></a>";
		html += '<div class="item-vote mt10 mb10"><span><i class="vote-heart"></i></span>';
		html += '<small class="fs07">' + books[i].votes + "</small></div>";
		html += '<div class="item-description mb15">';
		html += '<p class="fs07">' + books[i].miêuTả + "</p></div>";
		html += '<a href="" class="btn-read fs07">ĐỌC SÁCH</a></div></div></div></div></div>';
	}
	$("#books-read-much").html(html);

	//TODO: SÁCH MỚI NHẤT
	var bookSlides = [
		{
			ảnh: "images/section/slide1/b1.jpg",
			tên: "Mình nói gì khi nói về hạnh phúc?",
			miêuTả:
				"Hành trình của quyển sách này là hành trình đi tìm hạnh phúc khác với khuôn mẫu xã hội, là cuộc tìm kiếm từ bên ngoài vào bên trong, từ chốn đông người tới chỗ không người, tìm từ người khác đến tìm trong chính mình.",
			votePoint: "4.94",
			numberVotes: "34 votes"
		},
		{
			ảnh: "images/section/slide1/b2.jpg",
			tên: "Cảm Ơn Người Lớn",
			miêuTả: "Một áng văn lãng mạn trong giọng hài hước đặc biệt “dành cho trẻ em, và những ai từng là trẻ em”.",
			votePoint: "4.78",
			numberVotes: "45 votes"
		},
		{
			ảnh: "images/section/slide1/b3.jpg",
			tên: "Đọc Vị Bất Kỳ Ai",
			miêuTả: "Bạn băn khoăn không biết người ngồi đối diện đang nghĩ gì? Họ có đang nói dối bạn không? Đối tác đang ngồi đối diện với bạn trên bàn đàm phán đang nghĩ gì và nói gì tiếp theo?",
			votePoint: "4.97",
			numberVotes: "94 votes"
		},
		{
			ảnh: "images/section/slide1/b4.jpg",
			tên: "Đắc Nhân Tâm",
			miêuTả: "Cuốn sách đưa ra các lời khuyên về cách thức cư xử, ứng xử và giao tiếp với mọi người để đạt được thành công trong cuộc sống.",
			votePoint: "4.94",
			numberVotes: "44 votes"
		},
		{
			ảnh: "images/section/slide1/b5.jpg",
			tên: "Bạn đắt giá bao nhiêu?",
			miêuTả:
				"Hơn bốn mươi câu chuyện trong sách xoay quanh các chủ đề tình yêu, hôn nhân, gia đình, sự nghiệp… đến từ chính cuộc sống của tác giả và những người xung quanh, vừa thực tế lại vừa gợi mở, dễ dàng giúp chúng ta liên hệ với tình huống",
			votePoint: "4.54",
			numberVotes: "37 votes"
		},
		{
			ảnh: "images/section/slide1/b6.jpg",
			tên: "Hài hước một chút thế giới sẽ khác đi",
			miêuTả:
				"Cuộc đời này không thể thiếu sự hài hước, hài hước cũng là một nét đẹp, một gia vị khiến cuộc sống thú vị hơn. Hầu như không ai là không thích hài hước, dí dỏm, hơn nữa hài hước còn gắn bó mật thiết với sự thành bại của cuộc đời mỗi người.",
			votePoint: "4.77",
			numberVotes: "66 votes"
		},
		{
			ảnh: "images/section/slide1/b7.jpg",
			tên: "Khi Hơi Thở Hóa Thinh Không",
			miêuTả:
				"Cuốn hồi kí được viết bởi Paul Kalanithi – một bác sĩ phẫu thuật não và cũng là một bệnh nhân ung thư phổi giai đoạn cuối. Paul viết cuốn sách này trong những tháng cuối cùng của cuộc đời anh – khi mà anh đang đối mặt trực tiếp với cái chết.",
			votePoint: "4.32",
			numberVotes: "27 votes"
		},
		{
			ảnh: "images/section/slide1/b8.jpg",
			tên: "Mình Là Cá, Việc Của Mình Là Bơi",
			miêuTả:
				"Đã bao nhiêu lần bạn tự hỏi về sự tồn tại của bản thân trên thế giới này? Đã bao nhiêu lần bạn thấy mình chìm trong những ý nghĩ tích cực nhất. Đã bao nhiêu lần bạn bỏ lỡ cơ hội đáng lẽ thuộc về bạn?",
			votePoint: "4.85",
			numberVotes: "5 votes"
		},
		{
			ảnh: "images/section/slide1/b10.jpg",
			tên: "Phương pháp giáo dục con của người Do Thái",
			miêuTả:
				'Người Do Thái là dân tộc thông minh nhất thế giới, họ dường như được sinh ra là để làm chủ thế giới này". Dù không phải là một chủng tộc lớn, đất nước Do Thái chỉ có hơn 7 triệu dân nhưng không một nhóm chủng tộc nào có thể sánh được với người Do Thái về khả năng và thành tích vượt trội.',
			votePoint: "4.43",
			numberVotes: "38 votes"
		},
		{
			ảnh: "images/section/slide1/b9.jpg",
			tên: "Đặc Quyền Của Gái Hư",
			miêuTả: "Cuốn sách giúp bạn nhận ra đã đến lúc bạn không còn phải lựa chọn giữa tình yêu, sự tôn trọng hay một chiếc nhẫn. Bởi bạn xứng đáng có được tất cả những điều đó!",
			votePoint: "3.97",
			numberVotes: "26 votes"
		}
	];
	var slide1 = "";
	for (var i = 0; i < bookSlides.length; i++) {
		slide1 += '<div class="swiper-slide df jcsc aic tac pt35">';
		slide1 += '<div class="slide-item pb10 bw2 bss bcc bra5">';
		slide1 += '<a href="" class="relative">';
		slide1 += '<img src="' + bookSlides[i].ảnh + '" alt="" class="h200 mt-25">';
		slide1 += '<img src="images/read.png" alt="" class="w40"></a>';
		slide1 += '<div class="info-book pt15 tal pl10 pr10"><div class="book-name">';
		slide1 += '<a href="" title="' + bookSlides[i].tên + '"><h3 class="fs08">' + bookSlides[i].tên + "</h3></a></div>";
		slide1 += '<div class="book-description pb10 pt10 bb1 bss bcc">';
		slide1 += '<p class="fs07">' + bookSlides[i].miêuTả + "</p></div>";
		slide1 += '<div class="book-votes fs08 pt10">';
		slide1 += '<span class="bt">' + bookSlides[i].votePoint + '</span>/5 <span class="gt">(' + bookSlides[i].numberVotes + ")</span>";
		slide1 += "</div></div></div></div>";
	}
	$(".slide1_wrapper").html(slide1);
	var swiper = new Swiper(".slide1", {
		slidesPerView: 5,
		spaceBetween: 30,
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		}
	});
	if (screen.width < 1199) {
		$(".slide1_wrapper").html(slide1);
		var swiper = new Swiper(".slide1", {
			slidesPerView: 4,
			spaceBetween: 30,
			pagination: {
				el: ".swiper-pagination",
				clickable: true
			}
		});
	}
	if (screen.width < 991) {
		$(".slide1_wrapper").html(slide1);
		var swiper = new Swiper(".slide1", {
			slidesPerView: 3,
			spaceBetween: 30,
			pagination: {
				el: ".swiper-pagination",
				clickable: true
			}
		});
	}
	if (screen.width < 576) {
		$(".slide1_wrapper").html(slide1);
		var swiper = new Swiper(".slide1", {
			slidesPerView: 2,
			spaceBetween: 30,
			pagination: {
				el: ".swiper-pagination",
				clickable: true
			}
		});
	}

	//TODO: SÁCH KHUYÊN ĐỌC
	var books_2 = [
		{
			ảnh: "images/section/hot/song_nhu_mot_nang_meo_1.jpg",
			tên: "Sống như một nàng mèo",
			votes: "90 votes",
			miêuTả:
				"Sống như một nàng mèo là tập hợp những suy nghĩ và bài học về các mặt khác nhau trong cuộc sống mà tác giả Mèo W đã rút ra từ trải nghiệm sống với những chú mèo, bao gồm: cách suy nghĩ, tình yêu, công việc, tình bạn."
		},
		{
			ảnh: "images/section/hot/toi_can_mot_cai_khuon_khac_1.jpg",
			tên: "Tôi cần một cái khuôn khác méo mó cũng được",
			votes: "56 votes",
			miêuTả:
				"“Tôi cần một cái khuôn khác – Méo mó cũng được” của Lê Bùi Thảo Nguyên gây ám ảnh với người đọc với những câu chuyện của một kỹ thuật viên gây mê. Cô gái ấy sau hơn một năm làm việc tại một trong những bệnh viện phụ sản hàng đầu đã quyết định xin nghỉ việc"
		},
		{
			ảnh: "images/section/hot/b1.jpg",
			tên: "Đừng để mẹ khóc",
			votes: "87 votes",
			miêuTả:
				"Có ai đó đã từng nói rằng: “Vì Thượng đế không thể tạo ra các thiên thần ở khắp mọi nơi, nên Người đã tạo ra những người mẹ.” “Đừng để mẹ khóc” của Kim Joo Young chính là câu chuyện về một thiên thần như thế."
		},
		{
			ảnh: "images/section/hot/b2.jpg",
			tên: "Sinh ra bình thường, sống bình yên, chết bình ổn",
			votes: "76 votes",
			miêuTả:
				"‘Con người, sinh ra bình thường, sống bình yên, nhưng lại không thể bình ổn chết đi. Dù biết rằng điều đó là lẽ dĩ nhiên,. Nhưng tôi vẫn sợ nhất điều đó. Sợ hãi, nhưng dù có sợ hãi. Cũng không thể chối bỏ được thực tế cuộc sống. Vậy nên, đối lập với cuộc sống có phải là chữ “bình”?"
		},
		{
			ảnh: "images/section/hot/b3.jpg",
			tên: "Perfect Slogan - Để Ngôn Từ Trở Thành Sức Mạnh",
			votes: "97 votes",
			miêuTả:
				"Trong thời đại công nghệ số hiện nay, khi mà lượng thông tin được truyền tải tăng lên một cách nhanh chóng thì vai trò của ngôn từ trong kinh doanh ngày càng trở nên quan trọng. Có thể nói ngôn ngữ chính là hạt nhân cốt lõi trong mọi hoạt động của doanh nghiệp."
		},
		{
			ảnh: "images/section/hot/b4.jpg",
			tên: "Sống ở thế chủ động",
			votes: "45 votes",
			miêuTả:
				"Người ta đánh giá chỉ số IQ hay EQ không quan trọng bằng chỉ số AQ (chỉ số vượt khó). Vượt khó chính là một thái độ sống tích cực. Như vậy, trí thông minh hay cảm xúc không quyết định sự thành bại trong cuộc đời bạn, mà cả thái độ sống. Có thái độ tích cực, vạn sự sẽ thành. Mang thái độ tiêu cực, muôn sự sẽ bại."
		}
	];

	var html2 = "";
	for (var i = 0; i < books_2.length; i++) {
		html2 += '<div class="content-wrapper-item col-xs-6 col-lg-4 mt25 mb25 pt25 pl15 pr15">';
		html2 += '<div class="item-about wh1">';
		html2 += '<a href="" class="relative fl w45 ml15">';
		html2 += '<div class="book"><img src="' + books_2[i].ảnh + '" alt="" class="w1"></div>';
		html2 += '<div class="icon-read"></div></a>';
		html2 += '<div class="item-info fl w45 pt10 pl15 pb25">';
		html2 += '<a href="" title="' + books_2[i].tên + '"><h3 class="fs08">' + books_2[i].tên + "</h3></a>";
		html2 += '<div class="item-vote mt10 mb10"><span><i class="vote-heart"></i></span>';
		html2 += '<small class="fs07">' + books_2[i].votes + "</small></div>";
		html2 += '<div class="item-description mb15">';
		html2 += '<p class="fs07">' + books_2[i].miêuTả + "</p></div>";
		html2 += '<a href="" class="btn-read fs07">ĐỌC SÁCH</a></div></div></div></div>';
	}
	$("#books-suggest").html(html2);

	//TODO: TG TIEU BIEU
	var tg = [
		{
			tên: "J.K Rowling",
			sinh: "31 tháng 7, 1965",
			tp: "Tiểu thuyết Harry Potter, Khoảng trống, Con chim khát tổ",
			ảnh: "images/section/tg-tp/jkrowning.png"
		},
		{
			tên: "Nguyễn Nhật Ánh",
			sinh: "7 tháng 5, 1955",
			tp: "Tôi thấy hoa vàng trên cỏ xanh, Ngồi khóc trên cây, Tôi là Bêtô",
			ảnh: "images/section/tg-tp/nguyennhatanh.png"
		},
		{
			tên: "Rosie Nguyễn",
			sinh: "1987",
			tp: "Tuổi trẻ đáng giá bao nhiêu, Ta ba lô trên đất Á",
			ảnh: "images/section/tg-tp/rosie.jpg"
		}
	];
	var htmlTG = "";
	for (var i = 0; i < tg.length; i++) {
		htmlTG += '<div class="col-xs-6 col-md-4 mb25 mt25 tac">';
		htmlTG += '<div class="card-wrapper col-xs-11 col-lg-10 bra10 tac">';
		htmlTG += '<div class="card-wrapper-info pt25 pb50 lh15 pl50 pr50">';
		htmlTG += '<a href=""><h1 class="fs14">' + tg[i].tên + "</h1></a>";
		htmlTG += "<p><b>Sinh:</b> " + tg[i].sinh + "</p>";
		htmlTG += "<p><b>Tác phẩm:</b> " + tg[i].tp + "</p></div>";
		htmlTG += '<div class="card-wrapper-img">';
		htmlTG += '<img src="' + tg[i].ảnh + '" alt="" class="brt10"></div></div></div>';
	}
	$("#tacgia").html(htmlTG);

	//TODO: TP TIEU BIEU
	var tp = [
		{
			tên: "Kiểm Soát Cảm Xúc",
			phânloại: "(Tuyển tập)",
			ảnh: "images/section/tg-tp/tp1.jpg"
		},
		{
			tên: "Sách Nuôi Dạy Con",
			phânloại: "(Tuyển tập)",
			ảnh: "images/section/tg-tp/tp2.jpg"
		},
		{
			tên: "Ngã Rẽ Cuộc Đời",
			phânloại: "(Tuyển tập)",
			ảnh: "images/section/tg-tp/tp3.jpg"
		},
		{
			tên: "Tự Tin Thuyết Trình",
			phânloại: "(Tuyển tập)",
			ảnh: "images/section/tg-tp/tp4.jpg"
		},
		{
			tên: "Thay Đổi Tư Duy",
			phânloại: "(Tuyển tập)",
			ảnh: "images/section/tg-tp/tp5.jpg"
		},
		{
			tên: "Khởi Nghiệp",
			phânloại: "(Tuyển tập)",
			ảnh: "images/section/tg-tp/tp6.jpg"
		}
	];
	var htmlTP = "";
	for (var i = 0; i < tp.length; i++) {
		htmlTP += '<div class="swiper-slide col-md-4 tac df jcsc aic lh15">';
		htmlTP += '<div class="card-wrapper col-xs-11 col-lg-10 mb25 mt25 bra10 tac">';
		htmlTP += '<div class="card-wrapper-info pt25 pb50 lh15 pl50 pr50">';
		htmlTP += '<a href=""><h1 class="fs14">' + tp[i].tên + "</h1></a>";
		htmlTP += "<p>" + tp[i].phânloại + "</p></div>";
		htmlTP += '<div class="card-wrapper-img">';
		htmlTP += '<img src="' + tp[i].ảnh + '" alt="" class="brt10"></div></div></div>';
	}
	$("#tacpham").html(htmlTP);
	var swiper = new Swiper(".slide3", {
		slidesPerView: 3,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		}
	});
	if (screen.width < 991) {
		var swiper = new Swiper(".slide3", {
			slidesPerView: 2,
			loop: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			}
		});
	}
	if (screen.width < 575) {
		var swiper = new Swiper(".slide3", {
			slidesPerView: 1,
			loop: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			}
		});
	}
	//TODO: QUOTES BOTTOM
	var quotes = [
		{
			tríchDẫn: "“Đàn ông chỉ có một sự nghiệp, trong khi đàn bà có thể sống cuộc sống của tất cả những người đàn ông mình yêu…”",
			tênTpTg: "_Tâm cảnh, André Maurois_"
		},
		{
			tríchDẫn: "“Giữa cuộc đời đầy bất công và mệt nhọc này, hãy cảm thấy biết ơn vì chúng ta được cùng nhau san sẻ sự bất công và mệt nhọc ấy.”",
			tênTpTg: "_ Công thức nấu ăn tặng con gái ,Gong Ji Young_"
		},
		{
			tríchDẫn: "“Những mối quan hệ thân thiết đến mức không có gì là không thể nói với nhau. Theo cách khác cũng chính là những mối quan hệ dễ làm tổn thương nhau nhất.”",
			tênTpTg: "_ Yêu những điều không hoàn hảo , Hae Min_"
		},
		{
			tríchDẫn: "“Có những yêu thương, không bao giờ thuộc về người đến muộn”",
			tênTpTg: "_ Hoa Linh Lan, Gào_"
		},
		{
			tríchDẫn: "“Nếu bạn mắc sai lầm thì chẳng việc gì phải ngẫm nghĩ lâu về nó, vì kiểu gì bạn cũng sẽ mắc phải nhiều sai lầm nữa.”",
			tênTpTg: "_ Cẩm nang đốt nhà các văn hào New England,Brock Clarke_"
		},
		{
			tríchDẫn:
				"“Bởi lẽ cái ác ở ngoài kia chỉ là cái ác ở bên trong được sổng ra ngoài. Bãi chiến trường để giành giật cái thiện không phải là quảng trường công cộng kia mà ở khoảng rừng thưa nhỏ bé trong trái tim ta.”",
			tênTpTg: "_Cuộc Đời Của Pi, Yann Martel_"
		}
	];
	var htmlQuotes = "";
	for (var i = 0; i < quotes.length; i++) {
		htmlQuotes += '<div class="swiper-slide tac df jcsc aic lh15">';
		htmlQuotes += '<div class="w75"><b>' + quotes[i].tríchDẫn + "</b>";
		htmlQuotes += '<p class="mt15">' + quotes[i].tênTpTg + "</p></div></div></div>";
	}
	$("#quotesSlide").html(htmlQuotes);
	var swiper = new Swiper(".slide2", {
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		}
	});

	//TODO: MENU-MOBILE
	$("#menuMobile").click(function() {
		$("#home-text").addClass("visibleMenu");
	});
	$(".closeMenu").click(function() {
		$("#home-text").removeClass("visibleMenu");
	});
});
