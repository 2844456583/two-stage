// 随机生成n位长度的验证码
function yzm(n) {
    var code = "";
    for (var i = 0; i < 6; i++) {
        var radom = Math.floor(Math.random() * 10);
        code += radom;
    }
    return code;
}