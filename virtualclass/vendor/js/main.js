$(document).ready(function() {
	var fix = "fixed";
	$(document).scroll(function() {
		if ($("html, body").scrollTop() > 0) {
			if (fix == "fixed") {
				$(".banner").addClass("navActive");
				fix = "notFix";
			}
		} else {
			if (fix == "notFix") {
				$(".banner").removeClass("navActive");
				fix = "fixed";
			}
		}
	});

	//TODO: MÔN HỌC
	var lessons = [
		{
			icon: "images/iconLessons/toan.png",
			tên: "Toán học",
			giáoÁn: [
				{
					ảnh: "images/lessons-focus/toan1.jpg",
					tên: "Giáo án lớp 7"
				},
				{
					ảnh: "images/lessons-focus/toan2.jpg",
					tên: "Giáo án lớp 8"
				},
				{
					ảnh: "images/lessons-focus/toan3.jpg",
					tên: "Giáo án lớp 9"
				}
			]
		},
		{
			icon: "images/iconLessons/van.png",
			tên: "Văn học",
			giáoÁn: [
				{
					ảnh: "images/lessons-focus/van1.jpg",
					tên: "Giáo án lớp 10"
				},
				{
					ảnh: "images/lessons-focus/van2.jpg",
					tên: "Giáo án lớp 11"
				},
				{
					ảnh: "images/lessons-focus/van3.jpg",
					tên: "Giáo án lớp 12"
				}
			]
		},
		{
			icon: "images/iconLessons/vatly.png",
			tên: "Vật lý",
			giáoÁn: [
				{
					ảnh: "images/lessons-focus/ly1.jpg",
					tên: "Giáo án lớp 7"
				},
				{
					ảnh: "images/lessons-focus/ly2.jpg",
					tên: "Giáo án lớp 8"
				},
				{
					ảnh: "images/lessons-focus/ly3.jpg",
					tên: "Giáo án lớp 9"
				}
			]
		},
		{
			icon: "images/iconLessons/hoahoc.png",
			tên: "Hóa học",
			giáoÁn: [
				{
					ảnh: "images/lessons-focus/hoa1.jpg",
					tên: "Giáo án lớp 10"
				},
				{
					ảnh: "images/lessons-focus/hoahoc.jpg",
					tên: "Giáo án lớp 9"
				},
				{
					ảnh: "images/lessons-focus/hoa3.jpg",
					tên: "Giáo án lớp 12"
				}
			]
		},
		{
			icon: "images/iconLessons/tinhoc.png",
			tên: "Tin học",
			giáoÁn: [
				{
					ảnh: "images/lessons-focus/tin1.jpg",
					tên: "Giáo án lớp 7"
				},
				{
					ảnh: "images/lessons-focus/tin2.jpg",
					tên: "Giáo án lớp 8"
				},
				{
					ảnh: "images/lessons-focus/tin3.jpg",
					tên: "Giáo án lớp 9"
				}
			]
		},
		{
			icon: "images/iconLessons/dialy.png",
			tên: "Địa lý",
			giáoÁn: [
				{
					ảnh: "images/lessons-focus/dialy1.jpg",
					tên: "Giáo án lớp 6"
				},
				{
					ảnh: "images/lessons-focus/dialy2.jpg",
					tên: "Giáo án lớp 7"
				},
				{
					ảnh: "images/lessons-focus/dialy3.jpg",
					tên: "Giáo án lớp 8"
				}
			]
		},
		// {
		// 	icon: "images/iconLessons/gdtc.png",
		// 	tên: "Thể dục",
		// 	giáoÁn: [
		// 		{
		// 			ảnh: "images/lessons-focus/the1.jpg",
		// 			tên: "Bài khởi động cơ bản"
		// 		},
		// 		{
		// 			ảnh: "images/lessons-focus/the2.jpg",
		// 			tên: "Bóng chuyền cơ bản"
		// 		},
		// 		{
		// 			ảnh: "images/lessons-focus/the3.jpg",
		// 			tên: "Bóng đá cơ bản"
		// 		}
		// 	]
		// },
		// {
		// 	icon: "images/iconLessons/hoihoa.png",
		// 	tên: "Nghệ thuật",
		// 	giáoÁn: [
		// 		{
		// 			ảnh: "images/lessons-focus/nghethuat1.jpg",
		// 			tên: "Hội họa cơ bản"
		// 		},
		// 		{
		// 			ảnh: "images/lessons-focus/nghethuat2.jpg",
		// 			tên: "Âm nhạc"
		// 		}
		// 	]
		// }
	];
	var html = "";
	for (var i = 0; i < lessons.length; i++) {
		html += '<div class="lessons-item mt30">';
		html += '<img src="' + lessons[i].icon + '" alt="" />';
		html += '<a href="classItem.html"><h5 class="fwb fs15">' + lessons[i].tên + "</h5></a>";
		html += '<div id="carouselExampleControls' + i + '" class="carousel slide mt15"  data-ride="carousel">';
		html += '<div class="carousel-inner">';
		html += '<div class="carousel-item active">';
		html += '<a href=""><img class="d-block w-100" src="' + lessons[i].giáoÁn[0].ảnh + '" alt="First slide" /></a>';
		html += '<div class="title-carousel pt15">';
		html += '<a href=""><h5 class="fwb fs11">' + lessons[i].giáoÁn[0].tên + "</h5></a>";
		html += '<a href="" class="fr fwb fs11">Tìm hiểu thêm</a></div></div>';
		for (var j = 1; j < lessons[i].giáoÁn.length; j++) {
			html += '<div class="carousel-item">';
			html += '<a href=""><img class="d-block w-100" src="' + lessons[i].giáoÁn[j].ảnh + '" alt="First slide" /></a>';
			html += '<div class="title-carousel pt15">';
			html += '<a href=""><h5 class="fwb fs11">' + lessons[i].giáoÁn[j].tên + "</h5></a>";
			html += '<a href="" class="fr fwb fs11">Tìm hiểu thêm</a></div></div>';
		}
		html += "</div>";
		html += '<a class="carousel-control-prev wh50 t50" href="#carouselExampleControls' + i + '" role="button" data-slide="prev">';
		html += '<span class="carousel-control-prev-icon" aria-hidden="true"></span>';
		html += '<span class="sr-only">Previous</span></a>';
		html += '<a class="carousel-control-next wh50 t50" href="#carouselExampleControls' + i + '" role="button" data-slide="next">';
		html += '<span class="carousel-control-next-icon" aria-hidden="true"></span>';
		html += '<span class="sr-only">Next</span></a></div></div>';
	}
	$("#lessons").html(html);
	for (var i = 0; i < lessons.length; i++) {
		if (i % 2 == 0) {
			$("#carouselExampleControls" + i).carousel({
				interval: 5000 + i * 500
			});
		} else {
			$("#carouselExampleControls" + i).carousel({
				interval: 6000 + i * 500
			});
		}
	}

	//TODO: CỐ VẤN
	var adviser = [
		{
			ảnh: "images/covan/covan-01.png",
			tên: "GS TSKH VŨ MINH GIANG",
			chứcVụ: "Phó chủ tịch Hội đồng Khoa học Lịch sử Việt Nam, Chủ tịch Hội đồng Khoa học & Đào tạo ĐH Quốc gia Hà Nội"
		},
		{
			ảnh: "images/covan/covan-02.png",
			tên: "PGS.TS NGHIÊM ĐÌNH VỲ",
			chứcVụ: "Nguyên Phó trưởng ban Tuyên giáo Trung Ương, Nguyên hiệu trưởng trường ĐH Sư phạm Hà Nội, Viện trưởng Viện Khoa học xã hội – Đại học sư phạm Hà Nội."
		},
		{
			ảnh: "images/covan/covan-03.png",
			tên: "GS.TS PHẠM HỒNG TUNG",
			chứcVụ: "Viện trưởng viện Việt Nam học và khoa học phát triển, đại học Quốc Gia Hà Nội"
		},
		{
			ảnh: "images/covan/covan-04.png",
			tên: "GS.TS NGUYỄN VĂN KIM",
			chứcVụ: "Bí thư Đảng ủy, Phó Hiệu trưởng Trường Đại học Khoa học Xã hội và Nhân văn Hà Nội"
		},
		{
			ảnh: "images/covan/covan-05.png",
			tên: "NHÀ SỬ HỌC DƯƠNG TRUNG QUỐC",
			chứcVụ: "Tổng thư ký Hội Khoa học Lịch sử Việt Nam"
		}
	];
	var html1 = "";
	for (var i = 0; i < adviser.length; i++) {
		html1 += '<div class="adviser-item col-md-4 tac aic mb25">';
		html1 += '<img src="' + adviser[i].ảnh + '" alt="">';
		html1 += '<div class="adviser-info mt15">';
		html1 += "<b>" + adviser[i].tên + "</b>";
		html1 += "<p>" + adviser[i].chứcVụ + "</p></div></div>";
	}
	$("#adviser").html(html1);

	//TODO: ClassItem
	var courses = [
		{
			icon: "images/class/icon-course.jpg",
			tên: "Giáo Án Lớp 4",
			môTả: "Giáo án lớp 4 cả năm 2018 - 2019 dành cho giáo viên, phụ huynh có con em đang theo học lớp 4 và các em học sinh, mời các bạn cùng tham khảo để chuẩn bị đầy đủ nội dung, kiến thức và kỹ năng.",
			sốBài: "23 Bài"
		},
		{
			icon: "images/class/icon-course.jpg",
			tên: "Giáo Án Lớp 5",
			môTả: "Giáo án lớp 5 cả năm 2018 - 2019 dành cho giáo viên, phụ huynh có con em đang theo học lớp 5 và các em học sinh, mời các bạn cùng tham khảo để chuẩn bị đầy đủ nội dung, kiến thức và kỹ năng.",
			sốBài: "27 Bài"
		},
		{
			icon: "images/class/icon-course.jpg",
			tên: "Giáo Án Lớp 6",
			môTả: "Giáo án lớp 6 cả năm 2018 - 2019 dành cho giáo viên, phụ huynh có con em đang theo học lớp 6 và các em học sinh, mời các bạn cùng tham khảo để chuẩn bị đầy đủ nội dung, kiến thức và kỹ năng.",
			sốBài: "33 Bài"
		},
		{
			icon: "images/class/icon-course.jpg",
			tên: "Giáo Án Lớp 7",
			môTả: "Giáo án lớp 7 cả năm 2018 - 2019 dành cho giáo viên, phụ huynh có con em đang theo học lớp 7 và các em học sinh, mời các bạn cùng tham khảo để chuẩn bị đầy đủ nội dung, kiến thức và kỹ năng.",
			sốBài: "33 Bài"
		},
		{
			icon: "images/class/icon-course.jpg",
			tên: "Giáo Án Lớp 8",
			môTả: "Giáo án lớp 8 cả năm 2018 - 2019 dành cho giáo viên, phụ huynh có con em đang theo học lớp 8 và các em học sinh, mời các bạn cùng tham khảo để chuẩn bị đầy đủ nội dung, kiến thức và kỹ năng.",
			sốBài: "35 Bài"
		},
		{
			icon: "images/class/icon-course.jpg",
			tên: "Giáo Án Lớp 9",
			môTả: "Giáo án lớp 9 cả năm 2018 - 2019 dành cho giáo viên, phụ huynh có con em đang theo học lớp 9 và các em học sinh, mời các bạn cùng tham khảo để chuẩn bị đầy đủ nội dung, kiến thức và kỹ năng.",
			sốBài: "35 Bài"
		},
		{
			icon: "images/class/icon-course.jpg",
			tên: "Giáo Án Lớp 10",
			môTả: "Giáo án lớp 10 cả năm 2018 - 2019 dành cho giáo viên, phụ huynh có con em đang theo học lớp 10 và các em học sinh, mời các bạn cùng tham khảo để chuẩn bị đầy đủ nội dung, kiến thức và kỹ năng.",
			sốBài: "34 Bài"
		},
		{
			icon: "images/class/icon-course.jpg",
			tên: "Giáo Án Lớp 11",
			môTả: "Giáo án lớp 11 cả năm 2018 - 2019 dành cho giáo viên, phụ huynh có con em đang theo học lớp 11 và các em học sinh, mời các bạn cùng tham khảo để chuẩn bị đầy đủ nội dung, kiến thức và kỹ năng.",
			sốBài: "35 Bài"
		},
		{
			icon: "images/class/icon-course.jpg",
			tên: "Giáo Án Lớp 12",
			môTả: "Giáo án lớp 12 cả năm 2018 - 2019 dành cho giáo viên, phụ huynh có con em đang theo học lớp 12 và các em học sinh, mời các bạn cùng tham khảo để chuẩn bị đầy đủ nội dung, kiến thức và kỹ năng.",
			sốBài: "37 Bài"
		}
	];

	var html2 = "";
	for(var i = 0; i < courses.length; i++) {
		html2 += '<div class="w45 courses relative df jcsb bsbb pa25 mb50">';
		html2 += '<div class="w10 icon-courses">';
		html2 += '<img src="images/class/icon-course.jpg" alt=""></div>';
		html2 += '<div class="w85 class-courses">';
		html2 += '<a href="course.html"><h1 class="fs15 fwb mb15">'+courses[i].tên+'</h1></a>';
		html2 += '<p class="mb30">'+courses[i].môTả+'</p>';
		html2 += '<p class="fs12 fwb">'+courses[i].sốBài+'</p></div></div>';
	}
	$('#courses').html(html2);

	//TODO: Course
	var course = [
		{
			icon: "images/class/icon-course.jpg",
			tên: "Chương 1: Số tự nhiên. Bảng đơn vị đo khối lượng",
			môTả: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur non porro soluta autem culpa perspiciatis dolor consequatur sed expedita, ea reiciendis? Sint minima et, sit ducimus voluptate eius ipsum illum.",
			thờiGian: "3 giờ 30 phút"
		},
		{
			icon: "images/class/icon-course.jpg",
			tên: "Chương 2: Bốn phép tính với các số tự nhiên. Hình học",
			môTả: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur non porro soluta autem culpa perspiciatis dolor consequatur sed expedita, ea reiciendis? Sint minima et, sit ducimus voluptate eius ipsum illum.",
			thờiGian: "5 giờ 45 phút"
		},
		{
			icon: "images/class/icon-course.jpg",
			tên: "Chương 3: Dấu hiệu chia hết cho 2, 5, 9, 3 - Giới thiệu Hình bình hành",
			môTả: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur non porro soluta autem culpa perspiciatis dolor consequatur sed expedita, ea reiciendis? Sint minima et, sit ducimus voluptate eius ipsum illum.",
			thờiGian: "2 giờ 30 phút"
		},
		{
			icon: "images/class/icon-course.jpg",
			tên: "Chương 4: Phân số - Các phép tính với phân số - Giới thiệu Hình thoi",
			môTả: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur non porro soluta autem culpa perspiciatis dolor consequatur sed expedita, ea reiciendis? Sint minima et, sit ducimus voluptate eius ipsum illum.",
			thờiGian: "4 giờ 30 phút"
		},
		{
			icon: "images/class/icon-course.jpg",
			tên: "Chương 5: Tỉ số - Một số bài toán liên quan đến tỉ số - Tỉ lệ bản đồ",
			môTả: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur non porro soluta autem culpa perspiciatis dolor consequatur sed expedita, ea reiciendis? Sint minima et, sit ducimus voluptate eius ipsum illum.",
			thờiGian: "4 giờ 30 phút"
		},
		{
			icon: "images/class/icon-course.jpg",
			tên: "Chương 6: Ôn tập",
			môTả: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur non porro soluta autem culpa perspiciatis dolor consequatur sed expedita, ea reiciendis? Sint minima et, sit ducimus voluptate eius ipsum illum.",
			thờiGian: "3 giờ 30 phút"
		},
	];

	var html3 = "";
	for(var i = 0; i < course.length; i++) {
		html3 += '<div class="course df jcsb bsbb pa25 mb50">';
		html3 += '<div class="w10 icon-courses">';
		html3 += '<img src="images/class/icon-course.jpg" alt=""></div>';
		html3 += '<div class="w85 class-courses">';
		html3 += '<a href=""><h1 class="fs15 fwb mb15">'+course[i].tên+'</h1></a>';
		html3 += '<p class="mb30">'+course[i].môTả+'</p>';
		html3 += '<p class="fs12 fwb">'+course[i].thờiGian+'</p></div></div>';
	}
	$('#course').html(html3);
});
