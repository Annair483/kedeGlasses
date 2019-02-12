 jQuery(function ($) {
     let $title = $('.l_r_title label');
     let $loginWindow = $('.j_saoma,.j_zhanghao');
     let $Jdown_app = $('#Jdown_app');
     //登录窗口选项切换
     $title.eq(0).addClass('active');
     $loginWindow.eq(0).show();
     $.each($title, function (idx, item) {
         $(item).on('click', function () {
             $.each($title, function (idx, item) {
                 $(item).removeClass('active');
                 $loginWindow.eq(idx).hide();
             })
             $(item).addClass('active');
             $loginWindow.eq(idx).show();
         })
     })
     //下载app图标切换
     $Jdown_app.eq(0).mouseover(function () {
         $(this).hide().next().show();
     }).next().mouseout(function () {
         $(this).hide().prev().show();
     })
     //账号登录
 })