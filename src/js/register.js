jQuery(function($){
    let $RUserName = $('#RUserName');
    let $ECT = $('.ECT');
    $RUserName.on('blur',function(){
        var phone = $RUserName.val().trim();
		if(!/^1[3-9]\d{9}$/.test(phone)){
			 $ECT.html('请输入正确的手机号');
			return false;
		}
    })
})