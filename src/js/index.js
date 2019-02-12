jQuery(function ($) {
    $("#header").load("html/header.html")
    $("#footer").load("html/footer.html");
    let $userTooleBarMemberStatus = $("#userTooleBarMemberStatus");

    let pf_right = new Promise((resolve, reject) => {
        $("#pf_right").load("html/pf_right.html", function () {
            resolve()
        });
    })
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
    }
   
})