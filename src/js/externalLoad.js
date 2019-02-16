jQuery(function ($) {
    var uid;
    // 底部加载
    $("#footer").load("../html/footer.html");
    //右侧漂浮加载
    $("#pf_right").load("../html/pf_right.html", function () {
        aaa();
        //头部加载
        $("#header").load("../html/header.html", function () {
            isLogin()
        });
    });
    // 左侧导航加载
    $(".classify_left").load("../html/leftNav.html", pullDownList);
})