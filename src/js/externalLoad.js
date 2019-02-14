jQuery(function ($) {
    let autoLogin = localStorage['autoLogin'];
    let header = new Promise((resolve, reject) => {
        $("#header").load("html/header.html", function () {
            resolve()
        });
    })
    $("#footer").load("html/footer.html");
    let pf_right = new Promise((resolve, reject) => {
        $("#pf_right").load("html/pf_right.html", function () {
            resolve()
        });
    })
    // 转跳
    header.then(redirects)
    //加载完头部后 判断
    function redirects() {
        isLogin()
    }
    //右侧漂浮
    pf_right.then(aaa)

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
        $(window).scroll(function(){
            var i = $(this).scrollTop()
            if(i>313){
                $pf_right_6.fadeIn(1000);
            }else{
                $pf_right_6.fadeOut(1000);
            }
        })
    }

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

})