;(function(){
    $('#submit').click(function(){
        
        // console.log($('#user').val());
        $.ajax({
            url: "../php/login.php",
            type: "post",
            data: {
                username: $('#username').val(),
                password: $('#password').val()
            },
            success: function(data){
                alert("登录成功");
                location.href = '../index.html';
            }
        })
    })
})();