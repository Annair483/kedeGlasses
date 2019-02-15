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
    godsRequest()

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

    //点击事件
    function addGodsBtn() {
        let $details_shoppingbtn = $('.details_shoppingbtn');
        let $details_purchasebtn = $('.details_purchasebtn');
        //加入购物侧
        $details_shoppingbtn.click(function () {
            addGodsAjax({
                'qty': 1
            }, godsTotalQty)
        })
        //立即购买
        $details_purchasebtn.click(function () {
            addGodsAjax({
                'qty': 1
            }, godsTotalQty)
            // location.href = ''
        })

    }

})