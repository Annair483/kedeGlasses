jQuery(function ($) {
    let $wide_banner = $(".wide_banner");
    let $navigation = $('.slideshortcut a');
    let $hp_menu = $(".hp_menu");
    let $ul1 = $hp_menu.eq(0).find('ul');
    let $ul2 = $hp_menu.eq(1).find('ul');
    
    //hover大轮播图 箭头出现
    $wide_banner.hover(function () {
        $navigation.show();
    }, function () {
        $navigation.hide();
    })
    //hover箭头 
    $navigation.hover(function () {
        $navigation.css('opacity', 1);
    }, function () {
        $navigation.css('opacity', 0.6);
    })
    //大轮播图轮播
    var now = 0; //当前可视区的li下标
    var $wide_banner_bg = $(".wide_banner_bg");
    let colorArr = ['#C83841', '#FFFDF1', '#FAF9FF', '#6E5366', '#F05A4B', '#D6E8FE'];
    bigBanner()

    function bigBanner() {
        let $imglist = $('.slidebox li');
        
        let $page = $('.light span');
        $wide_banner_bg.css('background-color', colorArr[0]);
        $imglist.css('left', 0);
        $imglist.hide();
        $imglist.eq(0).show();
        //2.开定时器：每次轮播一个图
        // var now = 0; //当前可视区的li下标
        var timer = null;
        timer = setInterval(next, 5000); //每隔两秒切下一张
        function next() {
            //旧图挪走：左侧
            $imglist.eq(now).fadeOut(300);
            //新图
            now = ++now > $imglist.length - 1 ? 0 : now;
            $wide_banner_bg.css('background-color', colorArr[now]);
            $imglist.eq(now).fadeIn(300);
            light();
        }

        function prev() {
            //旧图挪走：左侧
            $imglist.eq(now).fadeOut(300);
            //新图
            now = --now < 0 ? $imglist.length - 1 : now;
            $wide_banner_bg.css('background-color', colorArr[now]);
            $imglist.eq(now).fadeIn(300);
            light();
        }
        //3.焦点跟随
        function light() {
            $page.eq(now).addClass('cur').siblings().removeClass('cur');
        }
        //4.点击上下按钮可以切图
        //鼠标经过停止
        $wide_banner.hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(next, 5000);
        });
        $wide_banner.on('click', '.prev', function () {
            //切换到上一张
            prev();
        });
        $wide_banner.on('click', '.next', function () {
            //切换到下一张
            next();
        });
        //5.点击焦点可以跳转
        $wide_banner.on('mouseover', '.light span', function () {
            var index = $(this).index();
            if (index > now) {
                //从右侧进入可视区
                //旧图：放到左边
                $imglist.eq(now).fadeOut(300);
                //新图：快速放在右侧，再挪进来
                $wide_banner_bg.css('background-color', colorArr[index]);
                $imglist.eq(index).fadeIn(300);
                now = index;
            }
            if (index < now) {
                //从左侧进入可视区
                //旧图：放到右边
                $imglist.eq(now).fadeOut(300);
                //新图：快速放在左侧，再挪进来
                $wide_banner_bg.css('background-color', colorArr[index]);
                $imglist.eq(index).fadeIn(300);
                now = index;
            }
            light();
        });
    }

    smallbanner('#wide_infcp_5f_ban');
    smallbanner('.wide_f_ban');
    smallbanner('.infcp_f_cont');
    //小banner图轮播
    function smallbanner(ele) {
        let $box = $(ele);
        let $li = $box.find('.infcptop>li');
        let $pageLi = $(ele).find('.infcp_baniu li');
        //1.把所有的图片放在右侧，第一个图片放到可视区
        var iW = $li.eq(0).outerWidth();
        $li.css('left', iW);
        $li.eq(0).css('left', 0);


        //2.开定时器：每次轮播一个图
        var now = 0; //当前可视区的li下标
        var timer = null;
        timer = setInterval(next, 2000); //每隔两秒切下一张

        function next() {
            //旧图挪走：左侧
            $li.eq(now).stop(true).animate({
                'left': -iW
            }, 800, 'linear');

            //新图
            now = ++now > $li.length - 1 ? 0 : now;
            $li.eq(now).css('left', iW);
            $li.eq(now).stop(true).animate({
                'left': 0
            }, 800, 'linear');
            light();
        }

        function prev() {
            //旧图挪走：左侧
            $li.eq(now).animate({
                'left': iW
            }, 800, 'linear');

            //新图
            now = --now < 0 ? $li.length - 1 : now;
            $li.eq(now).css('left', -iW);
            $li.eq(now).animate({
                'left': 0
            }, 800, 'linear');
            light();
        }

        //3.焦点跟随
        function light() {
            $pageLi.eq(now).addClass('changebg').siblings().removeClass('changebg');
        }
        //4.点击上下按钮可以切图
        //鼠标经过停止
        $box.hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(next, 2000);
        });

        //5.点击焦点可以跳转
        $pageLi.on('mouseover', $pageLi, function () {
            var index = $(this).index();
            if (index > now) {
                //从右侧进入可视区
                //旧图：放到左边
                $li.eq(now).animate({
                    'left': -iW
                }, 800, 'linear');
                //新图：快速放在右侧，再挪进来
                $li.eq(index).css('left', iW);
                $li.eq(index).animate({
                    'left': 0
                }, 800, 'linear');
                now = index;
            }

            if (index < now) {
                //从左侧进入可视区
                //旧图：放到右边
                $li.eq(now).animate({
                    'left': iW
                }, 800, 'linear');
                //新图：快速放在左侧，再挪进来
                $li.eq(index).css('left', -iW);
                $li.eq(index).animate({
                    'left': 0
                }, 800, 'linear');
                now = index;
            }

            light();
        });
    }
    //商品渲染
    getGodsMessage()

    function getGodsMessage() {
        $.ajax({
            url: 'api/indexGods.php',
            dataType: 'json',
            success(res) {
                mz(res[0]);
                oneFGods(res[1]);
                twoFGods(res[2]);
            }
        })
    }
    //渲染秒杀和值得买
    function mz(res) {
        for (let i = 0; i < 5; i++) {
            let html = ` <li class="hp_mj">
                            <a href="#" target="_blank">
                                <img src="${res[i].url}" alt="${res[i].godsName}">
                                <p>${res[i].godsName}<br><span><b>￥</b>${res[i].price}</span></p>
                            </a>
                        </li>`
            $ul1.append(html)
        }
        for (let i = 5; i < 10; i++) {
            let html = ` <li class="hp_mj">
                            <a href="#" target="_blank">
                                <img src="${res[i].url}" alt="${res[i].godsName}">
                                <p>${res[i].godsName}<br><span><b>￥</b>${res[i].price}</span></p>
                            </a>
                        </li>`
            $ul2.append(html)
        }
        tabMz()
    }
    //秒杀和值得买选项卡
    function tabMz() {
        let $zw = $('.zw a');
        let $dsfw = $(".dsfw a");
        $zw.mouseover(function () {
            $(this).css('background-position', '0px 0px')
            $dsfw.css('background-position', '0px -91px')
            $hp_menu.eq(0).show().siblings().hide();
        })
        $dsfw.mouseover(function () {
            $(this).css('background-position', '0px -273px')
            $zw.css('background-position', '0px -182px')
            $hp_menu.eq(1).show().siblings().hide();
        })
    }
    //1F渲染
    function oneFGods(res) {
        let $img = $('.wide_4f_li_img img');
        let $wide_4f_li_name = $('.wide_4f_li_name');
        let $wide_4f_li_price = $('.wide_4f_li_price');
        $.each(res, function (idx, item) {
            $img.eq(idx).attr('src', item.url);
            $wide_4f_li_name.eq(idx).html(item.godsName);
            $wide_4f_li_price.eq(idx).html(`￥${item.price}`)
        })
    }
    //2F渲染
    function twoFGods(res) {
        let $hotImg = $('.wide_f_hot_img img');
        let $wide_f_hot_name = $('.wide_f_hot_name');
        let $wide_f_hot_price = $('.wide_f_hot_price');
        let $img = $('.wide_f_item_img');
        let $wide_f_item_name = $('.wide_f_item_name');
        let $wide_f_item_price = $('.wide_f_item_price');
        $.each(res, function (idx, item) {
            $img.eq(idx).attr('src', item.url).attr('alt', item.godsName);
            $hotImg.eq(idx).attr('src', item.url).attr('alt', item.godsName);
            $wide_f_item_name.eq(idx).html(item.godsName);
            $wide_f_hot_name.eq(idx).html(item.godsName);
            $wide_f_item_price.eq(idx).html(`￥${item.price}`)
            $wide_f_hot_price.eq(idx).html(`￥${parseInt(item.price)}<span>￥${parseInt(item.marketPrice)}</span>`)
        })
    }
    //门店楼层tab切换
    let $right = $('.right>li');
    let $tit = $('.tit>li');
    let $left = $('.left>li');
    var i=1;
    shop()
    //门店一级选项卡
    function shop() {
        let $tab = $(".tab li");
        $tab.mouseover(function () {
            i = $(this).index();
            $(this).addClass('on').siblings().removeClass('on');
            $right.eq(i * 2).show().addClass('ass').siblings().hide().removeClass('ass');
            $tit.eq(i).show().siblings().hide();
            leftTab(i)
        })

    }
    leftTab()
    //门店二级选项卡
    function leftTab() {
        $left.eq(0).mouseover(function () {
            $(this).attr('class', 'info_on').next().attr('class', 'map');
            $right.filter('.ass').show().siblings().hide();
        })
        $left.eq(1).mouseover(function () {
            $(this).attr('class', 'map_on').prev().attr('class', 'info');
            $right.filter('.ass').next().show().siblings().hide();
        })
    }
    //文章选项卡
    let $inlaf_tis = $(".inlaf-tis li");
    let $inlaf_l_m = $(".inlaf-l-nm");
    $inlaf_tis.mouseenter(function(){
        let $this = $(this);
        let i = $this.index();
        $this.addClass('active').siblings().removeClass('active');
        $inlaf_l_m.eq(i).addClass('active2').siblings().removeClass('active2');
    })
    //关注选项卡
    let $bg321 = $('#bg321');
    let $TabCon = $('#TabCon1,#TabCon2');
    $bg321.on('mouseenter','a',function(){
        let $this = $(this);
        let i = $this.index();
        if(i){
            $this.parent().attr('class','xixi1');
            $TabCon.eq(1).show().prev().hide();
        }else{
            $this.parent().attr('class','xixi2');
            $TabCon.eq(0).show().next().hide();
        }
    })
})