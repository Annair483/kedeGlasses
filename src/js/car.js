jQuery(function ($) {
    let $product_item = $('.product_item');
    isLogin()
    //ajax请求获取购物车商品信息
    addGodsAjax('', carGodsShow)
    //渲染商品
    function carGodsShow(res) {
        console.log(res)
        $.each(res, function (idx, item) {
            let html = ` <ul class="clearfix cart_product_ul"  data-oid="${item.oid}">
                            <li class="check">
                                <input type="checkbox">
                            </li>
                            <li class="product">
                                <div class="item_line_height" ><a href="/1/boshilunmt350.html"><img
                                            src="../${item.url}"
                                            alt="${item.godsName}"></a><label class="product_name"><a href="/1/boshilunmt350.html">${item.godsName}</a></label></div>
                            </li>
                            <li class="luminosity">
                            
                            </li>
                            <li class="quantity">
                                <div class="minus" val="id1_1_minus">-</div><input id="input106c2746-c9ef-472c-a2a5-cf3ba1adf54c"
                                    value="${item.qty}" class="quantity_input" type="text" currentnum="1" >
                                <div class="plus" val="id1_1_plus">+</div>
                                <div class="quantity_limit"></div>
                            </li>
                            <li class="price">
                                <div class="item_line_height" >￥${item.price}</div>
                            </li>
                            <li class="subtotal">
                                <div class="item_line_height" >￥${(item.qty*item.price).toFixed(2)}</div>
                            </li>
                            <li class="operation">
                                <div class="item_line_height" >
                                    <p><a href="javascript:void(0);" identity="fav30458c5c-9eb7-4d9d-a74e-e729ea6fd189">加入收藏夹</a></p>
                                    <p><a href="javascript:void(0);">删除</a></p>
                                </div>
                            </li>
                        </ul>`
            $product_item.append(html)
        })
        // 渲染后给加减号增加点击事件
        add_subtract()
    }
    //点击加减改变数量
    function add_subtract() {
        let $quantity = $('.quantity');
        $quantity.on('click', '.plus', function () {
            var val = $(this).prev().val();
            val++; //自增一
            if (val >= 100) { //库存量
                val = 100;
            }
            $(this).prev().val(val); //赋值
            changeQtyAjax(this, {'qty':val});
        });

        //减数量
        $quantity.on('click', '.minus', function () {
            var val = $(this).next().val();
            val--; //自增一
            if (val <= 1) { //库存量
                val = 1;
            }
            $(this).next().val(val); //赋值
            changeQtyAjax(this, {'qty':val});
        });
    }
    //修改数量ajax请求
    //ele为类名  obj为除了默认参数外的参数，默认参数为oid
    function changeQtyAjax(ele, obj) {
        // 获取商品对应的oid
        let oid = $(ele).closest('.cart_product_ul').attr('data-oid');
        var defaults = {
            oid
        }
        var data = Object.assign({}, defaults, obj);
        $.ajax({
            type: 'GET',
            url: '../api/changeOrder.php',
            data,
            success(res) {
                if(!res){
                    alert('商品修改失败')
                }
            }
        })
    }

})