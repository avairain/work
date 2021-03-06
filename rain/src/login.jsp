<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="css/login.css">
</head>

<body>
    <div class="box">
        <!-- 头部提示和返回 -->
        <nav>
            <div class="left"><a href="javascript:;"><img src="images/back.png" alt="返回"></a></div>
            <div class="center"><span>一键注册/登录</span></div>
        </nav>
        <!-- 中间的logo图片 -->
        <section class="logo">
            <div>
                <a>
                   <img src="images/logo.png" alt="咪咕视频">
                </a>
            </div>
        </section>
        <!-- 登录校验 -->
        <section id="logintest">
            <form action="">
                <div>
                    <label for="phonenum">手机号</label><input type="number" id="phonenum" placeholder="请输入手机号"><span>获取验证码</span>
                </div>
                <div>
                    <label for="passnum">验证码</label><input type="number" id="passnum"><span></span>
                </div>
                <div class="passbutton disable" ><input type="button" value="登录" disabled></div>
            </form>
            <div><a href="">账号密码登录</a></div>
        </section>
    </div>
<script src="./js/login.js"></script>
<script>   
var  form = document.querySelector('#logintest').children[0]
    var obj={
        spanArr:form.querySelectorAll('span'),
        phoneNumID:'#phonenum',
        passNumID:"#passnum"
    }
    new TestPass(obj)
</script>
</body>

</html>