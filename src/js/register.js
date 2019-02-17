jQuery(function ($) {
    let $RUserName = $('#RUserName');
    let $ECT = $('.ECT');
    let $RPassword = $('#RPassword');
    let $RPassword2 = $('#RPassword2');
    let $regValidate2 = $('#regValidate2');
    let $agreeme = $('#agreeme');
    var verifyCode = new GVerify("v_container");
    let $right_top_input = $('.right_top input');
    let numShow = true;
    //RUserName失去焦点事件
    $RUserName.on('blur', function () {
        if (checkNum()) {
            $ECT.html('')
            return false
        }
    });
    //RPassword失去焦点事件
    $RPassword.on('blur', function () {
        if (checkUpw()) {
            $ECT.html('')
            return false
        }
    })
    //RPassword2失去焦点事件
    $RPassword2.on('blur', function () {
        if (checkUpwSame()) {
            $ECT.html('')
            return false
        }
    })
    //点击agreeme打钩
    $agreeme.on('click', function () {
        $agreeme.toggleClass('position13')
    })
    //点击注册
    let $registerSlide = $('.registerSlide');
    $registerSlide.on('click', function () {
        checkNum()
        if (!numShow) {
            return false
        } else
        if (!checkUpw()) {
            return false
        } else if (!checkUpwSame()) {
            return false
        } else if (!Verification()) {
            return false
        } else if (!checkAgree()) {
            return false
        } else {
            // 存用户名和密码到数据库
            var _uname = $RUserName.val().trim();
            let _upw = $RPassword.val().trim();
            $.ajax({
                type: 'POST',
                url: '../api/registers.php',
                // dataType: 'json',
                data: {
                    'uname': _uname,
                    'upw': _upw
                },
                success(res) {
                    console.log(res)
                    if (res === '1') {
                        location.href = '../html/sign.html'
                    }
                }
            })
        }
        console.log(222)
    })

    //判断num是否存在或正确
    function checkNum() {
        var phone = $RUserName.val().trim();
        if (!/^1[3-9]\d{9}$/.test(phone)) {
            $ECT.html('请输入正确的手机号');
            console.log('错误号码 返回false')
            return false;
        } else {
            require_user(phone).then(function (res) {
                console.log(res)
                if (res === "0") {
                    $ECT.html('该号码已注册');
                    numShow= false;
                }else{
                    numShow= true;
                }

            });
        }
    }

    //检查号码是否被注册
    function require_user(phone) {
        return new Promise((resolve, rejects) => {
            $.ajax({
                type: 'POST',
                url: '../api/checkUname.php',
                data: {
                    'uname': phone
                },
                success(res) {
                    resolve(res)
                }
            })
        })
    }

    //判断upw是否正确
    function checkUpw() {
        let _upw = $RPassword.val().trim();
        if (/^\S{6,14}$/.test(_upw)) {
            // $ECT.html('')
            return true;
        } else {
            $ECT.html('密码由6-15位字母、数字或字符组成');
            return false;
        }
    }

    //判断2次输入密码是否相同
    function checkUpwSame() {
        let _upw1 = $RPassword.val().trim();
        let _upw2 = $RPassword2.val().trim();
        if (_upw1 === _upw2 && _upw1 != '' && _upw2 != '') {
            return true;
        } else {
            $ECT.html('两次密码输入不相同');
            return false;
        }
    }


    //判断验证码是否相同
    function Verification() {
        let res = verifyCode.validate($regValidate2.val().trim());
        if (res) {
            // $ECT.html('')
            return true;

        } else {
            $ECT.html('验证码错误');
            return false;
        }
    }

    //判断是否打钩
    function checkAgree() {
        if ($agreeme.hasClass('position13')) {
            return true;
        } else {
            $ECT.html('请先同意可得网用户注册协议。');
            return false;
        }
    }
})