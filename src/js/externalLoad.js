jQuery(function ($) {
    let autoLogin = localStorage['autoLogin'];
    //头部加载
    $("#header").load("../html/header.html", isLogin);
    // 底部加载
    $("#footer").load("../html/footer.html");
    //右侧漂浮加载
    $("#pf_right").load("../html/pf_right.html", aaa);
    // 左侧导航加载
    $(".classify_left").load("../html/leftNav.html", pullDownList);
    //进入页面前先判断是否为登录状态
    function isLogin() {
        if (autoLogin == 'yes') {
            let token = localStorage['token'];
            getUserMessage(token);
        } else if (autoLogin == 'no') {
            let token = sessionStorage['token'];
            getUserMessage(token);
        }
    }
    //获取用户信息
    function getUserMessage(token) {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '../api/getUserMessage.php',
            data: {
                'token': token
            },
            success(res) {
                if (!res.code) {
                    loginMessage(res)
                }
            }
        })
    }
    //信息请求成功
    function loginMessage(res) {
        console.log(res)
        let $userMessage = $('#userTooleBarMemberStatus div');
        let $exit = $(".exit");
        $userMessage.eq(0).hide().siblings().show().find('span').html(res.content.uname)
        //点击退出
        $exit.click(function () {
            $userMessage.eq(1).hide().siblings().show();
            if (autoLogin == 'yes') {
                localStorage['token'] = '';

            } else if (autoLogin == 'no') {
                sessionStorage['token'] = '';
            }
        })
    }
    //右侧漂浮
    function aaa() {
        let $pf_right_4 = $('.pf_right_4');
        let $pf_right_3 = $('.pf_right_3');
        let $pf_ygs = $('.pf_ygs');
        let $pf_weixin = $('.pf_weixin');
        $pf_right_4.hover(function () {
            $pf_weixin.css('display', 'block');
        }, function () {
            $pf_weixin.css('display', 'none');
        })
        $pf_right_3.hover(function () {
            $pf_ygs.css('display', 'block');
        }, function () {
            $pf_ygs.css('display', 'none');
        })
        let $pf_right_6 = $('.pf_right_6');
        $pf_right_6.on('click', function () {
            $('html,body').animate({
                scrollTop: ($($(this).attr('href')).offset().top - 50)
            }, 1000);
        })
        $(window).scroll(function () {
            var i = $(this).scrollTop()
            if (i > 313) {
                $pf_right_6.fadeIn(1000);
            } else {
                $pf_right_6.fadeOut(1000);
            }
        })
    }
    //左侧下拉列表


    function pullDownList() {
        let $tree1 = $(".classify_tree1");
        let $tree2 = $(".classify_tree2");
        let $tree1Li = $tree1.find('li');
        let $tree2Li = $tree2.find('li');
        $tree1Li.click(function () {
            $(this).toggleClass('on');
            $(this).find('.classify_tree2').stop().slideToggle(300)
            return false;
        })
        $tree2Li.click(function () {
            if (!$(this).hasClass('noChild')) {
                $(this).find('.classify_tree3').stop().slideToggle(300)
            }
        })
    }
})