$(document).off("click", ".postDetail");
var vuotTrang = function (trang) {
    var ex0, ey0, exm, eym, dk, threshold;
    $(document).on("touchstart", trang, function (e) {
        dk = 1;
        threshold = 20;
        ex0 = e.originalEvent.touches[0].pageX;
        ey0 = e.originalEvent.touches[0].pageY;
        xs=0;
    }).on("touchmove", trang, function (e) {
        
        exm = ex0 - e.originalEvent.touches[0].pageX ;
        eym = ey0 - e.originalEvent.touches[0].pageY ;
        
        if(Math.abs(exm) < threshold){
            if(Math.abs(eym) > threshold) {
                dk = 0;
            console.log("456");
            }
        }
        if(exm < -threshold) {
            xs = exm + threshold;
        } else {
            exm = 0;
        }
        
        if (dk == 1) {
            $(this).css({ "left": -exm + "px", "transition": "left 0s cubic-bezier(0.215, 0.610, 0.355, 1)" });
            $("#wrapper").css({ "left": "calc(-100% + 1.1*" + -exm + "px)", "transition": "left 0s cubic-bezier(0.215, 0.610, 0.355, 1)" });
        }
    }).on("touchend", trang, function (e) {
        var idPost = $(this).attr("name");
        var idThis = $(this).attr("id");
        $(this).css("transition", "left 1s cubic-bezier(0.215, 0.610, 0.355, 1)");
        $("#wrapper").css("transition", "left 1s cubic-bezier(0.215, 0.610, 0.355, 1)");
        if ($(this).offset().left > screen.width / 4) {
            $(this).animate({
                left: "100%"
            }, 0).addClass('l1').removeClass("l0 tl05s");
            setTimeout(function () {
                $("#" + idThis).remove();
                
            }, 1000);
            setTimeout(() => {
                $("#wrapper").removeClass("pen");
            }, 1300);
            $("#wrapper").addClass("l0i").removeClass('l-1');
            $('body').css({
                'fontSize': 14
            })
        } else {
            $(this).animate({
                left: "0"
            }, 500);
            setTimeout(function () {
                $("#wrapper").css("left", "-100%");
            }, 500);
            $("#wrapper").removeClass("l0i").addClass('l-1');
        }
    })
}

vuotTrang(".postDetail");