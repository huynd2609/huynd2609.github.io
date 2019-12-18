$(document).ready(function() {
  // TODO: xử lý load và hiển thị thư viện ảnh bằng thư viện isotope
  var $gal = $(".gallery").isotope({
    itemSelector: "li"
  });

  $gal.imagesLoaded().progress(function() {
    $gal.isotope("layout");
  });

  $(".content-menu .col-12 li").click(function() {
    var _data = $(this).data("class");

    if (_data == "all") {
      $(".content-body ul").isotope({ filter: "*" });
    } else {
      $(".content-body ul").isotope({ filter: _data });
    }
  });

  // TODO: xử lý click menu-top
  $("a").click(function() {
    var id = $(this).attr("href"); //lấy về giá trị của href được click
    var location = $(id).offset().top - 100; //lấy vị trí của id được click
    //tạo chuyển động Scroll
    $("html, body").animate({ scrollTop: location }, 800, "easeOutBack");
  });
  $(".banner-home div.mouse-down").click(function() {
    var location = $("#about-me").offset().top - 100; //lấy vị trí của id được click
    //tạo chuyển động Scroll
    $("html, body").animate({ scrollTop: location }, 800, "easeOutBack");
  });
  //Xử lý chuyển động sau click
  var top = "over200";
  $(document).scroll(function() {
    if ($("html, body").scrollTop() > 200) {
      if (top == "over200") {
        $(".back-header").addClass("display-back");
        top = "below200";
      }
    } else {
      if (top == "below200") {
        $(".back-header").removeClass("display-back");
        top = "over200";
      }
    }
  });

  //TODO: click back-header
  $(".back-header").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

});
