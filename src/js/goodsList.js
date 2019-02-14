jQuery(function ($) {
    let $classify_product_ul = $(".classify_product_ul");
    let $page = $('#page');
    let $classify_form = $('.classify_form s');
    let $classify_product_page_len = $('.classify_product_page_len');
    godsRequest()
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
                console.log(res)
                produst(res.data)
                page(res)
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
    //商品排序
    // sort()
    // function sort(){
    //     let showJg = true;
    //     let showXl = true;
    //     let 
    // }
})