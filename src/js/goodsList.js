jQuery(function ($) {
    let $classify_product_ul = $(".classify_product_ul");
    let $page = $('#page');
    let $classify_form = $('.classify_form s');
    let $classify_product_page_len = $('.classify_product_page_len');
    let showXl = true;
    let showJg = true;
    let $classify_product_sort = $('.classify_product_sort');
    var currentPage = 1;
    var qty = 60;
    var totalPage;

    godsRequest();
    //请求商品数据，默认排序
    function godsRequest(obj) {
        var defaults = {
            currentPage,
            qty
        }
        var data = Object.assign({}, defaults, obj);
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '../api/goodsList.php',
            data,
            success(res) {
                //清空商品 和分页
                $classify_product_ul.html('');
                $page.html('');
                currentPage = res.currentPage;
                produst(res.data);
                page(res);
                tabPage(res);
                locations(res);
            }
        })
    }
    //飞入购物车
    // 传图片路径，和飞入按钮对象
    function fly(ele) {
        console.log(111)
        let $addcart = $(ele);
        $addcart.on('click', function () {
            var $flyDiv = $(`<img src="../${$(this).attr('imgSrc')}" width="32" height="32">`);
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
    //产品渲染
    function produst(res) {
        $.each(res, function (idx, item) {
            let html = `<li data-gid="${item.gid}" data-fromName="goodslist">
                            <a href="#" target="_blank">
                                <img class="imgGods" alt="${item.godsName}" src="../${item.url}"></a>
                            <p class="classify_price">
                                <span><label>￥</label>${item.price}</span>
                            </p>
                            <p class="classify_name">
                                <a href="#" target="_blank" title="${item.godsName}">
                                ${item.godsName}</a>
                            </p>
                            <p class="classify_sales">每满299减30
                            </p>
                            <p class="classify_comment wide_f_hot_level">
                                <i class="level_9"></i>
                                <span>有<label><a target="_blank" href="#">${item.commentQty}</a></label>条评论</span>
                            </p>
                            <p class="classify_corner">
                            </p>
                            <p class="classify_btn">
                                <span imgSrc="../${item.url}" ><i class="classify_shopping"></i>加入购物车</span>
                                <a><span><i class="classify_collect"></i>收藏</span><label><i class="classify_collect"></i>已收藏</label></a>
                            </p>
                        </li>`
            $classify_product_ul.append(html);
        })
        console.log($('.classify_btn span'))
        fly($('.classify_btn span'))

    }
    //分页渲染
    function page(res) {
        //总页数
        totalPage = Math.ceil(res.len / res.qty);
        for (let i = 1; i <= totalPage; i++) {
            let $li = $('<li/>');
            $li.html(i);
            $page.append($li);
            if (i == res.currentPage) {
                $li.addClass("classify_active");
            }
        }
        $classify_form.html(totalPage);
        //右上角小页数
        $classify_product_page_len.html(`<s>${res.currentPage}</s>/${totalPage}`)
    }
    //点击分页页数切换分页
    //给点击了排序的按钮加一个类名
    //切换分页的时候根据按钮是否有类名，在排序
    function tabPage() {
        let $pageLi = $page.find('li');
        $pageLi.click(function () {
            //获取点击的页数
            currentPage = $(this).html();
            judgeSort()
        })
    }
    //判断是否升降序
    function judgeSort() {
        switch (true) {
            case $classify_product_sort.filter('.on').attr('id') == 'sort_xl':
                showXl = true;
                xlSort();
                break;
            case $classify_product_sort.filter('.on').attr('id') == 'sort_jg':
                showJg = true;
                jgSort()
                break;
            case $classify_product_sort.filter('.on_l').attr('id') == 'sort_xl':
                showXl = false;
                xlSort();
                break;
            case $classify_product_sort.filter('.on_l').attr('id') == 'sort_jg':
                showJg = false;
                jgSort()
                break;
            default:
                zhSort()
        }
    }
    //上下页按钮切换切换
    PrevNext()

    function PrevNext() {
        let $prev = $(".classify_prev,.classify_product_page_prev");
        let $next = $(".classify_next,.classify_product_page_next");
        $prev.click(function (e) {
            if (currentPage > 1) {
                currentPage--;
                judgeSort()
            }
        })
        $next.click(function (e) {
            if (currentPage < totalPage) {
                currentPage++;
                judgeSort()
            }
        })
    }
    //确认按钮转跳分页
    skipPage();

    function skipPage() {
        let $classify_pager_btn = $(".classify_pager_btn");
        let $classify_input = $(".classify_input");
        $classify_pager_btn.click(function () {
            let _classify_input = $classify_input.val().trim() * 1;
            if (Number.isInteger(_classify_input) && _classify_input >= 1 && _classify_input <= totalPage) {
                currentPage = _classify_input;
                judgeSort();
            }
        })
    }
    //商品排序
    godsSort()

    function godsSort() {
        //排序按钮绑定点击事件
        $classify_product_sort.click(function () {
            //获取当前页数
            console.log(currentPage)
            //获取按钮下标
            let i = $(this).index();
            if (i == 0) {
                zhSort(this);
            } else if (i == 1) {
                xlSort(this);
            } else if (i == 2) {
                jgSort(this);
            }
        })
    }
    //综合排序
    function zhSort(ele) {
        $(ele).siblings('a').find('i').css('background-position', '0px -917px');
        godsRequest();
    }
    //销量排序
    function xlSort(ele) {
        //根据按钮的true、false判断升降序
        if (showXl) {
            var obj = {
                'fieldName': 'sell',
                'sort': 'desc'
            }
            $(ele).find('i').css('background-position', '0px -917px');
            $(ele).siblings('a').find('i').css('background-position', '0px -917px');
            $(ele).addClass('on').removeClass('on_l').siblings().removeClass('on on_l');
        } else {
            var obj = {
                'fieldName': 'sell'
            }
            $(ele).find('i').css('background-position', '-230px -917px');
            $(ele).siblings('a').find('i').css('background-position', '0px -917px');
            $(ele).addClass('on_l').removeClass('on').siblings().removeClass('on_l on');

        }
        godsRequest(obj);
        //取反
        showXl = !showXl;
    }
    //价格排序
    function jgSort(ele) {
        if (showJg) {
            var obj = {
                'fieldName': 'price',
                'sort': 'desc'
            }
            $(ele).find('i').css('background-position', '0px -917px');
            $(ele).siblings('a').find('i').css('background-position', '0px -917px');
            $(ele).addClass('on').removeClass('on_l').siblings().removeClass('on on_l');
        } else {
            var obj = {
                'fieldName': 'price'
            }
            $(ele).find('i').css('background-position', '-230px -917px');
            $(ele).siblings('a').find('i').css('background-position', '0px -917px');
            $(ele).addClass('on_l').removeClass('on').siblings().removeClass('on_l on');
        }
        godsRequest(obj);
        showJg = !showJg;
    }

    //点击商品传参id到详情页
    function locations(res) {
        $classify_product_ul.on('click', 'li', function () {
            var $gid = $(this).attr('data-gid');
            var $formName = $(this).attr('data-fromName')
            location.href = `goodsDetails.html?gid=${$gid}&fromName=${$formName}`;
            return false;
        })
    }
})