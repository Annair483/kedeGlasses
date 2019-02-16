jQuery(function ($) {
    var uid;
    let autoLogin = localStorage['autoLogin'];
    // 底部加载
    $("#footer").load("../html/footer.html");
    //右侧漂浮加载
    $("#pf_right").load("../html/pf_right.html", function () {
        aaa();
        //头部加载
        $("#header").load("../html/header.html", function () {
            isLogin()
        });
    });
    // 左侧导航加载
    $(".classify_left").load("../html/leftNav.html", pullDownList);
    //进入页面前先判断是否为登录状态
    function isLogin() {
        if (autoLogin == 'yes') {
            let token = localStorage['token'];
            // 显示登录信息
            getUserMessage(token);
            // 渲染总商品数
            getUid()
        } else if (autoLogin == 'no') {
            let token = sessionStorage['token'];
            getUserMessage(token);
            getUid()
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
                    // setUid(res.content)
                }
            }
        })
    }
    //信息请求成功
    function loginMessage(res) {
        let $userMessage = $('#userTooleBarMemberStatus div');
        let $exit = $(".exit");
        $userMessage.eq(0).hide().siblings().show().find('span').html(res.content.uname)
        //点击退出
        $exit.click(function () {
            $userMessage.eq(1).hide().siblings().show();
            if (autoLogin == 'yes') {
                localStorage['token'] = '';
                Cookie.delCookie('uid', '/')

            } else if (autoLogin == 'no') {
                sessionStorage['token'] = '';
                Cookie.delCookie('uid', '/')
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

    // function getUid(gid) {
    //     //获取uid
    //     uid = Cookie.getCookie('uid')
    //     // 判断是否登录
    //     console.log(uid)
    //     if (uid) {
    //         addGodsAjax('', godsTotalQty);
    //         addGodsBtn(gid)
    //     } else {
    //         let $godsTotalQty = $('#RightContactFloatContainerCartQuantity,#menu_tab_cart');
    //         $godsTotalQty.html(0);
    //     }
    // }

    // //ajax的cb 用户商品总件数
    // function godsTotalQty(res) {
    //     let $godsTotalQty = $('#RightContactFloatContainerCartQuantity,#menu_tab_cart');
    //     let html = 0;
    //     $.each(res, function (idx, item) {
    //         html += item.qty * 1
    //     })
    //     $godsTotalQty.html(html);
    //     // $godsTotalQty.click(function(){
    //     //     location.href = ''
    //     // })
    // }
    // //获取用户购物车商品信息ajax
    // function addGodsAjax(obj, cb) {
    //     var defaults = {
    //         uid
    //     }
    //     var data = Object.assign({}, defaults, obj);
    //     console.log(obj)
    //     $.ajax({
    //         type: 'GET',
    //         dataType: 'json',
    //         url: '../api/shoppingCart.php',
    //         data,
    //         success(res) {
    //             console.log(res)
    //             cb(res)
    //         }

    //     })
    // }
    //  //点击事件
    //  function addGodsBtn(gid) {
    //     let $details_shoppingbtn = $('.details_shoppingbtn');
    //     let $details_purchasebtn = $('.details_purchasebtn');
    //     //加入购物侧
    //     $details_shoppingbtn.click(function () {
    //         console.log(111)
    //         addGodsAjax({
    //             'qty': 1,
    //             gid
    //         }, godsTotalQty)
    //     })
    //     //立即购买
    //     $details_purchasebtn.click(function () {
    //         console.log(222)

    //         addGodsAjax({
    //             'qty': 1,
    //             gid
    //         }, godsTotalQty)
    //         // location.href = ''
    //     })

    // }
})