jQuery(function ($) {
    let $wide_banner = $(".wide_banner");
    let $navigation = $('.slideshortcut a');
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
    bigBanner()
    //大轮播图轮播
    function bigBanner() {
        let $wide_banner_bg = $(".wide_banner_bg");
        let $imglist = $('.slidebox li');
        let colorArr = ['#C83841', '#FFFDF1', '#FAF9FF', '#6E5366', '#F05A4B', '#D6E8FE'];
        let $page = $('.light span');
        $wide_banner_bg.css('background-color', colorArr[0]);
        $imglist.css('left', 0);
        $imglist.hide();
        $imglist.eq(0).show();
        //2.开定时器：每次轮播一个图
        var now = 0; //当前可视区的li下标
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
                $imglist.eq(index).fadeIn(300);
                now = index;
            }
            if (index < now) {
                //从左侧进入可视区
                //旧图：放到右边
                $imglist.eq(now).fadeOut(300);
                //新图：快速放在左侧，再挪进来
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
    function smallbanner(ele, pageEle) {
        let $box = $(ele);
        let $li = $box.find('.infcptop>li');
        let $pageLi = $(ele).find('.infcp_baniu li');
        console.log($pageLi)
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
            $li.eq(now).animate({
                'left': -iW
            }, 800, 'linear');

            //新图
            now = ++now > $li.length - 1 ? 0 : now;
            $li.eq(now).css('left', iW);
            $li.eq(now).animate({
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
})