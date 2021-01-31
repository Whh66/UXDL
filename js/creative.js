$(function() {
    // 搜索功能
    $(".top-search-box")
        .on("click", ".qtw-button", function() {
            console.log(1);
            // 获取搜索框内容
            var searchText = $(".search-input input").val().trim();
            if (searchText) {
                window.location.href = `/search.html?search=${searchText}&catId=${catId}`;
            }
            $(".search-input input").val("");
        })
        .on("keyup", function(e) {
            // 同步搜索框内容
            $(".search-input input").val(e.target.value);
            // 按回车键触发搜索
            if (e.keyCode === 13 && $(".search-input input").val().trim()) {
                $(".qtw-button").click();
            }
        });
    // 搜索下拉选择框
    $(".slide-logo")
        .click(function() {
            // console.log(1);
            $(this).find(".search-selected2").show();
        })
    $(".search-selected2").mouseleave(function() {
        $(".search-selected2").hide();
    });
    $('.func-search-class').click(function() {
        $(this).find('.search-selected').show();
    })
    $(".search-selected").mouseleave(function() {
        $(".search-selected").hide();
    });
    // 搜索模块的选择框
    $(".func-search-class")
        .click(function() {
            // console.log(1);
            $(this).find(".search-selected1").show();
        })
    $('.search-selected1').mouseleave(function() {
        $(".search-selected1").hide();
    });

    var catId = "";
    $(".top-search-box").on("click", ".search-selected li", function() {
        // console.log($(this).text());
        $(".func-search-class span").text($(this).text());
        catId = $(this).attr("data-falg");
        $(this).parent().hide();
    });

    // 下滑搜索框
    var detailsFlag = 1;
    var resFlag = false;
    $(window).scroll(function() {
        if ($(window).scrollTop() > 500 && detailsFlag) {
            $(".fication-slide").css("top", "0px");
        } else {
            $(".fication-slide").css("top", "-145px");
        }
    });

    // 搜索框焦点事件
    $(".search-input input").focus(function() {
        // console.log(1);
        $(this).attr("placeholder", "");
    });
    $(".search-input input").blur(function() {
        // console.log(1);
        $(this).attr("placeholder", "通 过 关 键 字 搜 索 U X D L");
    });


    // 鼠标滑动，改变颜色
    // $('.fic-text').on('click', '.second-li', function() {
    //     // console.log(1);
    //     $(this).siblings().children('a').removeClass('changeColor')
    //     $(this).siblings().children('a').children('i').html('&#xe61a;')
    //     $(this).children('a').addClass('changeColor')
    //     $(this).children('a').children('i').html('&#xe619;')
    // })

    // 添加收藏功能
    $("#gallery-wrapper").on("click", "#favourite", function(e) {
        e.stopPropagation();
        if (sessionStorage.getItem("status") === "401") {
            layer.msg("请登陆", {
                time: 1000,
            });
            $("#login").click();
            return;
        }
        var favouriteThis = $(this);
        $.ajax({
            method: "POST",
            url: "http://139.9.143.69:8001/usercenter/works/favorites/" +
                $(this).parents(".search-img-hover").attr("data-id"),
            headers: {
                uid: localStorage.getItem("uid"),
            },
            success: function(res) {
                console.log(res);
                if (res.flag) {
                    $(favouriteThis)
                        .siblings("i")
                        .html(parseInt($(favouriteThis).siblings("i").html()) + 1);
                }
            },
        });
        $(this).attr("src", "./img/favorite2.png");
        $(".favourite img").attr("src", "./img/favorite2.png");
    });

    // 详情页收藏功能
    $("body").on("click", ".favourite", function() {
        $("#favourite").click();
    });
    // 模拟·渲染数据
    var data = [{
        id: 1,
        show_image: './update/图层 23.png',
        category1_name: '创意背景',
        favourite_num: 66

    }, {
        id: 2,
        show_image: './update/图层 25.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 3,
        show_image: './update/图层 33.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 4,
        show_image: './update/图层 48.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 5,
        show_image: './update/图层 49.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 6,
        show_image: './update/图层 50.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 7,
        show_image: './update/图层 51.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 8,
        show_image: './update/图层 52.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 9,
        show_image: './update/图层 57.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 10,
        show_image: './update/图层 58.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 11,
        show_image: './update/图层 59.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 12,
        show_image: './update/图层 60.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 13,
        show_image: './update/图层 61.png',
        category1_name: '创意背景',
        favourite_num: 66

    }, {
        id: 14,
        show_image: './update/图层 62.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 15,
        show_image: './update/图层 63.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 16,
        show_image: './update/图层 64.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 17,
        show_image: './update/图层 65.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 18,
        show_image: './update/图层 66.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 19,
        show_image: './update/图层 67.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 20,
        show_image: './update/图层68.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 21,
        show_image: './update/图层69.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 22,
        show_image: './update/jhk-1600912084427.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 23,
        show_image: './update/jhk-1600912089044.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 24,
        show_image: './update/jhk-1600912091318.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 25,
        show_image: './update/jhk-1600912094975.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 26,
        show_image: './update/jhk-1600912095476.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 27,
        show_image: './update/jhk-1600912091318.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 28,
        show_image: './update/jhk-1600912099677.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 29,
        show_image: './update/jhk-1600912102542.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 30,
        show_image: './update/jhk-1600912105899.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 31,
        show_image: './update/jhk-1600912108638.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 32,
        show_image: './update/jhk-1600912113307.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 33,
        show_image: './update/jhk-1600912117786.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 34,
        show_image: './update/jhk-1600912124948.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 35,
        show_image: './update/jhk-1600912138641.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 36,
        show_image: './update/jhk-1600912164350.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 37,
        show_image: './update/jhk-1600912166690.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 38,
        show_image: './update/jhk-1600912166690.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 39,
        show_image: './update/jhk-1600912179180.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 40,
        show_image: './update/jhk-1600912186639.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 41,
        show_image: './update/jhk-1600912188520.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 42,
        show_image: './update/jhk-1600917333677.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 43,
        show_image: './update/jhk-1600917347025.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 44,
        show_image: './update/jhk-1600917385530.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 45,
        show_image: './update/jhk-1600917389115.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 46,
        show_image: './update/jhk-1600917392691.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 47,
        show_image: './update/jhk-1600917395334.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 48,
        show_image: './update/jhk-1600917398090.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 49,
        show_image: './update/jhk-1600917665328.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 50,
        show_image: './update/jhk-1600917668957.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 51,
        show_image: './update/jhk-1600917904980.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 52,
        show_image: './update/jhk-1600917976501.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 53,
        show_image: './update/jhk-1600917978478.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 54,
        show_image: './update/jhk-1600917980860.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 55,
        show_image: './update/jhk-1600917987209.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 56,
        show_image: './update/jhk-1600917993579.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 57,
        show_image: './update/jhk-1600917994808.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 58,
        show_image: './update/jhk-1600918000940.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 59,
        show_image: './update/jhk-1600918004686.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 60,
        show_image: './update/jhk-1600918007805.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 61,
        show_image: './update/jhk-1600918220838.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 62,
        show_image: './update/jhk-1600918311096.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 63,
        show_image: './update/jhk-1600918520085.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 64,
        show_image: './update/jhk-1600918649712.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 65,
        show_image: './update/jhk-1600918652392.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 66,
        show_image: './update/jhk-1600918666715.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 67,
        show_image: './update/jhk-1600918707732.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 68,
        show_image: './update/jhk-1600918741039.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 69,
        show_image: './update/jhk-1600918991675.png',
        category1_name: '创意背景',
        favourite_num: 66
    }, {
        id: 70,
        show_image: './update/jhk-1600919036346.png',
        category1_name: '创意背景',
        favourite_num: 66
    }];
    var htmlStr = template("pictures", data);
    // console.log(htmlStr);
    // 渲染 HTML 结构
    $("#gallery-wrapper").html(htmlStr);
    $("#gallery-wrapper2").html(htmlStr);
    $("#gallery-wrapper1").html(htmlStr);
    $("#gallery-wrapper3").html(htmlStr);
    $("#gallery-wrapper4").html(htmlStr);
    $("#gallery-wrapper5").html(htmlStr);
    $(window).resize();
    // 渲染



    // 精选藏管图片渲染
    // var searchHtml = [];
    // $.get(
    //     "http://139.9.143.69:8001/materials/choiceness/0", {
    //         page: 1,
    //         size: 30,
    //     },
    //     function(res) {
    //         // console.log(res.data.rows)
    //         // 调用 template 函数
    //         var htmlStr = template("pictures", res.data);
    //         // console.log(htmlStr);
    //         // 渲染 HTML 结构
    //         $("#gallery-wrapper").html(htmlStr);
    //         $("#gallery-wrapper1").html(htmlStr);
    //         $("#gallery-wrapper2").html(htmlStr);
    //         $("#gallery-wrapper3").html(htmlStr);
    //         $("#gallery-wrapper4").html(htmlStr);
    //         $("#gallery-wrapper5").html(htmlStr);
    //         $(window).resize();
    //     }

    // );

    // 显示更多按钮
    $(".more").on("click", function() {
        // console.log($(this).prev()[0]);
        // console.log($('#gallery-wrapper').css('height'));
        $(this)
            .prev()
            .css({
                // 'overflow': 'visible',
                "max-height": $("#gallery-wrapper").css("height"),
            });
        $(this).css({
            background: "#ccc",
            cursor: "not-allowed",
        });
    });




    $("#gallery-wrapper").pinterest_grid({
        no_columns: 4,
        padding_x: 20,
        padding_y: 20,
        margin_bottom: 120,
        single_column_breakpoint: 700,
    });
    $("#gallery-wrapper1").pinterest_grid({
        no_columns: 4,
        padding_x: 20,
        padding_y: 20,
        margin_bottom: 120,
        single_column_breakpoint: 700,
    });

    $("#gallery-wrapper2").pinterest_grid({
        no_columns: 4,
        padding_x: 20,
        padding_y: 20,
        margin_bottom: 120,
        single_column_breakpoint: 700,
    });

    $("#gallery-wrapper3").pinterest_grid({
        no_columns: 4,
        padding_x: 20,
        padding_y: 20,
        margin_bottom: 120,
        single_column_breakpoint: 700,
    });
    $("#gallery-wrapper4").pinterest_grid({
        no_columns: 4,
        padding_x: 20,
        padding_y: 20,
        margin_bottom: 120,
        single_column_breakpoint: 700,
    });
    $("#gallery-wrapper5").pinterest_grid({
        no_columns: 4,
        padding_x: 20,
        padding_y: 20,
        margin_bottom: 120,
        single_column_breakpoint: 700,
    });
    // 详情页
    $(".search-img-download").on("click", function() {
        $(".details").show();
        window.scroll(0, 0);
        $(window).resize();
    });
    $(".datails-close").on("click", function() {
        $(".details").hide();
        $(window).resize();
    });

    $(".details").hide();
    //分类导航
    // $.ajax({
    //     method: "GET",
    //     url: "http://139.9.143.69:8001/materials/categorys/4",
    //     success: function(res) {
    //         console.log(2);
    //         console.log(res.data);
    //         // 调用 template 函数
    //         var htmlStr = template("classify", res.data);
    //         // // console.log(htmlStr);
    //         // // 渲染 HTML 结构
    //         $("#one-select").html(htmlStr);
    //     },
    // });

    //分类级别信息查询
    var twoClassify = {
        creative: [] //创意背景分类
    }

    $.get("http://139.9.143.69:8001/materials/categorys/level/2", function(res) {
        console.log(235);
        console.log(res);
        for (var i = 0; i < res.data.length; i++) {
            if (res.data[i].parent_id == 4) {
                twoClassify.creative.push(res.data[i]);
            }
        }
        console.log(twoClassify.creative);
        var htmlstr = template('two-classify', twoClassify);
        $('#two-select').html(htmlstr);
        console.log($('.two').html(htmlstr));
        $('#one-select').html(htmlstr);

    });
    // 模拟跳转页面功能

    // 添加自定义属性
    function toggle(element) {
        $.each(element, function(i, ele) {
            $(ele).attr("index", i);
        });
    }
    toggle($('#w>div'));
    // 利用index控制页面瀑布流的显示
    $('#one-select').on('click', 'li', function() {
        $(this).children().addClass('changeColor');
        $(this).siblings().children('a').removeClass('changeColor')
        var index = $(this).attr('index');
        // console.log(index);
        // $(one[index]).addClass('color-change').siblings('li').removeClass('color-change');
        $('#two-select li').eq(index).children().addClass('changeColor');
        console.log($('#two-select li').eq(index).children());
        $('#two-select li').eq(index).siblings().children('a').removeClass('changeColor');
        if (index === "0") {
            $('#w').children('div').show();
        } else {
            $('#w>div').eq(index).show().siblings('div').hide();
            // console.log($('#w>div').eq(index));
        }
        $("html,body").animate({
            scrollTop: 0
        }, 0);
    })

    $('#two-select ').on('click', 'li', function() {
        $(this).children().addClass('changeColor');
        $(this).siblings().children('a').removeClass('changeColor')
        var index = $(this).attr('index');
        console.log(index);
        $('#one-select li').eq(index).children().addClass('changeColor');
        $('#one-select li').eq(index).siblings('li').children().removeClass('changeColor');
        // console.log($('.one li').eq(index).children().html());

        if (index === "0") {
            $('#w').children('div').show();
        } else {
            $('#w>div').eq(index).show().siblings('div').hide();
        }
        $("html,body").animate({
            scrollTop: 0
        }, 0);
    })


    $(".menus .nav-box li").mouseenter(function() {
        $(this).siblings("li").removeClass("changeColor");
        $(this).addClass("changeColor");
    });



    // 详情页面
    $("[id*=gallery-wrapper]").on("click", ".search-img-hover", function() {
        if (sessionStorage.getItem('status') === '401') return
        console.log($(this).attr('id'));
        $.ajax({
            method: 'GET',
            url: 'http://139.9.143.69:8001/materials/' + $(this).attr('id'),
            success: function(res) {
                console.log(res);
            }
        })

        // 3手机号码和验证码密码自定义验证规则
        form.verify({
            // 手机号码规则
            phonenumber: [/^\d{1,20}$/, "请输入正确手机号码"],
            // 密码规则
            psw: [/^\d{1,20}$/, "请输入正确的密码"],
            psw2: [/^[a-zA-Z0-9]{6,8}$/, "请输入正确的密码"],
            // 校验两次密码是否一致的规则
            repwd: function(value) {
                // 通过形参拿到的是确认密码框中的内容
                // 还需要拿到密码框中的内容
                // 然后进行一次等于的判断
                // 如果判断失败,则return一个提示消息即可
                var pwd = $(".reg-box [name=password]").val();
                if (pwd !== value) {
                    return "两次密码不一致！";
                }
            },
        });
        //4.1   input输入框超限提醒
        $("form input").on("keyup", function() {
            if (this.value.length == 20) {
                layer.open({
                    title: "提示！",
                    content: "输入已到上限",
                });
            }
        });
        //    4.2    按钮样式变化
        $("#login-box1").on("keyup", function(e) {
            var phone1 = $(".phone-ipt1").val();
            var psw1 = $("#psw1").val();
            if (phone1 != "" && psw1 != "") {
                $("#post-btn1").addClass("color-trans");
                $("#post-btn1").removeClass("layui-btn-disabled");
            }
        });
        $("#register-box1").on("keyup", function(e) {
            var phone2 = $(".phone-ipt2").val();
            var psw2 = $("#psw3").val();
            var psw5 = $("#regist-psw").val();
            if (phone2 != "" && psw2 != "" && psw5 != "") {
                $("#post-btn3").addClass("color-trans");
                $("#post-btn3").removeClass("layui-btn-disabled");
            }
        });
        $("#register-box2").on("keyup", function(e) {
            var phone3 = $(".phone-ipt3").val();
            var psw3 = $("#psw4").val();
            if (phone3 != "" && psw3 != "") {
                $("#post-btn4").addClass("color-trans");
                $("#post-btn4").removeClass("layui-btn-disabled");
            }
        });
        $("#if-forget").on("keyup", function(e) {
            var phone3 = $(".phone-ipt5").val();
            var psw3 = $("#psw5").val();
            if (phone3 != "" && psw3 != "") {
                $("#next-step").addClass("color-trans");
                $("#next-step").removeClass("layui-btn-disabled");
            }
        });

        // 5 手机验证码发送事件
        // 首先定义一个名为jishu的变量用来统计代表点击次数
        var jishu = 0;
        var flag = 0;
        // 5.1登陆1的验证码发送事件
        $(".send-to1").on("click", function(e) {
            var phone1 = $(".phone-ipt1").val();
            console.log(phone1);
            var count = 4;
            var count60 = 3;
            if (phone1 == "") {
                $(this).addClass("layui-btn-disabled");
                layer.open({
                    title: "提示！",
                    content: "请输入符合规范的手机号",
                });
            } else if (isNaN(phone1)) {
                $(this).addClass("layui-btn-disabled");
                layer.open({
                    title: "提示！",
                    content: "只允许输入纯数字！",
                });
            } else if (flag == 0) {
                if (jishu < 3) {
                    flag = 1;
                    $(".send-to1").addClass("layui-btn-disabled");
                    console.log("点击了 " + ++jishu + "次<br>");
                    layer.open({
                        title: "提示！",
                        content: "已发送验证码",
                    });
                    // 设置倒计时按钮样式
                    var interval = null; //timer变量，控制时间
                    $(".send-to1").text(count + "秒倒计时");
                    var interval = setInterval(downset, 1000);

                    function downset() {
                        $(".send-to1").text(count + "秒倒计时");
                        $(".send-to1").addClass("color-trans");
                        $(".send-to1").addClass("layui-btn-disabled");
                        count--;
                        if (count === -1) {
                            $(".send-to1").text("重发验证码");
                            clearInterval(interval);
                            $(".send-to1").removeClass("color-trans");
                            $(".send-to1").removeClass("layui-btn-disabled");
                            flag = 0;
                        }
                    } //请求后台发送验证码 TODO
                    //ajax获取手机验证码
                    e.preventDefault();
                    $.ajax({
                        method: "GET",
                        url: "http://139.9.143.69:8001/oauth/msm/" + phone1,
                        success: function(res) {
                            console.log(res);
                        },
                    });
                } else if (jishu == 3) {
                    flag = 1;
                    $(".send-to1").text(count60 + "后重发");
                    $(".send-to1").addClass("layui-btn-disabled");
                    var interval2 = null; //timer变量，控制时间
                    var interval2 = setInterval(downset2, 1000);

                    function downset2() {
                        $(".send-to1").text(count60 + "秒倒计时");
                        count60--;
                        if (count60 === -1) {
                            $(".send-to1").text("重发验证码");
                            clearInterval(interval2);
                            $(".send-to1").removeClass("layui-btn-disabled");
                            $(".send-to1").removeClass("color-trans");
                            flag = 0;
                            jishu = 0;
                        }
                    }
                }
            }
        });
        //5.2 注册1验证码
        $(".send-to2").on("click", function(e) {
            var phone2 = $(".phone-ipt2").val();
            console.log(phone2);
            var count = 4;
            var count60 = 3;
            if (phone2 == "") {
                $(this).addClass("layui-btn-disabled");
                layer.open({
                    title: "提示！",
                    content: "请输入符合规范的手机号",
                });
            } else if (isNaN(phone2)) {
                $(this).addClass("layui-btn-disabled");
                layer.open({
                    title: "提示！",
                    content: "只允许输入纯数字！",
                });
            } else if (flag == 0) {
                if (jishu < 3) {
                    flag = 1;
                    $(".send-to2").addClass("layui-btn-disabled");
                    console.log("点击了 " + ++jishu + "次<br>");
                    layer.open({
                        title: "提示！",
                        content: "已发送验证码",
                    });
                    // 设置倒计时按钮样式
                    var interval = null; //timer变量，控制时间
                    $(".send-to2").text(count + "秒倒计时");
                    var interval = setInterval(downset, 1000);

                    function downset() {
                        $(".send-to2").text(count + "秒倒计时");
                        $(".send-to2").addClass("color-trans");
                        $(".send-to2").addClass("layui-btn-disabled");
                        count--;
                        if (count === -1) {
                            $(".send-to2").text("重发验证码");
                            clearInterval(interval);
                            $(".send-to2").removeClass("color-trans");
                            $(".send-to2").removeClass("layui-btn-disabled");
                            flag = 0;
                        }
                    } //请求后台发送验证码 TODO
                    //ajax获取手机验证码
                    e.preventDefault();
                    $.ajax({
                        method: "GET",
                        url: "http://139.9.143.69:8001/oauth/msm/" + phone2,
                        success: function(res) {
                            console.log(res);
                        },
                    });
                } else if (jishu == 3) {
                    flag = 1;
                    $(".send-to2").text(count60 + "后重发");
                    $(".send-to2").addClass("layui-btn-disabled");
                    var interval2 = null; //timer变量，控制时间
                    var interval2 = setInterval(downset2, 1000);

                    function downset2() {
                        $(".send-to2").text(count60 + "秒倒计时");
                        count60--;
                        if (count60 === -1) {
                            $(".send-to2").text("重发验证码");
                            clearInterval(interval2);
                            $(".send-to2").removeClass("color-trans");
                            $(".send-to2").removeClass("layui-btn-disabled");
                            flag = 0;
                            jishu = 0;
                        }
                    }
                }
            }
        });
        // 5.3注册2验证码
        $(".send-to3").on("click", function(e) {
            var phone3 = $(".phone-ipt3").val();
            var count = 4;
            var count60 = 3;
            if (phone3 == "") {
                $(this).addClass("layui-btn-disabled");
                layer.open({
                    title: "提示！",
                    content: "请输入符合规范的手机号",
                });
            } else if (isNaN(phone3)) {
                $(this).addClass("layui-btn-disabled");
                layer.open({
                    title: "提示！",
                    content: "只允许输入纯数字！",
                });
            } else if (flag == 0) {
                if (jishu < 3) {
                    flag = 1;
                    $(".send-to3").addClass("layui-btn-disabled");
                    console.log("点击了 " + ++jishu + "次<br>");
                    layer.open({
                        title: "提示！",
                        content: "已发送验证码",
                    });
                    // 设置倒计时按钮样式
                    var interval = null; //timer变量，控制时间
                    $(".send-to3").text(count + "秒倒计时");
                    var interval = setInterval(downset, 1000);

                    function downset() {
                        $(".send-to3").text(count + "秒倒计时");
                        $(".send-to3").addClass("color-trans");
                        $(".send-to3").addClass("layui-btn-disabled");
                        count--;
                        if (count === -1) {
                            $(".send-to3").text("重发验证码");
                            clearInterval(interval);
                            $(".send-to3").removeClass("color-trans");
                            $(".send-to3").removeClass("layui-btn-disabled");
                            flag = 0;
                        }
                    } //请求后台发送验证码 TODO
                    //ajax获取手机验证码
                    e.preventDefault();
                    $.ajax({
                        method: "GET",
                        url: "http://139.9.143.69:8001/oauth/msm/" + phone3,
                        success: function(res) {
                            console.log(res);
                        },
                    });
                } else if (jishu == 3) {
                    flag = 1;
                    $(".send-to3").text(count60 + "后重发");
                    $(".send-to3").addClass("layui-btn-disabled");
                    var interval2 = null; //timer变量，控制时间
                    var interval2 = setInterval(downset2, 1000);

                    function downset2() {
                        $(".send-to3").text(count60 + "秒倒计时");
                        count60--;
                        if (count60 === -1) {
                            $(".send-to3").text("重发验证码");
                            clearInterval(interval2);
                            $(".send-to3").removeClass("layui-btn-disabled");
                            $(".send-to3").removeClass("color-trans");
                            flag = 0;
                            jishu = 0;
                        }
                    }
                }
            }
        });
        // 5.4找回密码验证码
        $(".send-to5").on("click", function(e) {
            // $('#layui-layer-shade').show();
            // $('#if-forget').hide();
            // $('#if-reset').show();
            var phone5 = $(".phone-ipt5").val();
            var count = 4;
            var count60 = 3;
            if (phone5 == "") {
                $(this).addClass("layui-btn-disabled");
                layer.open({
                    title: "提示！",
                    content: "请输入符合规范的手机号",
                });
            } else if (isNaN(phone5)) {
                $(this).addClass("layui-btn-disabled");
                layer.open({
                    title: "提示！",
                    content: "只允许输入纯数字！",
                });
            } else if (flag == 0) {
                if (jishu < 3) {
                    flag = 1;
                    $(".send-to5").addClass("layui-btn-disabled");
                    console.log("点击了 " + ++jishu + "次<br>");
                    layer.open({
                        title: "提示！",
                        content: "已发送验证码",
                    });
                    // 设置倒计时按钮样式
                    var interval = null; //timer变量，控制时间
                    $(".send-to5").text(count + "秒倒计时");
                    var interval = setInterval(downset, 1000);

                    function downset() {
                        $(".send-to5").text(count + "秒倒计时");
                        $(".send-to5").addClass("color-trans");
                        $(".send-to5").addClass("layui-btn-disabled");
                        count--;
                        if (count === -1) {
                            $(".send-to5").text("重发验证码");
                            clearInterval(interval);
                            $(".send-to5").removeClass("color-trans");
                            $(".send-to5").removeClass("layui-btn-disabled");
                            flag = 0;
                        }
                    } //请求后台发送验证码 TODO
                    //ajax获取手机验证码
                    e.preventDefault();
                    $.ajax({
                        method: "GET",
                        url: "http://139.9.143.69:8001/oauth/msm/" + phone5,
                        data: {
                            phone: phone5,
                        },
                        success: function(res) {
                            console.log(res);
                            localStorage.setItem("uid", res.data);
                        },
                    });
                } else if (jishu == 3) {
                    flag = 1;
                    $(".send-to5").text(count60 + "后重发");
                    $(".send-to5").addClass("layui-btn-disabled");
                    var interval2 = null; //timer变量，控制时间
                    var interval2 = setInterval(downset2, 1000);

                    function downset2() {
                        $(".send-to5").text(count60 + "秒倒计时");
                        count60--;
                        if (count60 === -1) {
                            $(".send-to5").text("重发验证码");
                            clearInterval(interval2);
                            $(".send-to5").removeClass("layui-btn-disabled");
                            $(".send-to5").removeClass("color-trans");
                            flag = 0;
                            jishu = 0;
                        }
                    }
                }
            }
        });

        // 6登陆注册提交发送数据post
        // 6.1登陆1提交数据
        $("#post-btn1").on("click", function(e) {
            var phone1 = $(".phone-ipt1").val();
            var psw1 = $("#psw1").val();
            if (phone1 != "" && psw1 != "") {
                $(this).addClass("bgc-change");
                $(this).removeClass("layui-btn-disabled");
                e.preventDefault();
                $.ajax({
                    method: "POST",
                    url: "http://139.9.143.69:8001/oauth/login/phone",
                    data: {
                        phone: $(".phone-ipt1").val(),
                        code: $("#psw1").val(),
                    },
                    success: function(res) {
                        if (res.code !== 0) {
                            return layer.msg("登验证码输入错误");
                        }
                        layer.msg("登录成功！");
                        // 将登录成功得到的 token 字符串，保存到 localStorage 中
                        localStorage.setItem("uid", res.data);
                        // 跳转到后台主页
                        location.href = "index.html";
                    },
                });
            }
        });
        // 6.2登陆2提交数据
        $("#post-btn2").on("click", function(e) {
            var phone2 = $("#phone-input").val();
            var psw2 = $("#psw-input").val();
            if (phone2 != "" && psw2 != "") {
                $(this).addClass("bgc-change");
                $(this).removeClass("layui-btn-disabled");
                e.preventDefault();
                $.ajax({
                    method: "POST",
                    url: "http://139.9.143.69:8001/oauth/login",
                    data: {
                        phone: phone2,
                        password: psw2,
                    },
                    success: function(res) {
                        if (res.code !== 0) {
                            return layer.msg("执行出错");
                        }
                        layer.msg("登陆成功！");
                        // 将登录成功得到的 token 字符串，保存到 localStorage 中
                        localStorage.setItem("uid", res.data);
                        // 跳转到后台主页
                        location.href = "index.html";
                    },
                });
            }
        });
        // 6.3注册1提交数据
        $("#post-btn3").on("click", function(e) {
            var phone3 = $(".phone-ipt2").val();
            console.log(phone3);
            var psw3 = $("#psw3").val();
            console.log(psw3);
            var setname = $("#regist-psw").val();
            console.log(setname);
            if (phone3 != "" && psw3 != "" && setname != "") {
                $(this).addClass("bgc-change");
                $(this).removeClass("layui-btn-disabled");
                e.preventDefault();
                $.ajax({
                    method: "POST",
                    url: "http://139.9.143.69:8001/oauth/register",
                    data: {
                        phone: $(".phone-ipt2").val(),
                        code: $("#psw3").val(),
                        password: $("#regist-psw").val(),
                    },
                    success: function(res) {
                        if (res.code !== 0) {
                            return layer.msg("执行出错");
                        }
                        layer.msg("注册成功！");
                        // 将登录成功得到的 token 字符串，保存到 localStorage 中
                        localStorage.setItem("uid", res.data);
                        // 跳转到后台主页
                        location.href = "index.html";
                    },
                });
            }
        });
        // 6.3注册2提交数据
        $("#post-btn4").on("click", function(e) {
            var phone4 = $(".phone-ipt3").val();
            var psw4 = $("#psw4").val();
            if (phone4 != "" && psw4 != "") {
                $(this).addClass("bgc-change");
                $(this).removeClass("layui-btn-disabled");
                e.preventDefault();
                $.ajax({
                    method: "POST",
                    url: "http://139.9.143.69:8001/oauth/login",
                    data: $(this).serialize(),
                    success: function(res) {
                        if (res.code !== 0) {
                            return layer.msg("执行出错");
                        }
                        layer.msg("登录成功！");
                        // 将登录成功得到的 token 字符串，保存到 localStorage 中
                        localStorage.setItem("uid", res.data);
                        // 跳转到后台主页
                        location.href = "index.html";
                    },
                });
            }
        });

        // 7找回密码提交数据,跳转至重置盒子
        $("#if-forget").on("click", function(e) {
            var phone5 = $(".phone-ipt5").val();
            var psw5 = $("#psw5").val();
            if (phone5 != "" && psw5 != "") {
                $("#layui-layer-shade").show();
                $("#if-forget").hide();
                $("#if-reset").show();
                var newpsw = $("#new-psw").val();
                var renewpsw = $("#re-newpsw").val();
                if (newpsw === renewpsw) {
                    e.preventDefault();
                    $.ajax({
                        method: "POST",
                        url: "http://139.9.143.69:8001/oauth/pwd",
                        data: {
                            phone: phone5,
                            code: psw5,
                            password: renewpsw,
                        },
                        success: function(res) {
                            if (res.code !== 0) {
                                return layer.msg("执行出错");
                            }
                            layer.msg("登录成功！");
                            // 将登录成功得到的 token 字符串，保存到 localStorage 中
                            localStorage.setItem("uid", res.data);
                            // 跳转到后台主页
                            location.href = "index.html";
                        },
                    });
                }
            }
        });

        var searchRecommend = [];

        var datailsId = "";
        $(".details").show();
        window.scroll(0, 0);
        if ($(this)[0].dataset.id) {
            datailsId = $(this)[0].dataset.id;
            // 获取作品详情
            $.get(
                "http://139.9.143.69:8001/materials/" + $(this)[0].dataset.id,
                function(res) {
                    detailsName = res.data.name;
                    console.log(res, 123);
                    $(".datails-text h4").text(res.data.name);
                    $(".datails-mrange").text(res.data.copyright.mrange);
                    $(".datails-filetype").text(res.data.filetype);
                    $(".datails-spec").text(res.data.source_size);
                    $(".datails-img img").attr("src", res.data.show_image);
                    $(".datails-author i").text(res.data.author);
                    $(".datails-Browsing-data").text(
                        "浏览次数：" + res.data.numInfo.visitNum
                    );
                    $(".datails-Download-data").text(
                        "下载次数：" + res.data.numInfo.downloadNum
                    );
                }
            );
            $.get(
                "http://139.9.143.69:8001/materials/recommends/" +
                $(this)[0].dataset.id,
                function(res) {
                    console.log(res);
                    for (
                        var flag = 0; flag < (res.data.rows.length >= 8 ? 8 : res.data.rows.length); flag++
                    ) {
                        searchRecommend.push(`<article class="white-panel">
          <img src="${res.data.rows[flag].show_image}" class="thumb">
          <div class="search-img-hover">
              <a class="search-img-download" data-id = ${res.data.rows[flag].id}>免 费 下 载</a>
          </div>
        </article>`);
                    }
                    $("#gallery-wrapper2").html(searchRecommend.join(""));
                    detailsFlag = 0;
                    searchRecommend.splice(0, searchRecommend.length);
                    $("#gallery-wrapper2").pinterest_grid({
                        no_columns: 4,
                        padding_x: 15,
                        padding_y: 15,
                        // margin_bottom: 50,
                        single_column_breakpoint: 0,
                    });
                    $(window).resize();
                }
            );
        }
        $(window).resize();
    });
    $(".datails-close").on("click", function() {
        $(".details").hide();
        $(window).resize();
        detailsFlag = 1;
    });

    var detailsName = "";
    var detailsLink = $("#datails-download-none")[0];
    //下载
    $("body").on("click", ".datails-download", function() {
        // console.log(1);
        if (sessionStorage.getItem("status") === "401") {
            $(".details").hide();
            $("#login").click();
            return;
        }
        $.ajax({
            method: "POST",
            url: "http://139.9.143.69:8001/usercenter/download/105",
            headers: {
                uid: localStorage.getItem("uid"),
            },
            success: function(res) {
                console.log(res);
                detailsLink.href = res.data.split("8080")[1];
                console.log(detailsLink.href);
                detailsLink.download = detailsName;
                console.log(detailsName);
                detailsLink.click();
                location.href = res.data
                $('.datails-download')[0].href = res.data
                var imgURL = URL.createObjectURL(res.data)
                console.log(imgURL);
            },
        });
    });

});