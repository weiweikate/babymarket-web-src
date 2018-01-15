var SCROLLING = false;
$(document).ready(function() {
    initLayout();
    bindEvent();
    init3rdpartySource()
});
function initLayout() {
    var a = document.documentElement.clientHeight;
    $("#cwrap").height(a);
    $("#container").height(7 * a);
    $("#container").find('div[class^="wrap"]').height(a);
    $(".main-980").height(a);
    $(".help li").last().css({
        "border-right": "none"
    });
    adjustSaomaPosition();
    downClose();
    downClose2();
    H5Util.tongji2("webclient", "hdHome", "open")
}
function bindEvent() {
    openDnld();
    pageIndicatorEvent();
    if (document.addEventListener) {
        document.addEventListener("DOMMouseScroll", mouseScrollEventHandler, false)
    }
    window.onmousewheel = document.onmousewheel = mouseScrollEventHandler;
    if (document.addEventListener) {
        document.addEventListener("keydown", keyBordEventHandler, false)
    }
    window.onkeydown = document.onkeydown = keyBordEventHandler;
    $(window).on("resize", adjustSaomaPosition);
    $(window).on("resize",
        function() {
            var b = document.documentElement.clientHeight;
            $("#cwrap").height(b);
            $("#container").height(7 * b);
            $("#container").find('div[class^="wrap"]').height(b);
            $(".main-980").height(b);
            var a = $(".kong").index($(".active"));
            switch (a) {
                case 0:
                    $("#container").css({
                        top:
                            0
                    });
                    break;
                case 1:
                    $("#container").css({
                        top:
                        -1 * b
                    });
                    break;
                case 2:
                    $("#container").css({
                        top:
                        -2 * b
                    });
                    break;
                case 3:
                    $("#container").css({
                        top:
                        -3 * b
                    });
                    break;
                case 4:
                    $("#container").css({
                        top:
                        -4 * b
                    });
                    break;
                case 5:
                    $("#container").css({
                        top:
                        -5 * b
                    });
                    break;
                case 6:
                    $("#container").css({
                        top:
                        -6 * b
                    });
                    break
            }
        });
    bindTouchEventHandler()
}
function bindTouchEventHandler() {
    var a;
    $(window).on("touchstart",
        function(b) {
            a = b.originalEvent.changedTouches[0].clientY
        });
    $(window).on("touchmove",
        function(b) {
            b.preventDefault()
        });
    $(window).on("touchend",
        function(b) {
            if (b.originalEvent.changedTouches[0].clientY - a > 10) {
                scrollPage("down")
            } else {
                if (b.originalEvent.changedTouches[0].clientY - a < -10) {
                    scrollPage("up")
                }
            }
        })
}
function adjustSaomaPosition() {
    if (document.documentElement.clientWidth <= 1200 && document.documentElement.clientWidth > 980) {
        var a = (document.documentElement.clientWidth - 980) * 8 / (1200 - 980);
        $(".saoma").css("right", a + "%")
    } else {
        if (document.documentElement.clientWidth <= 980) {
            $(".saoma").css("right", "0%")
        } else {
            $(".saoma").css("right", "8%")
        }
    }
}
function animateTotal() {
    var d = $(".kong").index($(".active"));
    switch (d) {
        case 0:
            f(false);
            e(false);
            c(false);
            b(false);
            a(false);
            break;
        case 1:
            f(true);
            e(false);
            c(false);
            b(false);
            a(false);
            break;
        case 2:
            f(false);
            e(true);
            c(false);
            b(false);
            a(false);
            break;
        case 3:
            f(false);
            e(false);
            c(true);
            b(false);
            a(false);
            break;
        case 4:
            f(false);
            e(false);
            c(false);
            b(true);
            a(false);
            break;
        case 5:
            f(false);
            e(false);
            c(false);
            b(false);
            a(true);
            break;
        case 6:
            f(false);
            e(false);
            c(false);
            b(false);
            a(false);
            break
    }
    function f(g) {
        if (g == true) {
            $("#img_qyt").animate({
                    left: "10px"
                },
                1000);
            $("#img_yens").animate({
                    left: "600px"
                },
                1000)
        } else {
            $("#img_qyt").css({
                left: "300px"
            });
            $("#img_yens").css({
                left: "300px"
            })
        }
    }
    function e(g) {
        if (g == true) {
            $("#img_hand").animate({
                    top: "30%"
                },
                600)
        } else {
            $("#img_hand").css({
                top: "33%"
            })
        }
    }
    function c(g) {
        if (g == true) {
            $("#img_tphone").animate({
                    top: "40%"
                },
                800);
            $("#img_cshadow").animate({
                    top: "42%"
                },
                800)
        } else {
            $("#img_tphone").css({
                top: "48%"
            });
            $("#img_cshadow").css({
                top: "48%"
            })
        }
    }
    function b(g) {
        if (g == true) {
            $("#img_tv").animate({
                    left: "100px"
                },
                1000);
            $("#img_ipad").animate({
                    right: "150px"
                },
                1000)
        } else {
            $("#img_tv").css({
                left: "150px"
            });
            $("#img_ipad").css({
                right: "250px"
            })
        }
    }
    function a(i) {
        if (i == true) {
            var h = document.documentElement.clientHeight;
            var g = 650 - h * 0.65;
            $("#img_left").animate({
                    bottom: -g + "px"
                },
                700);
            setTimeout(function() {
                    $("#img_center").animate({
                            bottom: -g + "px"
                        },
                        700)
                },
                200);
            setTimeout(function() {
                    $("#img_right").animate({
                            bottom: -g + "px"
                        },
                        700)
                },
                400)
        } else {
            $("#img_left").css({
                bottom: "-250px"
            });
            $("#img_center").css({
                bottom: "-250px"
            });
            $("#img_right").css({
                bottom: "-250px"
            })
        }
    }
}
function pageIndicatorEvent() {
    $(".turn-page ul li a").click(function(a) {
        scrollPageTo($(".kong").index($(this)))
    })
}
function saoma() {
    var a = $(".kong").index($(".active"));
    if (a == 0) {
        $("#Top").animate({
                top: 0
            },
            600)
    } else {
        $("#Top").animate({
                top: "-81px"
            },
            600)
    }
}
function openDnld() {
    $("#xiazai").click(function(a) {
        $("#open-dnld").show();
        H5Util.tongji2("webclient", "hdHome", "click_download")
    });
    $("#dnld_android_btn").click(function(a) {
        $("#dnld_page2").show()
    });
    $("#android-dnld").click(function(a) {
        $("#open-dnld").hide();
        $("#dnld_page").show()
    });
    $("#btn-close").click(function(a) {
        $("#open-dnld").hide()
    })
}
function downClose() {
    $("#dnld_page").hide()
}
function downClose2() {
    $("#dnld_page2").hide()
}
function mouseScrollEventHandler(a) {
    a = a || window.event;
    if (a.wheelDelta) {
        if (a.wheelDelta < 0) {
            scrollPage("up")
        } else {
            if (a.wheelDelta > 0) {
                scrollPage("down")
            }
        }
    } else {
        if (a.detail) {
            if (a.detail < 0) {
                scrollPage("down")
            } else {
                if (a.detail > 0) {
                    scrollPage("up")
                }
            }
        }
    }
}
function keyBordEventHandler(a) {
    a = a || window.event;
    if (a.keyCode == 38 || a.keyCode == 37) {
        scrollPage("down")
    } else {
        if (a.keyCode == 40 || a.keyCode == 39) {
            scrollPage("up")
        }
    }
}
function scrollPage(b) {
    var a = $(".kong").index($(".active"));
    if (b == "down" && a == 0) {
        return
    }
    if (b == "up" && a == $(".kong").size() - 1) {
        return
    } else {
        scrollPageTo(b == "up" ? a + 1 : a - 1)
    }
}
function scrollPageTo(a) {
    if (SCROLLING || a < 0 || a > $(".kong").size() - 1 || a == $(".kong").index($(".active"))) {
        return
    }
    SCROLLING = true;
    var c = document.documentElement.clientHeight;
    var b = a * c * -1;
    $("#container").animate({
            top: b
        },
        1000,
        function() {
            SCROLLING = false;
            $(".active").removeClass("active");
            $($(".kong").get(a)).addClass("active");
            animateTotal();
            saoma()
        })
}
function init3rdpartySource() {
    if (location.protocol == "https:") {
        $(document.body).append('<link rel="stylesheet" type="text/css" href="' + cssPath + '/3rdparty/pop_0411.css" id="zsp_css">');
        $(document.body).append('<link rel="stylesheet" type="text/css" href="' + cssPath + '/3rdparty/sjqqapi.css"/>');
        $(document.body).append('<script async src="' + jsPath + '/3rdparty/jquery.hovertreescroll.js"><\/script>');
        $(document.body).append('<script       src="' + jsPath + '/3rdparty/key121121.js" charset="utf-8"><\/script>');
        $(document.body).append('<script async src="' + jsPath + '/3rdparty/wdapi.js" type="text/javascript"><\/script>');
        $(document.body).append('<script async src="' + jsPath + '/3rdparty/sjqqapi.js"> <\/script>');
        $(document.body).append('<script async src="' + jsPath + '/3rdparty/360mobilemgrdownload.js"><\/script>')
    } else {
        $(document.body).append('<link rel="stylesheet" type="text/css" href="//zhushou.360.cn/pop/style/pop_0411.css" id="zsp_css">');
        $(document.body).append('<link rel="stylesheet" type="text/css" href="//img1.sj.qq.com/api/styles/sjqqapi.css"/>');
        $(document.body).append('<script async="async" src="//keleyi.com/keleyi/phtml/jqtexiao/37/jquery.hovertreescroll.js"><\/script>');
        $(document.body).append('<script src="//zs.91.com/script/api/key121121.js" charset="utf-8"><\/script>');
        $(document.body).append('<script async src="//wandoujia.com/api/wdapi.js" type="text/javascript"><\/script>');
        $(document.body).append('<script async src="//img1.sj.qq.com/api/scripts/sjqqapi.js"> <\/script>');
        $(document.body).append('<script async src="//zhushou.360.cn/script/360mobilemgrdownload.js"><\/script>')
    }
};