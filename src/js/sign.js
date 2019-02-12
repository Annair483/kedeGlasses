 jQuery(function ($) {
     let $title = $('.l_r_title label');
     let $loginWindow = $('.j_saoma,.j_zhanghao');
     let $Jdown_app = $('#Jdown_app');
     let $UserName = $('#UserName');
     let $Password = $('#Password');
     let $button = $('.button');
     let $r_error = $(".r_error");
     let $remeberAgree = $(".r_remeber s");
     //进入页面判断是否记住账号
     let remember_account = localStorage['remember_account']||'';
     if(remember_account=='yes'){
         $remeberAgree.eq(0).addClass('position13');
         $UserName.val(localStorage['uname']);
     }
  
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
     //记住用户与自动登录打钩
     $remeberAgree.click(function () {
         $(this).toggleClass('position13');
     })
     //账号登录
     $button.on('click', function () {
         let _UserName = $UserName.val().trim();
         let _Password = $Password.val().trim();
         $r_error.html('');
         if (!_UserName) {
             $r_error.eq(0).html('请输入账号');
             return false;
         } else if (!_Password) {
             $r_error.eq(1).html('请输入密码');
             return false;
         } else {
             $.ajax({
                 type: 'POST',
                 url: '../api/sgin.php',
                 dataType: 'json',
                 data: {
                     'uname': _UserName,
                     'upw': _Password
                 },
                 success(res) {
                     console.log(res)
                     successfulRequest(res, _UserName, _Password)
                 }
             })
         }

     })
     //登录成功执行事件
     function successfulRequest(res, _UserName, _Password) {
         if (res) {
             //判断是否记住账号
             if ($remeberAgree.eq(0).hasClass('position13')) {
                 localStorage['uname'] = _UserName;
                 localStorage['remember_account'] = "yes";
             } else {
                 localStorage['uname'] = '';
                 localStorage['remember_account'] = "no";
             }
             //判断是否自动登录
             if ($remeberAgree.eq(1).hasClass('position13')) {
                 localStorage['token'] = res.token;
                 localStorage['autoLogin'] = "yes";
             } else {
                 sessionStorage['token'] = res.token;
                 localStorage['autoLogin'] = "no";
             }
         } else {
             $r_error.eq(0).html('账户或密码错误')
         }
         location.href = '../index.html'
     }

 })