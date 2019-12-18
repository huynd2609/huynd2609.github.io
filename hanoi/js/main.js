$(document).ready(function() {
  $(".menu-toggle").click(function() {
    $("#menu").addClass("menuActive");
  });
  $("#close-menu").click(function() {
    $("#menu").removeClass("menuActive");
  });

  //TODO: SlideToggle INTRODUCE
  $(".introduce-body-content-text-body-list1-bottom").slideUp();
  $(".toggle-icon").click(function() {
    $(this).toggleClass("toggle-icon-hidden");
    $(this)
      .parent()
      .next()
      .slideToggle();
  });

  //TODO: GET-ATTRIBUTE INTRODUCE-TITLE
  var title = $('li[class="introduce-title-active"] a').attr("rel");
  $(".introduce-title").html("<h5>" + title + "</h5>");
  $(".introduce-body-content-text-title").html("<h5>" + title + "</h5>");

  //TODO: LOAD ITEM INDEX
  var complete1 = "done";
  var complete2 = "done";
  var complete3 = "done";
  var complete4 = "done";
  var complete5 = "done";

  //ANIMATED
  //DAO TAO
  if (complete3 == "done") {
    $("#main-educate-content .educate-body:nth-child(2)")
      .animate({ top: 100 }, 1)
      .animate({ top: 0, opacity: 1 }, 800);
    complete3 = "notDone";
  }
  $(document).scroll(function() {
    //TUYEN SINH
    if ($("html, body").scrollTop() > 1050) {
      if (complete1 == "done") {
        $(".hanu-tuyensinh .card:first-child")
          .animate({ top: 100 }, 1)
          .animate({ top: 0, opacity: 1 }, 500);
        $(".hanu-tuyensinh .card:nth-child(2)")
          .animate({ top: 100 }, 1)
          .animate({ top: 0, opacity: 1 }, 800);
        $(".hanu-tuyensinh .card:nth-child(3)")
          .animate({ top: 100 }, 1)
          .animate({ top: 0, opacity: 1 }, 1100);
        $(".hanu-tuyensinh .card:last-child")
          .animate({ top: 100 }, 1)
          .animate({ top: 0, opacity: 1 }, 1400);
        complete1 = "notDone";
      }
    }
    //HOAT DONG
    if ($("html, body").scrollTop() > 1500) {
      if (complete2 == "done") {
        $(".hanu-hoatdong .card")
          .animate({ left: -100 }, 1)
          .animate({ left: 0, opacity: 1 }, 500);
        complete2 = "notDone";
      }
    }
    //DAO TAO
    if ($("html, body").scrollTop() > 400) {
      if (complete4 == "done") {
        $("#main-educate-content .educate-body:nth-child(3)")
          .animate({ top: 100 }, 1)
          .animate({ top: 0, opacity: 1 }, 500);
        complete4 = "notDone";
      }
    }
    if ($("html, body").scrollTop() > 800) {
      if (complete5 == "done") {
        $("#main-educate-content .educate-body:last-child")
          .animate({ top: 100 }, 1)
          .animate({ top: 0, opacity: 1 }, 500);
        complete5 = "notDone";
      }
    }
  });
});
