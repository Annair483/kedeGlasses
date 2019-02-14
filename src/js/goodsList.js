jQuery(function ($) {
    let $classify_product_ul = $(".classify_product_ul");
    let $page = $('#page');
    let $classify_form = $('.classify_form s');
    let $classify_product_page_len = $('.classify_product_page_len');
    let showXl = true;
    let showJg = true;
    let $classify_product_sort = $('.classify_product_sort');
    godsRequest();
    //请求商品数据，默认排序
    function godsRequest(obj) {
        var defaults = {
            'qty': 60,
            'currentPage': 1,
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
                produst(res.data);
                page(res);
                tabPage()
            }
        })
    }
    //产品渲染
    function produst(res) {
        $.each(res, function (idx, item) {
            let html = `<li data-gid="${item.gid}">
                            <a href="#" target="_blank">
                                <img alt="${item.godsName}" src="../${item.url}"></a>
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
                                <span><i class="classify_shopping"></i>加入购物车</span>
                                <a><span><i class="classify_collect"></i>收藏</span><label><i class="classify_collect"></i>已收藏</label></a>
                            </p>
                        </li>`
            $classify_product_ul.append(html);
        })
    }
    //分页渲染
    function page(res) {
        //总页数
        var totalPage = Math.ceil(res.len / res.qty);
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
    //切换分页
    //给点击了排序的按钮加一个类名
    //切换分页的时候根据按钮是否有类名，在排序
    function tabPage() {
        let $pageLi = $page.find('li');
        $pageLi.click(function () {
            $(this).addClass('classify_active').siblings().removeClass('classify_active');
            //获取当前页数
            let currentPage = $('#page li').filter('.classify_active').html();
            console.log(currentPage)
            switch (true) {
                case $classify_product_sort.filter('.on').attr('id') == 'sort_xl':
                    showXl = true;
                    xlSort(this, currentPage);
                    break;
                case $classify_product_sort.filter('.on').attr('id') == 'sort_jg':
                    showJg = true;
                    jgSort(this, currentPage)
                    break;
                case $classify_product_sort.filter('.on_l').attr('id') == 'sort_xl':
                    showXl = false;
                    xlSort(this, currentPage);
                    break;
                case $classify_product_sort.filter('.on_l').attr('id') == 'sort_jg':
                    showJg = false;
                    jgSort(this, currentPage)
                    break;
                default:
                    zhSort(this, currentPage)
            }
        })
        //上下页按钮切换切换
        let $prev = $(".classify_prev,.classify_product_page_prev");
        let $next = $(".classify_next,.classify_product_page_next")
    }

    //商品排序
    sort()

    function sort() {
        //排序按钮绑定点击事件
        $classify_product_sort.click(function () {
            //获取当前页数
            let currentPage = $('#page li').filter('.classify_active').html();
            //获取按钮下标
            let i = $(this).index();
            if (i == 0) {
                zhSort(this, currentPage);
            } else if (i == 1) {
                xlSort(this, currentPage);
            } else if (i == 2) {
                jgSort(this, currentPage);
            }
        })
    }
    //综合排序
    function zhSort(ele, currentPage) {
        //创建公共参数
        let obj = {
            'qty': 60,
            currentPage,
        };
        $(ele).siblings('a').find('i').css('background-position', '0px -917px');
        godsRequest(obj);
    }
    //销量排序
    function xlSort(ele, currentPage) {
        //创建公共参数
        let obj = {
            'qty': 60,
            currentPage,
        };
        let obj2;
        //根据按钮的true、false判断升降序
        if (showXl) {
            obj2 = {
                'fieldName': 'sell',
                'sort': 'desc'
            }
            $(ele).find('i').css('background-position', '0px -917px');
            $(ele).siblings('a').find('i').css('background-position', '0px -917px');
            $(ele).addClass('on').removeClass('on_l').siblings().removeClass('on on_l');
        } else {
            obj2 = {
                'fieldName': 'sell'
            }
            $(ele).find('i').css('background-position', '-230px -917px');
            $(ele).siblings('a').find('i').css('background-position', '0px -917px');
            $(ele).addClass('on_l').removeClass('on').siblings().removeClass('on_l on');

        }
        //合并对象在传参
        obj = Object.assign({}, obj2, obj);
        godsRequest(obj);
        //取反
        showXl = !showXl;
    }
    //价格排序
    function jgSort(ele, currentPage) {
        //创建公共参数
        let obj = {
            'qty': 60,
            currentPage,
        };
        let obj2;
        if (showJg) {
            obj2 = {
                'fieldName': 'price',
                'sort': 'desc'
            }
            $(ele).find('i').css('background-position', '0px -917px');
            $(ele).siblings('a').find('i').css('background-position', '0px -917px');
            $(ele).addClass('on').removeClass('on_l').siblings().removeClass('on on_l');
        } else {
            obj2 = {
                'fieldName': 'price'
            }
            $(ele).find('i').css('background-position', '-230px -917px');
            $(ele).siblings('a').find('i').css('background-position', '0px -917px');
            $(ele).addClass('on_l').removeClass('on').siblings().removeClass('on_l on');
        }
        obj = Object.assign({}, obj2, obj);
        godsRequest(obj);
        showJg = !showJg;
    }
})