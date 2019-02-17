jQuery(function ($) {
    let $product_item = $('.product_item');
    let $allCheckBtn = $(".allCheck");
    let $cart_product_ul;
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
                                    <p><a href="javascript:void(0);" class="delBtn">删除</a></p>
                                </div>
                            </li>
                        </ul>`
            $product_item.append(html)
        })
        $cart_product_ul = $('.cart_product_ul');
        console.log($cart_product_ul)
        // 渲染后给加减号增加点击事件
        add_subtract();
    }
    //点击加、减、删除、全选按钮，修改商品数量
    function add_subtract() {
        $cart_product_ul.on('click', '.plus', function () {
            var val = $(this).prev().val();
            val++; //自增一
            if (val >= 100) { //库存量
                val = 100;
            }
            $(this).prev().val(val); //赋值
            changeQtyAjax(this, {
                'qty': val
            });
            goodTotal($(this));
            NumPrice();
        });

        //减数量
        $cart_product_ul.on('click', '.minus', function () {
            var val = $(this).next().val();
            val--; //自增一
            if (val <= 1) { //库存量
                val = 1;
            }
            $(this).next().val(val); //赋值
            changeQtyAjax(this, {
                'qty': val
            });
            goodTotal($(this));
            NumPrice();
        });
        //删除当行
        $cart_product_ul.on('click', '.delBtn', function () {
            $(this).closest($cart_product_ul).remove();
            changeQtyAjax(this, {
                del: 1
            });
            // update(); //判断是否删完了
            NumPrice();
        });
        //手动输入
        $cart_product_ul.on('change', '.quantity_input', function () {
            var val = $(this).val();
            changeQtyAjax(this, {
                'qty': val
            });
            goodTotal($(this));
            NumPrice();
        });
        // 选中单行
        $cart_product_ul.on('click', ':checkbox', function () {
            NumPrice();
        });
        // 全选、不选
        //attr绑定属性     表单某些属性是有行为的：这种属性需要用prop去绑定
        $allCheckBtn.on('click', function () {
            //商品按钮属性跟随全选按钮属性
            $cart_product_ul.find(':checkbox').prop('checked', $(this).prop('checked'));
            NumPrice();
        });
    }
    //小计的运算：单价*数量
    function goodTotal(ele) {
        //找单价
        var price = ele.parent().next().find('div').text().substring(1) * 1;

        //找数量
        var num = ele.parent().find('input').val() * 1;
        //		console.log(price,num);

        //小计=单价*数量
        var total = (price * num).toFixed(2);
        ele.parent().siblings('.subtotal').find('div').html('￥&nbsp;' + total); //设置值
        NumPrice();
    }

    //总数量和总价
    function NumPrice() {
        let $godsCheckBtn = $('.check');
        if ($product_item.find(':checked').length == $godsCheckBtn.length) {
            //所有商品被选中了，控制权限勾上
            $allCheckBtn.prop('checked', 'checked');
        } else {
            $allCheckBtn.prop('checked',false);
        }
        //		console.log(arr);

        var priceAll = 0; //总价
        var numAll = 0; //总数量
        $.each($product_item.find(':checked'), function (idx, item) {
            numAll += $(item).closest('.cart_product_ul').find('.quantity_input').val() * 1;
            priceAll += $(item).closest('.cart_product_ul').find('.subtotal div').text().substring(1) * 1;
        })
        console.log($product_item.find(':checked'))


        let $totalQty = $('#settlementQuantity');
        let $totalPic = $('#settlementTotalMoney');
        let _chuxiao = $('#settlementPromotionDeduction').html();
        let _quan = $('#settlementCouponDeduction').html();
        let $total = $('#settlementRealTotalMoney');
        $totalQty.html(numAll);
        $totalPic.html((priceAll).toFixed(2));
        $total.html(($totalPic.html() - _chuxiao - _quan).toFixed(2));
        if($total.html()<=0){
            $total.html('0.00')
        }
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
                if (!res) {
                    alert('商品修改失败')
                }
            }
        })
    }


})