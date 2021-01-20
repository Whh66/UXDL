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
    $('.fic-text').on('mouseenter', '.second-li', function() {
        // console.log(1);
        $(this).siblings().children('a').removeClass('changeColor')
        $(this).siblings().children('a').children('i').html('&#xe61a;')
        $(this).children('a').addClass('changeColor')
        $(this).children('a').children('i').html('&#xe619;')
    })

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

    // 精选藏管图片渲染
    var searchHtml = [];
    $.get(
        "http://139.9.143.69:8001/materials/choiceness/0", {
            page: 1,
            size: 30,
        },
        function(res) {
            // console.log(res.data.rows)
            // 调用 template 函数
            var htmlStr = template("pictures", res.data.rows);
            // console.log(htmlStr);
            // 渲染 HTML 结构
            $("#gallery-wrapper").html(htmlStr);
            $("#gallery-wrapper1").html(htmlStr);
            $("#gallery-wrapper3").html(htmlStr);
            $("#gallery-wrapper4").html(htmlStr);
            $("#gallery-wrapper5").html(htmlStr);
            $(window).resize();
        }
    );

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
        padding_x: 15,
        padding_y: 15,
        // margin_bottom: 50,
        single_column_breakpoint: 0,
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


    //分类级别信息查询
    var designer = []; //c4d
    var tbCommerce = []; //商务
    var uiDesign = []; //科技
    var template1 = []; //节日
    $.get("http://139.9.143.69:8001/materials/categorys/level/3", function(res) {
        for (var i = 0; i < res.data.length; i++) {
            if (res.data[i].parent_id == 9) {
                designer.push(res.data[i]);
            } else if (res.data[i].parent_id == 10) {
                tbCommerce.push(res.data[i]);
            } else if (res.data[i].parent_id == 11) {
                uiDesign.push(res.data[i]);
            } else if (res.data[i].parent_id == 12) {
                template1.push(res.data[i]);
            }
        }

        //c4d
        var tbCommerceHtml = [];
        for (var i = 0; i < tbCommerce.length; i++) {
            tbCommerceHtml.push(`
            <li><a href="javascript:;">${tbCommerce[i].name}</a></li>
            `);
        }

        $(".fic-text li:nth-child(3) .main-submenu").html(tbCommerceHtml.join(""));
        //商务
        var designerHtml = [];
        for (var i = 0; i < designer.length; i++) {
            designerHtml.push(`
            <li><a href="javascript:;">${designer[i].name}</a></li>
            `);
        }

        $(".fic-text li:nth-child(2) .main-submenu").html(designerHtml.join(""));
        //科技
        var uiDesignHtml = [];
        for (var i = 0; i < uiDesign.length; i++) {
            uiDesignHtml.push(`
            <li><a href="javascript:;">${uiDesign[i].name}</a></li>
            `);
        }

        $(".fic-text li:nth-child(4) .main-submenu").html(uiDesignHtml.join(""));
        //节日
        var templateHtml = [];
        for (var i = 0; i < template1.length; i++) {
            templateHtml.push(`
            <li><a href="javascript:;">${template1[i].name}</a></li>
            `);
        }

        $(".fic-text li:nth-child(5) .main-submenu").html(templateHtml.join(""));

        // 小li鼠标滑入事件
        $(".main-submenu li").mouseenter(function() {
            $(this).siblings("li").removeClass("main-submit-hover");
            $(this).addClass("main-submit-hover");
        });

        $(function() {
            var $li = $(".fic-text>li");
            $li.mouseenter(function() {
                $(this).children("ul").show();
            });
            $li.mouseleave(function() {
                $(this).children("ul").hide();
            });
        });
    });

    $(".menus .nav-box li").mouseenter(function() {
        $(this).siblings("li").removeClass("color-change");
        $(this).addClass("color-change");
    });



    // 详情页面
    $("[id*=gallery-wrapper]").on("click", ".search-img-hover", function() {
        // if (sessionStorage.getItem('status') === '401') return
        // console.log($(this).attr('id'));
        // $.ajax({
        //   method: 'GET',
        //   url: 'http://139.9.143.69:8001/materials/' + $(this).attr('id'),
        //   success: function (res) {
        //     console.log(res);
        //   }
        // })

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


});