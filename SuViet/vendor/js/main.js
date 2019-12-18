$(document).ready(function() {
	var menu = $(".container").offset().top;
	var fix = "fixed";
	$(document).scroll(function() {
		if ($("html, body").scrollTop() > menu) {
			if (fix == "fixed") {
				$("#header").addClass("fixed-top");
				fix = "notFix";
			}
		} else {
			if (fix == "notFix") {
				$("#header").removeClass("fixed-top");
				fix = "fixed";
			}
		}
	});

	$(".icon_search").click(function() {
		$(".search-box").addClass("searchActive");
	});
	$(".icon_close").click(function() {
		$(".search-box").removeClass("searchActive");
	});
	
	// TIMELINE
	const DATA = [
		{
			title: "HỒNG BÀNG & VĂN LANG",
			desc:
				"Có ít nhất 18 đời Hùng Vương cai trị trong thời đại Hồng Bàng, cho đến năm 258 TCN. Các thông tin về các đời vua Hùng dựa nhiều trên các truyền thuyết. Cũng có nhiều bằng chứng khảo cổ học như trống đồng Đông Sơn được tìm thấy ở miền bắc Việt Nam có cùng niên đại với thời kỳ Hồng Bàng, thể hiện một nền văn hóa đồ đồng rất phát triển (văn hoá Đông Sơn).",
			image: "images/times/vua_hung.jpg"
		},
		{
			title: "ÂU LẠC & NAM VIỆT",
			desc: "Theo hai bộ sử ký Đại Việt sử ký toàn thư (viết ở thế kỷ 15) và Đại Việt sử lược (viết ở thế kỷ 13), thì nhà nước Âu Lạc được Thục Phán (thủ lĩnh bộ tộc Âu Việt) thành lập vào năm 258 TCN sau khi đánh bại vị vua Hùng cuối cùng của nước Văn Lang, ông lên ngôi và lấy niên hiệu là An Dương Vương.",
			image: "images/times/au_lac.jpg"
		},
		{
			title: "BẮC THUỘC LẦN I ",
			desc:
				"Thời kỳ Bắc thuộc lần thứ nhất trong lịch sử Việt Nam kéo dài từ năm 218 TCN hoặc 179 TCN hoặc 111 TCN đến năm 39, dưới sự cai trị của phong kiến Trung Quốc.",
			image: "images/times/bac_thuoc.jpg"
		},
		{
			title: "TRƯNG NỮ VƯƠNG",
			desc: "Hai Bà Trưng (40 - 43) là thời kỳ xen giữa Bắc thuộc lần 1 và Bắc thuộc lần 2 trong lịch sử Việt Nam. Đây là tên gọi chung của hai chị em Trưng Trắc và Trưng Nhị, là anh hùng dân tộc của người Việt, những thủ lĩnh khởi binh chống lại nhà Đông Hán của Trung Quốc, lập ra một quốc gia với kinh đô tại Mê Linh và tự phong là Nữ vương.",
			image: "images/times/hai_ba_trung.jpg"
		},
		{
			title: "BẮC THUỘC LẦN II",
			desc:
				"Thời kỳ Bắc thuộc lần thứ hai trong lịch sử Việt Nam kéo dài từ năm 43 đến năm 543. Thời kỳ này bắt đầu khi Mã Viện theo lệnh Hán Quang Vũ Đế nhà Đông Hán đánh chiếm lại bộ Giao Chỉ từ tay Trưng Vương, kéo dài đến khi Lý Bí khởi binh đánh đuổi thứ sử[1] nhà Lương là Tiêu Tư năm 542 rồi lập ra nước Vạn Xuân năm 544. <br> Thời kỳ Bắc thuộc lần thứ 2 kéo dài khoảng 500 năm.",
			image: "images/times/bac_thuoc1.jpg"
		},
		{
			title: "NHÀ LÝ & NHÀ TRIỆU",
			desc: "Nhà Tiền Lý (544-602) là một triều đại trong lịch sử Việt Nam, gắn liền với quốc hiệu Vạn Xuân. Nhà Tiền Lý kéo dài 58 năm, tổng cộng 3 đời vua, trong đó có 2 vua họ Lý và 1 vua họ Triệu cũng được tính gộp vào nhà Tiền Lý, tương tự như Dương Tam Kha trong nhà Ngô sau đó.",
			image: "images/times/lynamde.jpg"
		},
		{
			title: "BẮC THUỘC LẦN III",
			desc:
				"Thời kỳ Bắc thuộc lần thứ ba trong lịch sử Việt Nam kéo dài từ năm 602 đến năm 905. <br> Thời kỳ này bắt đầu khi Tùy Văn Đế sai Lưu Phương đánh chiếm nước Vạn Xuân, bức hàng Hậu Lý Nam Đế, kéo dài cho đến khi Khúc Thừa Dụ tiến vào Đại La, giành quyền cai quản toàn bộ Tĩnh Hải quân năm 905 - thời Đường Ai Đế, ông vua bù nhìn trong tay quyền thần Chu Ôn.",
			image: "images/times/bac_thuoc2.jpg"
		},
		{
			title: "THỜI KỲ XÂY NỀN TỰ CHỦ ",
			desc: 'Tự chủ là thời kỳ đầu khôi phục lại nền độc lập của Việt Nam đầu thế kỷ 10 sau hơn 1000 năm Bắc thuộc. Thời kỳ này người Việt đã tự cai trị lãnh thổ nhưng chưa xưng làm vua, và chưa đặt quốc hiệu. Bề ngoài, Việt Nam vẫn là một phần lãnh thổ của "thiên triều" phương bắc ở trung nguyên với tên gọi "Tĩnh Hải quân" và người đứng đầu chỉ nối tiếp nhau làm chức Tiết độ sứ như một quan cai trị của Trung Quốc trước đây.',
			image: "images/times/thoi_tu_chu.jpg"
		},
		{
			title: "NHÀ NGÔ",
			desc:
				"Nhà Ngô 26 năm (939-965), kinh đô Cổ Loa (Đông Anh, Hà Nội) <br> Năm 938, Ngô Quyền tập hợp lực lượng từ Ái châu ra đánh Kiều Công Tiễn. Công Tiễn sai sứ sang nước Nam Hán xin quân cứu viện. Vua Nam Hán là Lưu Nghiễm cho con là Vạn vương Hoằng Tháo đem quân sang cứu, tự mình đóng quân làm thanh viện. Ngô Quyền hạ thành Đại La, giết Công Tiễn rồi bày trận trên sông Bạch Đằng đón quân Nam Hán.",
			image: "images/times/ngoquyen.jpg"
		},
		{
			title: "NHÀ ĐINH",
			desc: "Nhà Đinh (968-980) là triều đại phong kiến trong lịch sử Việt Nam bắt đầu năm 968, sau khi Đinh Tiên Hoàng dẹp xong loạn 12 sứ quân thống nhất đất nước và kết thúc năm 980 khi con của Đinh Tiên Hoàng là Đinh Phế Đế nhường cho Lê Hoàn.",
			image: "images/times/dinhbolinh.jpg"
		},
		{
			title: "NHÀ TIỀN LÊ",
			desc:
				"Nhà Tiền Lê, kinh đô Hoa Lư (29 năm, 980 - 1009) <br>Nhà Tiền Lê bắt đầu khi Đinh Phế Đế nhường ngôi cho Lê Hoàn vào năm 980, trải qua ba đời quân chủ và chấm dứt khi Lê Long Đĩnh qua đời. Quốc hiệu vẫn là Đại Cồ Việt. <br>Triều đại này được kế tục bởi nhà Lý, được sáng lập bởi Lý Công Uẩn.",
			image: "images/times/ledaihanh.jpg"
		},
		{
			title: "NHÀ LÝ",
			desc: "Nhà Lý (1010-1225), quốc hiệu Đại Cồ Việt, kinh đô Hoa Lư. Năm 1010 dời đô về Thăng Long. Từ 1054 đổi quốc hiệu là Đại Việt <br> Nhà Lý bắt đầu khi Lý Công Uẩn lên ngôi vào tháng 10 âm lịch năm 1009, sau khi giành được quyền lực từ tay nhà Tiền Lê.",
			image: "images/times/lyconguan.jpg"
		},
		{
			title: "NHÀ TRẦN ",
			desc:
				"Nhà Trần 175 năm (1225 - 1400), quốc hiệu Đại Việt, kinh đô Thăng Long <br>Nhà Trần là triều đại quân chủ chuyên chế trong lịch sử Việt Nam, bắt đầu khi Trần Cảnh lên ngôi vào năm 1225, sau khi được Lý Chiêu Hoàng truyền ngôi. Trong giai đoạn nắm giữ quyền lực, nhà Trần vẫn đóng đô ở Thăng Long - kinh đô triều cũ, tiếp tục mở rộng và phát triển sự hưng thịnh có từ đời nhà Lý. ",
			image: "images/times/trannhantong.jpg"
		},
		{
			title: "NHÀ HỒ ",
			desc: "Nhà Hồ (1400-1407): quốc hiệu Đại Ngu, kinh đô Tây Đô (Thanh Hóa) <br>Nhà Hồ bắt đầu khi Hồ Quý Ly lên ngôi năm 1400 sau khi giành được quyền lực từ tay nhà Trần và chấm dứt khi Hồ Hán Thương bị quân Minh bắt vào năm 1407 – tổng cộng là 7 năm. Quốc hiệu Đại Việt đã đổi thành Đại Ngu năm 1400.",
			image: "images/times/nha_ho.jpg"
		},
		{
			title: "NHÀ HẬU TRẦN ",
			desc:
				"Nhà Hậu Trần (1407 - 1413) do Giản Định đế - Trần Ngỗi thành lập tháng 10 âm lịch năm 1407 tại Ninh Bình sau khi nhà nước Đại Ngu của nhà Hồ bị quân đội nhà Minh xâm chiếm và tiêu diệt. Trong thời kỳ này, nước Đại Ngu bị nhà Minh đổi tên trở lại thành Giao Chỉ.",
			image: "images/times/hautran.jpg"
		},
		{
			title: "BẮC THUỘC LẦN IV",
			desc: "Sau khi chiếm được Đại Việt, quân Minh chia nước ta thành quận huyện để cai trị. Chúng bắt nhân dân ta làm tôi tớ, thuế má lao dịch nặng nề, cuộc sống vô cùng cực khổ.<br>Ngày Mậu Thân, tháng Giêng năm Mậu Tuất (7/2/1418), Lê Lợi phất cờ khởi nghĩa ở hương Lam Sơn, huyện Lương Giang, trấn Thanh Hoá. Có quân sư Nguyễn Trãi dâng sách Bình Ngô nhằm thu phục lòng người, cháu nội của quan Tư đồ Trần Nguyên Đán là Trần Nguyên Hãn và nhiều nhân tài, hào kiệt các nơi tham gia. ",
			image: "images/times/bac_thuoc3.jpg"
		},
		{
			title: "NHÀ HẬU LÊ ",
			desc:
				"Nhà Hậu Lê (1427-1789) do Lê Thái Tổ lập ra, được phân biệt với nhà Tiền Lê (980-1009) do Lê Đại Hành lập ra cuối thế kỷ 10. <br>Cách gọi nhà Hậu Lê bao gồm cả hai giai đoạn Lê sơ và Lê trung hưng. Đặc biệt, thời Lê Trung hưng tuy kéo dài nhưng các Hoàng đế nhà Lê mất thực quyền, chỉ tồn tại trên danh nghĩa. Thời kỳ đầu gọi là Nam Bắc triều, nhà Lê và nhà Mạc chia đôi nước Đại Việt.",
			image: "images/times/leloi.jpg"
		},
		{
			title: "NAM BẮC TRIỀU",
			desc: "Thời kỳ 1533-1592 trong lịch sử Việt Nam còn được gọi là thời kỳ Nam-Bắc triều, do chính quyền nhà Mạc chỉ thực sự có quyền lực từ địa phận Ninh Bình ngày nay trở ra, còn từ Thanh Hóa trở vào là thế lực lấy danh nghĩa gây dựng lại nhà Lê từ năm 1533.",
			image: "images/times/nam-bac-trieu.jpg"
		},
		{
			title: "TRỊNH NGUYỄN PHÂN TRANH",
			desc:
				'Trịnh-Nguyễn phân tranh là thời kỳ phân chia giữa chế độ "vua Lê chúa Trịnh" ở phía Bắc sông Gianh (sử gọi là Đàng Ngoài) và chúa Nguyễn cai trị ở miền Nam (Đàng Trong), mở đầu khi Trịnh Tráng đem quân đánh Nguyễn Phúc Nguyên năm 1627 và kết thúc vào cuối thế kỷ 18 khi nhà Tây Sơn đánh đổ cả chúa Nguyễn lẫn chúa Trịnh.',
			image: "images/times/trinh-nguyen.jpg"
		},
		{
			title: "NHÀ TÂY SƠN",
			desc: 'Nhà Tây Sơn (1778 - 1802), được thành lập trong bối cảnh tranh chấp quyền lực cuối thời Lê Trung Hưng. <br>Theo cách gọi của phần lớn sử gia thì "nhà Tây Sơn" được dùng để gọi triều đại của anh em Nguyễn Nhạc, Nguyễn Lữ và Nguyễn Huệ để phân biệt với nhà Nguyễn của Nguyễn Ánh (vì cùng họ Nguyễn).',
			image: "images/times/quangtrung.jpg"
		},
		{
			title: "NHÀ NGUYỄN ",
			desc:
				"Nhà Nguyễn (1802 - 1945) được thành lập sau khi vua Gia Long lên ngôi năm 1802, là triều đại cuối cùng trong lịch sử Việt Nam. Năm 1802 đến năm 1804 sử dụng quốc hiệu Nam Việt, năm 1804 đến năm 1839 sử dụng quốc hiệu Việt Nam, Đại Việt Nam, năm 1839, vua Minh Mạng đổi quốc hiệu là Đại Nam. Triều Nguyễn là một triều đại đánh dấu nhiều thăng trầm của lịch sử, đặc biệt là cuộc xâm lược của người Pháp giữa thế kỷ 19.",
			image: "images/times/nhanguyen.jpg"
		},
		{
			title: "PHÁP THUỘC ",
			desc: "Pháp thuộc là một giai đoạn trong lịch sử Việt Nam kéo dài 61 năm, bắt đầu từ 1884 khi Pháp ép triều đình Huế chấp nhận sự bảo hộ của Pháp cho đến 1945 khi Pháp mất quyền cai trị ở Đông Dương. Tuy nhiên, nhiều tài liệu khác cho rằng thời kỳ Pháp thuộc cần được tính từ năm 1867 (tức là kéo dài gần 80 năm), khi Nam Kỳ Lục tỉnh bị nhà Nguyễn cắt nhượng cho Pháp, trở thành lãnh thổ đầu tiên Pháp chiếm được trong quá trình Pháp xâm lược Đại Nam.",
			image: "images/times/phapthuoc.jpg"
		},
		{
			title: "VIỆT NAM DÂN CHỦ CỘNG HOÀ",
			desc:
				"Ngày 2/9/1945, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn độc lập tại Quảng trường Ba Đình (lịch sử gọi đây là bản tuyên ngôn độc lập lần thứ 3 của Tổ quốc ta) lập nên nước Việt Nam dân chủ cộng hoà với thủ đô là thành phố Hà Nội, mở đầu một kỷ nguyên mới trong lịch sử dân tộc ta.",
			image: "images/times/vndcch.jpg"
		},
		{
			title: "CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM",
			desc: "Ngày 2/7/1976, nước Việt Nam thống nhất chính thức có tên Cộng hoà xã hội chủ nghĩa Việt Nam, thủ đô là thành phố Hà Nội.",
			image: "images/times/chxhcnvn.jpg"
		}
	];

	if (document.getElementById("timeline")) {
		let timeline = new Timeline("timeline", DATA);
		timeline.init();
	}
});
