$(document).ready(function () {
    setTimeout(function () {
        $('.banner').css("left", "-100%");
    }, Math.floor(Math.random() * 10000));
    $('#content').load("html/trangchu.html");

    $('.tab').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var location = $(this).attr("id");
        $('#content').empty();
        $('#content').load("html/" + location);
    });
    // $(document).on("click", '.page', function () {
    //     $(this).parent().addClass('page-active').siblings().removeClass('page-active');
    //     // $('#content-page').empty();
    //     var location = $(this).attr("id");
    //     $('#content-page').load("html/" + location);
    // })

    //TODO: TAB SETTINGS
    //Khởi động với cài đặt đã lưu
    var nightMode = localStorage.getItem('trangThai');
    if (nightMode == 'null' || nightMode == 'undefined') {
        nightMode = 1;
    }
    var trangThai;

    //Set chế độ nightMode
    function setting() {
        if (nightMode == 2) {
            $('input[type="checkbox"]').attr("checked", true);
            $('body').addClass('nM');
        } else if (nightMode == 1) {
            $('body').removeClass('nM');
        }
    };
    setting();

    // chế độ ban ngày, ban đêm
    $(document).on("click", '.switch', function () {
        if ($('input[type="checkbox"]').prop('checked')) {
            $('body').addClass('nM');
            trangThai = 2;
            localStorage.setItem('trangThai', trangThai);
            nightMode = localStorage.getItem('trangThai');
        } else {
            $('body').removeClass('nM');
            trangThai = 1;
            localStorage.setItem('trangThai', trangThai);
            nightMode = localStorage.getItem('trangThai');
        }
    });
    
    //TODO: THAY ĐỔI FONT_SIZE
    // kích thước font chữ tối thiểu
    var min = 10;
    //kích thước font chữ tối đa
    var max = 20;
    // lấy font chữ mực định
    var reset = $('body').css('fontSize');
    //những phần tử sẽ thực hiện khi chức năng được gọi
    var elm = $('body');
    // ấn định kích thước font chữ mặc định và xóa bỏ px từ giá trị
    var size = str_replace(reset, 'px', '');
    //Tăng kích thước font chữ
    $(document).on("click", ".fontSizePlus" , function () {
        // Nếu kích thước font chữ nhở hơn hoặc bằng với giá trị tối đa thì
        if (size < max) {
            // tăng kích thước
            size++;
            // ấn định kích thước font cho phần tử
            elm.css({
                'fontSize': size
            });
            $('.fontReset').css({
                'fontSize': 14
            });
        }
        // hủy sự kiện click
        return false})
    // Giảm kích thước font
    $('.fontSizeMinus').click(function () {
        // nếu kích thước font chữ lớn hơn hay bằng với giá trị tối thiểu
        if (size > min) {
            //giảm kích thước
            size--;
            // ấn định kích thước font cho phần tử
            elm.css({
                'fontSize': size
            });
            $('.fontReset').css({
                'fontSize': 14
            });
        }
        // hủy sự kiện click
        return false;
    });
    // khôi phục lại kích thước mặc định
    function resetSize() {
        // ấn định kích thước font chữ mặc định
        elm.css({
            'fontSize': 14
        });
    }
    $('.fontReset').click(function () {
        // ấn định kích thước font chữ mặc định
        resetSize();
    });

    $(document).on("click", ".sửaSize", function() {
        $('.sizeChữ').removeClass('invisible o0');
    })
    $('.sizeChữ').click(function(e) {
        var container = $(".sửa");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            console.log(456);
            $('.sizeChữ').addClass('invisible o0');
        } else {
            console.log(123);
        }
    })

    //hàm thay đổi chuỗi
    function str_replace(haystack, needle, replacement) {
        var temp = haystack.split(needle);
        return temp.join(replacement);
    }
})