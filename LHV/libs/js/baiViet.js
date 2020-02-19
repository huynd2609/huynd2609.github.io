$(document).off("click", ".trangĐầyĐủ");
$(document).off("click", ".post");
$(document).off("click", ".book_mark");
//TODO: ĐỌC BÀI
$(document).on('click', '.post', function () {
    var c = 0;
    var idThis = $(this).attr('id');
    for (var k = 0; k < posts.length; k++) {
        $.map(posts[k].data, function(v,i){
            if ($("#"+idThis).parents('.khốiPost').attr('name') == v.idPost) {
                if (v.idPost == "video") {
                    $.map(v.postDetail, function (v1, i1) {
                        if (idThis == v1.idVid) {
                            $('body').append(
                                $("<div>", {
                                    id: v1.idVid + "Detail",
                                    class: "postDetail wh1 pf t0 l1i z9 bgrf bsc1 oxh oys diĐộng",
                                    name: v1.idVid
                                }).append(
                                    $("<div>", {
                                        class: "container"
                                    }).append(
                                        $('<div>', {
                                            class: "df jcsb w1 h40 bbw1s ps t0 l0 z9 bgrf cl04"
                                        }).append(
                                            $("<div>", {
                                                class: "plr10 đóng df jcsc fdc"
                                            }).append(
                                                $("<o>", {
                                                    class: "iIcon ffi usn bra3 fsn db fs15",
                                                    text: "keyboard_backspace"
                                                })
                                            ),
                                            $("<div>", {
                                                class: "df jcsb"
                                            }).append(
                                                $("<div>", {
                                                    class: "book_mark df jcsc fdc aic"
                                                }).append(
                                                    $("<o>", {
                                                        class: "iIcon ffi usn bra3 fsn db fs15",
                                                        text: 'bookmark_border'
                                                    }),
                                                    $("<o>", {
                                                        class: "iIcon ffi usn bra3 fsn db fs15 cl02 dn",
                                                        text: 'bookmark'
                                                    })
                                                ),
                                                $("<div>", {
                                                    class: "plr15 sửaSize df jcsc fdc"
                                                }).append(
                                                    $("<o>", {
                                                        class: "iIcon ffi usn bra3 fsn db fs15",
                                                        text: 'text_fields'
                                                    })
                                                )
                                            )
                                        ),
                                        $("<div>", {
                                            class: "plr15 pb25",
                                            id: "nộiDungBàiViết" + v1.idVid
                                        }).append(
                                            $("<div>", {
                                                class: "w1"
                                            }).append(
                                                $("<h1>", {
                                                    class: "ptb15 post fs15 bsdo bb1 bcd cl02",
                                                    id: v1.idVid,
                                                }).append(
                                                    $("<a>", {
                                                        href: "#",
                                                        text: v1.tên
                                                    })
                                                ),
                                                $("<div>", {
                                                    class: "w1 mtb10 fs08 c6"
                                                }).append(
                                                    $("<div>", {
                                                        class: "dib mr10"
                                                    }).append(
                                                        $("<o>", {
                                                            class: "iIcon ffi usn bra3 tac fsn mr02",
                                                            text: "timer"
                                                        })
                                                    ),
                                                    $("<div>", {
                                                        class: "dib",
                                                        text: v1.ngàyĐăng
                                                    })
                                                ),
                                                $("<div>", {
                                                    class: "w1 mb15 fs11",
                                                    html: v1.môTả
                                                }),
                                                $("<div>", {
                                                    class: "img-169 relative vd w75-sm mxa mt15-sm"
                                                }).append(
                                                    $("<video>", {
                                                        class: "vbg z3 bra5",
                                                        preload: "preload",
                                                        muted: "",
                                                        width: "100%",
                                                        style: "outline: none",
                                                        controls: ""
                                                    }).append(
                                                        $("<source>", {
                                                            src: v1.link,
                                                            type: "video/mp4"
                                                        })
                                                    )
                                                ),
                                            )
                                        ),
                                        $("<div>", {
                                            class: "khốiPost btw5s",
                                            name: "video"
                                        }).append(
                                            $("<div>", {
                                                class: "tênKhối h40 df jcsc fdc"
                                            }).append(
                                                $("<p>", {
                                                    class: "mlr15 plr10 gạchĐứng ttu fw5",
                                                    text: "video khác"
                                                })
                                            ),
                                            $.map(v.postDetail, function (v, i) {
                                                if (v.idVid !== idThis && !($("#" + v.idVid + "Detail")[0])) {
                                                    c++;
                                                    if (c <= 3) {
                                                        return $("<div>", {
                                                            class: "col-xs-12 plr15-sm ptb15 plr15 bbw5s fgs08"
                                                        }).append(
                                                            $("<div>", {
                                                                class: "img-169 pr vd"
                                                            }).append(
                                                                $("<video>", {
                                                                    class: "vbg z3 bra5",
                                                                    preload: "preload",
                                                                    width: "100%",
                                                                    muted: "",
                                                                    controls: "",
                                                                    style: "outline: none;"
                                                                }).append(
                                                                    $("<source>", {
                                                                        src: v.link,
                                                                        type: "video/mp4"
                                                                    })
                                                                ),
                                                                $("<div>", {
                                                                    class: "nútPlay pa t50 l50 wh64 z7"
                                                                })
                                                            ),
                                                            $("<h3>", {
                                                                id: v.idVid,
                                                                class: "mtb10 post fs13 fs1-sm"
                                                            }).append(
                                                                $("<a>", {
                                                                    href: "#",
                                                                    text: v.tên
                                                                })
                                                            ),
                                                            $("<div>", {
                                                                class: "w1 df jcsb"
                                                            }).append(
                                                                $("<small>", {
                                                                    class: "fs06-sm fs1 cl04",
                                                                    text: v.ngàyĐăng
                                                                }),
                                                                $("<div>", {
                                                                    class: "book_mark"
                                                                }).append(
                                                                    $("<o>", {
                                                                        class: "iIcon ffi usn bra3 fsn db fs11 mlra mt1 cl04",
                                                                        text: 'bookmark_border'
                                                                    }),
                                                                    $("<o>", {
                                                                        class: "iIcon ffi usn bra3 fsn db fs11 mlra mt1 cl02 dn",
                                                                        text: 'bookmark'
                                                                    })
                                                                )
                                                            )
                                                        )
                                                    }
    
                                                }
                                            })
                                        )
                                    )
                                )
                            )
                            $("#" + idThis + "Detail").on("scroll", function () {
                                var vk = $("#" + idThis + "Detail .col-xs-12");
                                for (var i = 2; i <= vk.length + 1; i++) {
                                    if ($("#" + idThis + "Detail .col-xs-12:nth-of-type(" + i + ")").offset().top <
                                        screen.height /
                                        2 && $("#" + idThis + "Detail .col-xs-12:nth-of-type(" + i + ")").offset()
                                            .top > 0) {
                                        $("#" + idThis + "Detail .col-xs-12:nth-of-type(" + i + ")").addClass("fgs0")
                                            .removeClass(
                                                "fgs08");
                                    } else {
                                        $("#" + idThis + "Detail .col-xs-12:nth-of-type(" + i + ")").removeClass(
                                            "fgs0").addClass(
                                                "fgs08");
                                        $(".plr15.pb25").removeClass("fgs08");
                                    }
                                }
                            })
                        }
                    })
                } else {
                    $.map(v.postDetail, function (v1, i1) {
                        if (idThis == v1.id) {
                            $('body').append(
                                $("<div>", {
                                    id: v1.id + "Detail",
                                    class: "postDetail wh1 pf t0 l1i z9 bgrf bsc1 oxh oys diĐộng",
                                    name: v1.id
                                }).append(
                                    $("<div>", { class: "container" }).append(
                                        $('<div>', {
                                            class: "df jcsb w1 h40 bbw1s ps t0 l0 z9 bgrf cl04"
                                        }).append(
                                            $("<div>", {
                                                class: "plr10 đóng df jcsc fdc"
                                            }).append(
                                                $("<o>", {
                                                    class: "iIcon ffi usn bra3 fsn db fs15",
                                                    text: "keyboard_backspace"
                                                })
                                            ),
                                            $("<div>", {
                                                class: "df jcsb"
                                            }).append(
                                                $("<div>", {
                                                    class: "book_mark df jcsc fdc aic"
                                                }).append(
                                                    $("<o>", {
                                                        class: "iIcon ffi usn bra3 fsn db fs15",
                                                        text: 'bookmark_border'
                                                    }),
                                                    $("<o>", {
                                                        class: "iIcon ffi usn bra3 fsn db fs15 cl02 dn",
                                                        text: 'bookmark'
                                                    })
                                                ),
                                                $("<div>", {
                                                    class: "plr15 sửaSize df jcsc fdc"
                                                }).append(
                                                    $("<o>", {
                                                        class: "iIcon ffi usn bra3 fsn db fs15",
                                                        text: 'text_fields'
                                                    })
                                                )
                                            )
                                        ),
                                        $("<div>", {
                                            class: "plr15 pb25",
                                            id: "nộiDungBàiViết" + v1.id, name: v.idPost
                                        }).append(
                                            $("<div>", {
                                                id: "content1"
                                            }).append(
                                                $("<div>").append(
                                                    $("<h1>", {
                                                        class: "fs15 fwb ptb15 bsdo bb1 bcd cl02",
                                                        text: v1.tên
                                                    }),
                                                    $("<div>", {
                                                        class: "fs08 c6 mtb10 mr10 tal"
                                                    }).append(
                                                        $("<div>", {
                                                            class: "dib mr10",
                                                            html: '<o class="iIcon ffi usn bra3 tac fsn mr02">timer</o>'
                                                        }),
                                                        $("<div>", {
                                                            class: "dib",
                                                            text: v1.time
                                                        })
                                                    ),
                                                    $("<h2>", {
                                                        class: "fs11 mtb15 fwb",
                                                        text: v1.môTả
                                                    }),
                                                    $("<div>", {
                                                        class: "mtb10 lh15 tạoCách fs11",
                                                        html: v1.nộiDung
                                                    })
                                                )
                                            )
                                        ),
                                        $("<div>", {
                                            class: "khốiPost btbw5s tinKhác",
                                            name: v.idPost
                                        }).append(
                                            $("<div>", {
                                                class: "tênKhối h40 df jcsc fdc"
                                            }).append(
                                                $("<p>", {
                                                    class: "mlr15 plr10 gạchĐứng ttu fw5",
                                                    text: "tin khác"
                                                })
                                            ),
                                            $("<div>", {
                                                class: "nộiDung mt10 plr30 row bbw1s"
                                            }).append(
                                                $.map(v.postDetail, function (v, i) {
                                                    if (v.id !== idThis && !$("#" + v.id + "Detail")[0]) {
                                                        c++;
                                                        if (c <= 3) {
                                                            return $("<div>", {
                                                                class: "col-xs-12 df jcsb mb25"
                                                            }).append(
                                                                $("<div>", {
                                                                    class: "w30"
                                                                }).append(
                                                                    function(){
                                                                            if (v.ảnhThumnail.length == 3) {
                                                                            return $("<div>", {
                                                                            class: "img-32 bra5",
                                                                            style: "background-image: url(" + $(v.ảnhThumnail)[0] + ")"
                                                                            })
                                                                        } else {
                                                                            return $("<div>", {
                                                                                class: "img-32 bra5",
                                                                                style: "background-image: url(" +
                                                                                v.ảnhThumnail + ")"
                                                                                })
                                                                        }
                                                                    }
                                                                ),
                                                                $("<div>", {
                                                                    class: "w65 ofh relative"
                                                                }).append(
                                                                    $("<a>", {
                                                                        id: v.id,
                                                                        class: "post",
                                                                        href: "#"
                                                                    }).append(
                                                                        $("<h1>", {
                                                                            class: "fw5 title fs13 fs1-sm",
                                                                            text: v.tên
                                                                        })
                                                                    ),
                                                                    $("<div>", {
                                                                        class: "w1 pa b0 l0 df jcsb"
                                                                    }).append(
                                                                        $("<small>", {
                                                                            class: "fs06-sm fs09 cl04 df fdc jcsc df fdc jcsc",
                                                                            text: v.time
                                                                        }),
                                                                        $("<div>", {
                                                                            class: "book_mark"
                                                                        }).append(
                                                                            $("<o>", {
                                                                                class: "iIcon ffi usn bra3 fsn db fs11 mlra mt1 cl04",
                                                                                text: 'bookmark_border'
                                                                            }),
                                                                            $("<o>", {
                                                                                class: "iIcon ffi usn bra3 fsn db fs11 mlra mt1 cl02 dn",
                                                                                text: 'bookmark'
                                                                            })
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        }
                                                    }
                                                })
                                            )
                                        )
                                    )
    
                                )
                            )
                        }
                    })
                }
            }
        })
    }
    for (var k = 0; k < posts.length; k++) {
        $.map(posts[k].data, function(v,i){
            if ($("#"+idThis).parents('.khốiPost').attr('name') == v.idPost) {
                if(v.postDetail.length == 1) {
                    $(".tinKhác").addClass("dn");
                }
            }
        })
    }
    setTimeout(function () {
        $('#' + idThis + "Detail").addClass('l0 tl05s').removeClass('l1i');
        $('#wrapper').addClass('l-1 pen').removeClass('l0i');
    }, 100)
    $('.đóng').click(function () {
        $('#' + idThis + "Detail").addClass('l1i').removeClass('l0 tl05s');
        $('#wrapper').removeClass('l-1').addClass('l0i');
        setTimeout(function () {
            $('#' + idThis + "Detail").remove();
            
        }, 1000);
        setTimeout(function () {
            $('#wrapper').removeClass("pen");
        }, 1300)
        $('body').css({
            'fontSize': 14
        })
    })
    $('.sửaSize').click(function () {
        $('.sizeChữ').removeClass('invisible o0');
    })
    $('.sizeChữ').click(function (e) {
        var container = $(".sửa");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            console.log(456);
            $('.sizeChữ').addClass('invisible o0');
        } else {
            console.log(123);
        }
    })
})

//TODO: XEM TỔNG BÀI VIẾT TỪNG MỤC        
$(document).on('click', '.trangĐầyĐủ', function () {
    var thisP = $(this);
    var idThis = $(this).parents().attr("name");
    for (var k = 0; k < posts.length; k++) {
        $.map(posts[k].data, function(v,i){
        if (thisP.parents('.khốiPost').attr('name') === v.idPost) {
            if(v.idPost == "liênHệ" || v.idPost == "tìmNgườiThân" || v.idPost == "đạiSứQuán") {
                $("body").append(
                    $("<div>", {
                        id: "đầyĐủBàiViết",
                        class: "postDetail pf l1i t0 z9 wh1 bgrf oys diĐộng"
                    }).append(
                        $("<div>", {
                            class: "menu-top w1 h40 bgr2"
                        }).append(
                            $("<div>", { class: "container wh1 tac df jcsc fdc relative" }).append(
                                $("<o>", {
                                    class: "đóng ffi usn fwn pa t0 z9 cl01 fs15 h1 df jcsc fdc",
                                    style: "left: 15px",
                                    text: "keyboard_backspace"
                                }),
                                $("<p>", {
                                    class: "cl01 fs12 fw5",
                                    text: v.tênPost
                                })
                            )
                        ),
                        $("<div>", {class: 'container'}).append(
                            $.map(v.postDetail, function (v, i) {
                                return $("<div>", {class: "plr10 pb25", html: v.nộiDung})
                            })
                        )
                    )
                )
            } else {
                $("body").append(
                $("<div>", {
                    id: "đầyĐủBàiViết",
                    class: "postDetail pf l1i t0 z9 wh1 bgrf oys diĐộng"
                }).append(
                    $("<div>", {
                        class: "menu-top w1 h40 bgr2"
                    }).append(
                        $("<div>", { class: "container wh1 tac df jcsc fdc relative" }).append(
                            function(){
                                if(v.tênPost == "Tin hệ thống") {
                                    return $("<div>", {
                                        class: "tB"
                                    }).append(
                                                $("<o>", {
                                                    class: "tbOff ffi usn fwn pa t0 z9 cl01 fs15 h1 df jcsc fdc dn",
                                                    style: "right: 15px",
                                                    text: "toggle_off"
                                                }),
                                                $("<o>", {
                                                    class: "tbOn ffi usn fwn pa t0 z9 cl01 fs15 h1 df jcsc fdc",
                                                    style: "right: 15px",
                                                    text: "toggle_on"
                                                }),
                                            )
                                }
                            },
                            $("<o>", {
                                class: "đóng ffi usn fwn pa t0 z9 cl01 fs15 h1 df jcsc fdc",
                                style: "left: 15px",
                                text: "keyboard_backspace"
                            }),
                            $("<p>", {
                                class: "cl01 fs12 fw5",
                                text: v.tênPost
                            })
                        )
                    ),
                    $("<div>", { class: "container pr" }).append(
                        $("<div>", {
                            name: v.idPost,
                            class: "khốiPost plr15 mt15 row-md"
                        }).append(
                            $.map(v.postDetail, function (v, i) {
                                return $("<div>", {
                                    class: "col-xs-12 col-md-6 plr15-md bsbb df jcsb mb25"
                                }).append(
                                    $('<div>', {
                                        class: "w30"
                                    }).append(
                                        $("<div>", {
                                            class: "img-32 bra5",
                                            style: "background-image: url(" + v
                                                .ảnhThumnail + ")"
                                        })
                                    ),
                                    $('<div>', {
                                        class: "w65 ofh relative"
                                    }).append(
                                        $("<a>", {
                                            class: "post",
                                            id: v.id,
                                            href: "#"
                                        }).append(
                                            $("<h1>", {
                                                class: "fw5 title fs1-sm fs1i-md fs14",
                                                text: v.tên
                                            })
                                        ),
                                        $("<div>", {
                                            class: "w1 pa b0 l0 df jcsb"
                                        }).append(
                                            $("<small>", {
                                                class: "fs06-sm fs06i-md fs1 cl04  df fdc jcsc df fdc jcsc",
                                                text: v.time
                                            }),
                                            $("<div>", {
                                                class: 'book_mark'
                                            }).append(
                                                $("<o>", {
                                                    class: "iIcon ffi usn bra3 fsn db fs11 mlra mt1 cl04",
                                                    text: "bookmark_border"
                                                }),
                                                $("<o>", {
                                                    class: "iIcon ffi usn bra3 fsn db fs11 mlra mt1 cl02 dn",
                                                    text: "bookmark"
                                                })
                                            )
                                        )
                                    )
                                )
                            })
                        )
                    )
                )
            )
            }
        }
    })
    }

    for (var k = 0; k < posts.length; k++){
		$.map(posts[k].data, function(v,i) {
            if (thisP.parents('.khốiPost').attr('name') === v.idPost) {
                if(v.postDetail.length == 0) {
                    $("#đầyĐủBàiViết [name="+ idThis +"]").append(
                        $("<p>", {class: "tac", text: "Bạn chưa đánh dấu tin"})
                    )
                }
            }
			
		})
	}

    setTimeout(function () {
        $('#đầyĐủBàiViết').addClass('l0 tl05s').removeClass('l1i');
        $('#wrapper').addClass('l-1').removeClass('l0i');
    }, 100)


    if($(".tB")[0]) {
        var keyTB = localStorage.getItem('stateTB');
        if (keyTB == 'null' || keyTB == 'undefined') {
            keyTB = 1;
        }
        var stateTB;

        function setTB() {
            if (keyTB == 1) {
                $('.tbOff').removeClass("dn").siblings().addClass("dn")
                $("#đầyĐủBàiViết .container.pr").empty();
                $("#đầyĐủBàiViết").append(
                    $("<div>", {class: "khóa pa t40p l0 z9 bgr95 wh1"})
                )
            } else if (keyTB == 2) {
                $(".khóa").remove();
                $('.tbOff').addClass("dn").siblings().removeClass("dn")
            }
        };
        setTB();

        $(".tB").click(function(){
            $(this).children().toggleClass("dn");
            if($('.tbOn').hasClass("dn")) {
                $("#đầyĐủBàiViết .container.pr").empty();
                $("#đầyĐủBàiViết").append(
                    $("<div>", {class: "khóa pa t40p l0 z9 bgr95 wh1"})
                )
                stateTB = 1;
                localStorage.setItem('stateTB', stateTB);
                keyTB = localStorage.getItem('stateTB');
            } else {
                for (var k = 0; k < posts.length; k++) {
                    $.map(posts[k].data, function(v,i){
                    if (v.idPost == "tinHệThống") {
                        $(".container.pr").append(
                            $("<div>", {
                                name: v.idPost,
                                class: "khốiPost plr15 mt15 row-md"
                            }).append(
                                $.map(v.postDetail, function (v, i) {
                                    return $("<div>", {
                                        class: "col-xs-12 col-md-6 plr15-md bsbb df jcsb mb25"
                                    }).append(
                                        $('<div>', {
                                            class: "w30"
                                        }).append(
                                            $("<div>", {
                                                class: "img-32 bra5",
                                                style: "background-image: url(" + v
                                                    .ảnhThumnail + ")"
                                            })
                                        ),
                                        $('<div>', {
                                            class: "w65 ofh relative"
                                        }).append(
                                            $("<a>", {
                                                class: "post",
                                                id: v.id,
                                                href: "#"
                                            }).append(
                                                $("<h1>", {
                                                    class: "fw5 title fs1-sm fs1i-md fs14",
                                                    text: v.tên
                                                })
                                            ),
                                            $("<div>", {
                                                class: "w1 pa b0 l0 df jcsb"
                                            }).append(
                                                $("<small>", {
                                                    class: "fs06-sm fs06i-md fs1 cl04  df fdc jcsc df fdc jcsc",
                                                    text: v.time
                                                }),
                                                $("<div>", {
                                                    class: 'book_mark'
                                                }).append(
                                                    $("<o>", {
                                                        class: "iIcon ffi usn bra3 fsn db fs11 mlra mt1 cl04",
                                                        text: "bookmark_border"
                                                    }),
                                                    $("<o>", {
                                                        class: "iIcon ffi usn bra3 fsn db fs11 mlra mt1 cl02 dn",
                                                        text: "bookmark"
                                                    })
                                                )
                                            )
                                        )
                                    )
                                })
                            )
                        )
                            
                        
                    }
                })
                }
                $(".khóa").remove();
                stateTB = 2;
                localStorage.setItem('stateTB', stateTB);
                keyTB = localStorage.getItem('stateTB');
            }
        })
    }

    $('.đóng').click(function () {
        $('#đầyĐủBàiViết').addClass('l1i').removeClass('l0 tl05s');
        $('#wrapper').removeClass('l-1').addClass('l0i');
        $('.trangĐầyĐủ').addClass('pen');
        setTimeout(function () {
            $('#đầyĐủBàiViết').remove();
        }, 1000)
        setTimeout(function () {
            $('.trangĐầyĐủ').removeClass('pen');
        }, 1300)
    })

    $(".grid").addClass("dn");
    $("#nuocngoai").removeClass("dn");
    $(document).on("click", ".listDSQ", function(){
        $(this).siblings('.grid').toggleClass("dn");
        $(this).children().toggleClass("dn")
    })
})

//TODO: ĐÁNH DẤU BÀI VIẾT
$(document).on("click", ".book_mark", function () {
    $(this).children().toggleClass('dn');
})


