; (function() {
    // 展示验证码的框
    var sjyzm = yzm();
    $('.yzm').html(`${sjyzm}`)
    // 获取验证码的按钮
    var $hqyzm = $('#hqyzm');
    // 获取随机验证码
    $hqyzm.click(function () {
        var a = yzm();
        $('.yzm').html(`${a}`);
        sjyzm = a;
    })
    var pass_lock = false;
    var account_lock = false;
    var yzm_lock = false;

    // 验证账号是否正确
    $('#account').blur(function(){
        var account = $('#account').val();
        var reg = /^[^\d]\w{6,10}$/;
        if(!reg.test(account)){
            $('.tishi').css('display','block');
            account_lock = false;
            return ;
        }
        account_lock = true;
        $('.tishi').css('display','none');
    })
    // 判断密码是否正确
    $('#password').blur(function(){
        var password = $('#password').val();
        var reg = /^[^\d]\w{6,10}$/;
        if(!reg.test(password)){
            $('.tishim').css('display','block');
            pass_lock = false;
            return ;
        }
        pass_lock = true;
        $('.tishim').css('display','none');
    })
    // 判断验证码是否正确
    $('#sryzm').blur(function(){
        var sryzm = $('#sryzm').val();
        console.log(sryzm,typeof sryzm,sjyzm,typeof sjyzm);
        if(!(sryzm == sjyzm)){
            $('.tishiy').css('display','block');
            yzm_lock = false;
            return ;
        }
        yzm_lock = true;
        $('.tishiy').css('display','none');
    })
    $('#submit').click(function () {
        var account = $('#account').val();
        var password = $('#password').val();

        console.log(account_lock,pass_lock,yzm_lock);
        if(account_lock && pass_lock && yzm_lock){
            $('.tishiz').css('display','none');
            $.ajax({
                url: "../php/register.php",
                type: "post",
                // dataType: "json",
                data: {
                    username: account,
                    password: password
                },
                success:function(data){
                    alert("注册成功,即将跳转到登录页面");
                    console.log(data);
                    location.href = "login.html";
                }
            })
        }else{
            $('.tishiz').css('display','block');
        }
    })
})();