$(document).ready(function () {
  var figure = $(".video").hover(hoverVideo, hideVideo);

  function hoverVideo(e) {
    $('video', this).get(0).play();
  }

  function hideVideo(e) {
    $('video', this).get(0).pause();
  }

  // Set the date we're counting down to
  var countDownDate = new Date("Jan 01, 2020 00:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("count-day").innerHTML = "<span class='plr35 fs13 fw500'>"
      + days + "<p class='fs05'>Ngày</p></span> " + "<span class='plr35 fs13 fw500'>"
      + hours + "<p class='fs05'>Giờ</p></span> "
      + "<span class='plr35 fs13 fw500'>"
      + minutes + "<p class='fs05'>Phút</p></span> " + "<span class='plr35 fs13 fw500'>"
      + seconds + "<p class='fs05'>Giây</p></span> ";

    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("count-day").innerHTML = "EXPIRED";
    }
  }, 1000);

  $(".photo").isotope({
    itemSelector: ".gi",
    percentPosition: true
  });

  $('#menuMobile').click(function(){
    $('#home-text').addClass('visibleMenu')
  })
  $('.closeMenu').click(function(){
    $('#home-text').removeClass('visibleMenu')
  })
});
