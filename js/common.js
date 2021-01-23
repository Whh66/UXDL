  $(function() {
    // 验证登录状态
    $.ajax({
            method: 'GET',
            url: 'http://139.9.143.69:8001/users/info',
            headers: {
                uid: localStorage.getItem('uid')
            },
            complete: function(res) {
                // console.log(res.status);
                sessionStorage.setItem('status', res.status)
                if (res.status === 401) {
                    // 1.清空本地存储中的 uid
                    localStorage.removeItem('uid')
                    $('.datails-download').on('click', '.classification', function(e) {
                        if ($(this).html() !== '登陆') {
                            console.log($(this).html());
                            layer.msg('请登陆', {
                                time: 1000
                            });
                        }
                        e.preventDefault()
                            // $('.nav-box').css('opacity', 0)
                        $('#login').click()
                    })
                } else {
                    // 隐藏未登录盒子
                    $('.nav .right').hide()
                        // 显示登录盒子
                    $('.user').show()
                }
            },
        })
        // 退出登录
    $('.exit').on('click', function() {
        // 提示用户是否确认退出
        layer.confirm('确定退出登录？', {
            icon: 3,
            title: '提示'
        }, function(index) {
            // 1.清空本地存储中的 uid
            localStorage.removeItem('uid')
                // 2.刷新页面
            location.reload()

            // 关闭 confirm 询问框
            layer.close(index);
        });
    })

    //  公共区域下载记录
    $('#download_history').on('click', function() {
        // console.log(12);
        // sessionStorage.setItem("from", "pageA");
        location.href = 'centre.html?history=download'
    })

    // 点击公共区域下载记录按钮  跳转到记录
    // window.onload = function () {
    //   var from = sessionStorage.getItem("from");
    //   if (from == 'pageA') {
    //     // 要触发的点击事件  $('#xxx').click()
    //     $('#history').click()
    //     sessionStorage.setItem("from", ""); //销毁 from 防止在b页面刷新 依然触发$('#xxx').click()
    //   }
    // }

    var layer = layui.layer
    var form = layui.form
    var layer = layui.layer
        //1. 点击登录注册按钮显示对应页面
    $('body').on('click', '#login', function() {
        $('body').css('overflow', 'hidden')
        $('#layui-layer-shade').show()
        $('#login-box2').show()
    })
    $('body').on('click', '#register', function() {
        $('body').css('overflow', 'hidden')
        $('#layui-layer-shade').show()
        $('#register-box1').show()
    })
    $('body').on('click', '.login', function() {
        $('body').css('overflow', 'hidden')
        $('#layui-layer-shade').show()
        $('#login-box2').show()
    })
    $('body').on('click', '.register', function() {
            $('body').css('overflow', 'hidden')
            $('#layui-layer-shade').show()
            $('#register-box1').show()
        })
        // 点击遮罩层隐藏登录注册盒子
    $('body').on('click', '#layui-layer-shade', function() {
        // $('.nav-box').css('opacity', 1)
        // 表单重置
        $('#tobe>form[style="display: block;"]')[0].reset();

        $('body').css('overflow', 'visible')
        $('#layui-layer-shade').hide()
        $('#tobe>form[style="display: block;"]').hide()
    })

    // 2.1点击密码验证码登陆的切换
    $('#tab-passwords1').on('click', function() {
        $('#login-box2').show().siblings().hide()
    })
    $('#tab-passwords2').on('click', function() {
            $('#login-box1').show().siblings().hide()
        })
        // 2.2点击密码验证码注册的切换
    $('#tab-passwords3').on('click', function() {
        $('#register-box2').show().siblings().hide()
    })
    $('#tab-passwords4').on('click', function() {
            $('#register-box1').show().siblings().hide()
        })
        // 2.3注册跳到登陆，登陆跳到注册
        // $('#forget-link1').on('click', function() {
        //     $('#register-box1').show().siblings().hide()
        // })
    $('#forget-link2').on('click', function() {
        $('#register-box1').show().siblings().hide()
    })
    $('#forget-link3').on('click', function() {
        $('#login-box2').show().siblings().hide()
    })
    $('#forget-link4').on('click', function() {
            $('#login-box2').show().siblings().hide()
        })
        // 2.4登陆跳转到找回密码页面
    $('#to-findpsw1').on('click', function() {
        $('#if-forget').show().siblings().hide()
        console.log(1);
    })
    $('#to-findpsw2').on('click', function() {
        $('#if-forget').show().siblings().hide()
    })

    // 3手机号码和验证码密码自定义验证规则
    form.verify({
            // 手机号码规则
            phonenumber: [/^\d{1,20}$/, '请输入正确手机号码'],
            // 密码规则
            // psw: [/^\d{1,20}$/, '请输入正确的密码'],
            psw2: [/^[a-zA-Z0-9]{6,8}$/, '请输入正确的密码'],
            // 校验两次密码是否一致的规则
            repwd: function(value) {
                // 通过形参拿到的是确认密码框中的内容
                // 还需要拿到密码框中的内容
                // 然后进行一次等于的判断
                // 如果判断失败,则return一个提示消息即可
                var pwd = $('.reg-box [name=password]').val()
                if (pwd !== value) {
                    return '两次密码不一致！'
                }
            },
        })
        //4.1   input输入框超限提醒
    $('form input').on('keyup', function() {
            if (this.value.length == 20) {
                layer.open({
                    title: '提示！',
                    content: '输入已到上限',
                })
            }
        })
        //    4.2    按钮样式变化
    $('#login-box1').on('keyup', function(e) {
        var phone1 = $('.phone-ipt1').val()
        var psw1 = $('#psw1').val()
        if (phone1 != '' && psw1 != '') {
            $('#post-btn1').addClass('color-trans')
            $('#post-btn1').removeClass('layui-btn-disabled')
        }
    })
    $('#register-box1').on('keyup', function(e) {
        var phone2 = $('.phone-ipt2').val()
        var psw2 = $('#psw3').val()
        var psw5 = $('#regist-psw').val()
        if (phone2 != '' && psw2 != '' && psw5 != '') {
            $('#post-btn3').addClass('color-trans')
            $('#post-btn3').removeClass('layui-btn-disabled')
        }
    })
    $('#register-box2').on('keyup', function(e) {
        var phone3 = $('.phone-ipt3').val()
        var psw3 = $('#psw4').val()
        if (phone3 != '' && psw3 != '') {
            $('#post-btn4').addClass('color-trans')
            $('#post-btn4').removeClass('layui-btn-disabled')
        }
    })
    $('#if-forget').on('keyup', function(e) {
        var phone3 = $('.phone-ipt5').val()
        var psw3 = $('#psw5').val()
        if (phone3 != '' && psw3 != '') {
            $('#next-step').addClass('color-trans')
            $('#next-step').removeClass('layui-btn-disabled')
        }
    })

    // 5 手机验证码发送事件
    // 首先定义一个名为jishu的变量用来统计代表点击次数
    var jishu = 0
    var flag = 0
        // 5.1登陆1的验证码发送事件
    $('.send-to1').on('click', function(e) {
            var phone1 = $('.phone-ipt1').val()
            console.log(phone1)
            var count = 90
            var count60 = 60
            if (phone1 == '') {
                $(this).addClass('layui-btn-disabled')
                layer.open({
                    title: '提示！',
                    content: '请输入符合规范的手机号',
                })
            } else if (isNaN(phone1)) {
                $(this).addClass('layui-btn-disabled')
                layer.open({
                    title: '提示！',
                    content: '只允许输入纯数字！',
                })
            } else if (flag == 0) {
                if (jishu < 3) {
                    flag = 1
                    $('.send-to1').addClass('layui-btn-disabled')
                    console.log('点击了 ' + ++jishu + '次<br>')
                    layer.open({
                            title: '提示！',
                            content: '已发送验证码',
                        })
                        // 设置倒计时按钮样式
                    var interval = null //timer变量，控制时间
                    $('.send-to1').text(count + '秒倒计时')
                    var interval = setInterval(downset, 1000)

                    function downset() {
                        $('.send-to1').text(count + '秒倒计时')
                        $('.send-to1').addClass('color-trans')
                        $('.send-to1').addClass('layui-btn-disabled')
                        count--
                        if (count === -1) {
                            $('.send-to1').text('重发验证码')
                            clearInterval(interval)
                            $('.send-to1').removeClass('color-trans')
                            $('.send-to1').removeClass('layui-btn-disabled')
                            flag = 0
                        }
                    } //请求后台发送验证码 TODO
                    //ajax获取手机验证码
                    e.preventDefault()
                    $.ajax({
                        method: 'GET',
                        url: 'http://139.9.143.69:8001/oauth/msm/' + phone1,
                        success: function(res) {
                            console.log(res)
                        },
                    })
                } else if (jishu == 3) {
                    flag = 1
                    $('.send-to1').text(count60 + '后重发')
                    $('.send-to1').addClass('layui-btn-disabled')
                    var interval2 = null //timer变量，控制时间
                    var interval2 = setInterval(downset2, 1000)

                    function downset2() {
                        $('.send-to1').text(count60 + '秒倒计时')
                        count60--
                        if (count60 === -1) {
                            $('.send-to1').text('重发验证码')
                            clearInterval(interval2)
                            $('.send-to1').removeClass('layui-btn-disabled')
                            $('.send-to1').removeClass('color-trans')
                            flag = 0
                            jishu = 0
                        }
                    }
                }
            }
        })
        //5.2 注册1验证码
    $('.send-to2').on('click', function(e) {
            var phone2 = $('.phone-ipt2').val()
            console.log(phone2)
            var count = 90
            var count60 = 60
            if (phone2 == '') {
                $(this).addClass('layui-btn-disabled')
                layer.open({
                    title: '提示！',
                    content: '请输入符合规范的手机号',
                })
            } else if (isNaN(phone2)) {
                $(this).addClass('layui-btn-disabled')
                layer.open({
                    title: '提示！',
                    content: '只允许输入纯数字！',
                })
            } else if (flag == 0) {
                if (jishu < 3) {
                    flag = 1
                    $('.send-to2').addClass('layui-btn-disabled')
                    console.log('点击了 ' + ++jishu + '次<br>')
                    layer.open({
                            title: '提示！',
                            content: '已发送验证码',
                        })
                        // 设置倒计时按钮样式
                    var interval = null //timer变量，控制时间
                    $('.send-to2').text(count + '秒倒计时')
                    var interval = setInterval(downset, 1000)

                    function downset() {
                        $('.send-to2').text(count + '秒倒计时')
                        $('.send-to2').addClass('color-trans')
                        $('.send-to2').addClass('layui-btn-disabled')
                        count--
                        if (count === -1) {
                            $('.send-to2').text('重发验证码')
                            clearInterval(interval)
                            $('.send-to2').removeClass('color-trans')
                            $('.send-to2').removeClass('layui-btn-disabled')
                            flag = 0
                        }
                    } //请求后台发送验证码 TODO
                    //ajax获取手机验证码
                    e.preventDefault()
                    $.ajax({
                        method: 'GET',
                        url: 'http://139.9.143.69:8001/oauth/msm/' + phone2,
                        success: function(res) {
                            console.log(res)
                        },
                    })
                } else if (jishu == 3) {
                    flag = 1
                    $('.send-to2').text(count60 + '后重发')
                    $('.send-to2').addClass('layui-btn-disabled')
                    var interval2 = null //timer变量，控制时间
                    var interval2 = setInterval(downset2, 1000)

                    function downset2() {
                        $('.send-to2').text(count60 + '秒倒计时')
                        count60--
                        if (count60 === -1) {
                            $('.send-to2').text('重发验证码')
                            clearInterval(interval2)
                            $('.send-to2').removeClass('color-trans')
                            $('.send-to2').removeClass('layui-btn-disabled')
                            flag = 0
                            jishu = 0
                        }
                    }
                }
            }
        })
        // 5.3注册2验证码
    $('.send-to3').on('click', function(e) {
            var phone3 = $('.phone-ipt3').val()
            var count = 90
            var count60 = 60
            if (phone3 == '') {
                $(this).addClass('layui-btn-disabled')
                layer.open({
                    title: '提示！',
                    content: '请输入符合规范的手机号',
                })
            } else if (isNaN(phone3)) {
                $(this).addClass('layui-btn-disabled')
                layer.open({
                    title: '提示！',
                    content: '只允许输入纯数字！',
                })
            } else if (flag == 0) {
                if (jishu < 3) {
                    flag = 1
                    $('.send-to3').addClass('layui-btn-disabled')
                    console.log('点击了 ' + ++jishu + '次<br>')
                    layer.open({
                            title: '提示！',
                            content: '已发送验证码',
                        })
                        // 设置倒计时按钮样式
                    var interval = null //timer变量，控制时间
                    $('.send-to3').text(count + '秒倒计时')
                    var interval = setInterval(downset, 1000)

                    function downset() {
                        $('.send-to3').text(count + '秒倒计时')
                        $('.send-to3').addClass('color-trans')
                        $('.send-to3').addClass('layui-btn-disabled')
                        count--
                        if (count === -1) {
                            $('.send-to3').text('重发验证码')
                            clearInterval(interval)
                            $('.send-to3').removeClass('color-trans')
                            $('.send-to3').removeClass('layui-btn-disabled')
                            flag = 0
                        }
                    } //请求后台发送验证码 TODO
                    //ajax获取手机验证码
                    e.preventDefault()
                    $.ajax({
                        method: 'GET',
                        url: 'http://139.9.143.69:8001/oauth/msm/' + phone3,
                        success: function(res) {
                            console.log(res)
                        },
                    })
                } else if (jishu == 3) {
                    flag = 1
                    $('.send-to3').text(count60 + '后重发')
                    $('.send-to3').addClass('layui-btn-disabled')
                    var interval2 = null //timer变量，控制时间
                    var interval2 = setInterval(downset2, 1000)

                    function downset2() {
                        $('.send-to3').text(count60 + '秒倒计时')
                        count60--
                        if (count60 === -1) {
                            $('.send-to3').text('重发验证码')
                            clearInterval(interval2)
                            $('.send-to3').removeClass('layui-btn-disabled')
                            $('.send-to3').removeClass('color-trans')
                            flag = 0
                            jishu = 0
                        }
                    }
                }
            }
        })
        // 5.4找回密码验证码
    $('.send-to5').on('click', function(e) {
        // $('#layui-layer-shade').show();
        // $('#if-forget').hide();
        // $('#if-reset').show();
        var phone5 = $('.phone-ipt5').val()
        var count = 90
        var count60 = 60
        if (phone5 == '') {
            $(this).addClass('layui-btn-disabled')
            layer.open({
                title: '提示！',
                content: '请输入符合规范的手机号',
            })
        } else if (isNaN(phone5)) {
            $(this).addClass('layui-btn-disabled')
            layer.open({
                title: '提示！',
                content: '只允许输入纯数字！',
            })
        } else if (flag == 0) {
            if (jishu < 3) {
                flag = 1
                $('.send-to5').addClass('layui-btn-disabled')
                console.log('点击了 ' + ++jishu + '次<br>')
                layer.open({
                        title: '提示！',
                        content: '已发送验证码',
                    })
                    // 设置倒计时按钮样式
                var interval = null //timer变量，控制时间
                $('.send-to5').text(count + '秒倒计时')
                var interval = setInterval(downset, 1000)

                function downset() {
                    $('.send-to5').text(count + '秒倒计时')
                    $('.send-to5').addClass('color-trans')
                    $('.send-to5').addClass('layui-btn-disabled')
                    count--
                    if (count === -1) {
                        $('.send-to5').text('重发验证码')
                        clearInterval(interval)
                        $('.send-to5').removeClass('color-trans')
                        $('.send-to5').removeClass('layui-btn-disabled')
                        flag = 0
                    }
                } //请求后台发送验证码 TODO
                //ajax获取手机验证码
                e.preventDefault()
                $.ajax({
                    method: 'GET',
                    url: 'http://139.9.143.69:8001/oauth/msm/' + phone5,
                    data: {
                        phone: phone5,
                    },
                    success: function(res) {
                        console.log(res)
                        localStorage.setItem('uid', res.data)
                    },
                })
            } else if (jishu == 3) {
                flag = 1
                $('.send-to5').text(count60 + '后重发')
                $('.send-to5').addClass('layui-btn-disabled')
                var interval2 = null //timer变量，控制时间
                var interval2 = setInterval(downset2, 1000)

                function downset2() {
                    $('.send-to5').text(count60 + '秒倒计时')
                    count60--
                    if (count60 === -1) {
                        $('.send-to5').text('重发验证码')
                        clearInterval(interval2)
                        $('.send-to5').removeClass('layui-btn-disabled')
                        $('.send-to5').removeClass('color-trans')
                        flag = 0
                        jishu = 0
                    }
                }
            }
        }
    })

    // 6登陆注册提交发送数据post
    // 6.1登陆1提交数据
    $('#post-btn1').on('click', function(e) {
            var phone1 = $('.phone-ipt1').val()
            var psw1 = $('#psw1').val()
            if (phone1 !== '' && psw1 !== '') {
                $(this).addClass('bgc-change')
                $(this).removeClass('layui-btn-disabled')
                e.preventDefault()
                $.ajax({
                    method: 'POST',
                    url: 'http://139.9.143.69:8001/oauth/login/phone',
                    data: {
                        phone: $('.phone-ipt1').val(),
                        code: $('#psw1').val(),
                    },
                    success: function(res) {
                        console.log(res)
                        if (res.code !== 0) {
                            return layer.msg('登验证码输入错误')
                        }
                        layer.msg('登录成功')
                            // 将登录成功得到的 token 字符串，保存到 localStorage 中
                        localStorage.setItem('uid', res.data)
                            // 跳转到后台主页
                        location.href = ''
                    },
                })
            }
        })
        // 6.2登陆2提交数据
    $('#post-btn2').on('click', function(e) {
            var phone2 = $('#phone-input').val()
            var psw2 = $('#psw-input').val()
            if (phone2 != '' && psw2 != '') {
                $(this).addClass('bgc-change')
                $(this).removeClass('layui-btn-disabled')
                e.preventDefault()
                $.ajax({
                    method: 'POST',
                    url: 'http://139.9.143.69:8001/oauth/login',
                    data: {
                        phone: phone2,
                        password: psw2
                    },
                    success: function(res) {
                        if (res.code !== 0) {
                            return layer.msg('登录失败！')
                        }
                        layer.msg('登陆成功！')
                            // 将登录成功得到的 token 字符串，保存到 localStorage 中
                        localStorage.setItem('uid', res.data)
                            // 跳转到后台主页
                        location.href = ''
                    },
                })
            }
        })
        // 6.3注册1提交数据
    $('#post-btn3').on('click', function(e) {
            var phone3 = $('.phone-ipt2').val()
            console.log(phone3)
            var psw3 = $('#psw3').val()
            console.log(psw3)
            var setname = $('#regist-psw').val()
            console.log(setname)
            if (phone3 != '' && psw3 != '' && setname != '') {
                $(this).addClass('bgc-change')
                $(this).removeClass('layui-btn-disabled')
                e.preventDefault()
                $.ajax({
                    method: 'POST',
                    url: 'http://139.9.143.69:8001/oauth/register',
                    data: {
                        phone: $('.phone-ipt2').val(),
                        code: $('#psw3').val(),
                        password: $('#regist-psw').val(),
                    },
                    success: function(res) {
                        if (res.code !== 0) {
                            return layer.msg('注册失败')
                        }
                        layer.msg('注册成功！')
                            // 将登录成功得到的 token 字符串，保存到 localStorage 中
                        localStorage.setItem('uid', res.data)
                            // 跳转到后台主页
                        location.href = ''
                    },
                })
            }
        })
        // 6.3注册2提交数据
    $('#post-btn4').on('click', function(e) {
        var phone4 = $('.phone-ipt3').val()
        var psw4 = $('#psw4').val()
        if (phone4 != '' && psw4 != '') {
            $(this).addClass('bgc-change')
            $(this).removeClass('layui-btn-disabled')
            e.preventDefault()
            $.ajax({
                method: 'POST',
                url: 'http://139.9.143.69:8001/oauth/login',
                data: $(this).serialize(),
                success: function(res) {
                    if (res.code !== 0) {
                        return layer.msg('登录失败！')
                    }
                    layer.msg('登录成功！')
                        // 将登录成功得到的 token 字符串，保存到 localStorage 中
                    localStorage.setItem('uid', res.data)
                        // 跳转到后台主页
                    location.href = ''
                },
            })
        }
    })

    // 7找回密码提交数据,跳转至重置盒子
    $('#if-forget').on('click', function(e) {
        var phone5 = $('.phone-ipt5').val()
        var psw5 = $('#psw5').val()
        if (phone5 != '' && psw5 != '') {
            $('#layui-layer-shade').show()
            $('#if-forget').hide()
            $('#if-reset').show()
            var newpsw = $('#new-psw').val()
            var renewpsw = $('#re-newpsw').val()
            if (newpsw === renewpsw) {
                e.preventDefault()
                $.ajax({
                    method: 'POST',
                    url: 'http://139.9.143.69:8001/oauth/pwd',
                    data: {
                        phone: phone5,
                        code: psw5,
                        password: renewpsw,
                    },
                    success: function(res) {
                        if (res.code !== 0) {
                            return layer.msg('登录失败！')
                        }
                        layer.msg('登录成功！')
                            // 将登录成功得到的 token 字符串，保存到 localStorage 中
                        localStorage.setItem('uid', res.data)
                            // 跳转到后台主页
                        location.href = ''
                    },
                })
            }
        }
    })
})