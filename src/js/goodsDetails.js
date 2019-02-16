jQuery(function ($) {
    var obj = {};
    var MessageArr = location.search.slice(1).split('&');
    $.each(MessageArr, function (idx, item) {
        var arr = item.split('=');
        obj[arr[0]] = arr[1]
    })
    var {
        gid
    } = obj;
    var {
        fromName
    } = obj;
    let $bigImg = $('.jqzoom');
    let $slistLi = $(".slist li")
    let $smallImg = $slistLi.find('img');

    //获取商品信息ajax请求
    function godsRequest() {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '../api/goodsDetails.php',
            data: {
                gid,
                fromName
            },
            success(res) {
                // console.log(res)
                godsShow(res)
                changeImg()
                zoom()
                fly(res.url, '.details_shoppingbtn')
            }
        })
    }
    //渲染数据
    function godsShow(res) {
        let $godsName = $(".details_top_name span");
        let $pic = $(".message_price");
        let $markPic = $(".message_price_kd b");
        let $number = $(".message_price_save");

        $godsName.html(res.godsName);
        $pic.html(`￥${res.price}`);
        $markPic.html(`￥${res.marketPrice}`);
        $number.eq(0).html(`${res.number}积分`);
        $number.eq(1).html(res.integral);

        $bigImg.attr({
            'src': `../${res.bigUrl1}`,
            'data-big': `../${res.bigUrl1}`
        })
        $.each($smallImg, function (idx, item) {
            let i = idx + 1;
            $(item).attr({
                'src': `../${res[`bigUrl${i}`]}`,
                'data-big': `../${res[`bigUrl${i}`]}`
            })
        })
    }
    //tab切换smallImg到bigIMg
    function changeImg() {
        $slistLi.on('mouseenter', function () {
            let thiser = $(this);
            let img = thiser.find('img');
            thiser.addClass('hover').siblings().removeClass('hover');
            $bigImg.attr({
                'src': img.attr('src'),
                'data-big': img.attr('data-big')
            });
            return false;
        })

    }
    //放大镜插件
    function zoom() {
        $('.details_top_img').lxzoom({
            'width': 400,
            'height': 400,
            'gap': 10
        });
    }

    addGodsBtn(gid);
    godsRequest();
    //飞入购物车
    // 传图片路径，和飞入按钮对象
    function fly(src, ele) {
        let $addcart = $(ele);
        $addcart.on('click', function () {
            var $flyDiv = $(`<img src="../${src}" width="32" height="32">`);
            $flyDiv.css({
                'position': 'absolute',
                'left': $addcart.offset().left,
                'top': $addcart.offset().top,
                'z-index': '200'
            })
            $flyDiv.appendTo($addcart);
            var $my_cart = $('.pf_right_5');
            $flyDiv.animate({
                'left': $my_cart.offset().left,
                'top': $my_cart.offset().top
            }, 500, function () {
                $flyDiv.remove()
            })
            return false;
        })
    }
})