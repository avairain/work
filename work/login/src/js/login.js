!function () {
    "use strict"
    var form = document.querySelector('#logintest').children[0]
    var spanArr = form.querySelectorAll('span')
    spanArr[0].addEventListener
}()
function Login(option) {
    this.option = option
}
//测试手机号码
function TestPhone(option) {
    this.option = option
    this.num =
        this.init(this.option)
}
TestPhone.protoype = Object.create(new Login())
TestPhone.protoype.constructor = TestPhone
//初始化
TestPhone.prototype.init = function (option) {
    this.touchSpanA(option)
}
//点击获取验证码按钮
TestPhone.prototype.touchSpanA = function (option) {
    var that = this
    this.option.spanArr[0].addEventListener('click', function () {
        if (that.option.spanArr[0].className == "success") return
        var num = document.querySelector(that.option.phoneNumID).value
        that.ajax(num)
        that.ableButton(that.changeText(num))
    })
}
TestPhone.prototype.ajax = function (num) {
    var xml = new XMLHttpRequest();
    var url = 'http://117.131.17.174:8084/sendSmscode.msp?mobile=' + num
    var that = this
    xml.open("GET", url)
    xml.onreadystatechange = function () {
        if (xml.readyState == 4) {
            console.log(JSON.parse(xml.responseText))
            that.loginSessionId = JSON.parse(xml.responseText).loginSession.loginSessionId
            // that.loginSessionId = "Vb1g5qdAS7Ex3T0wWlxNsVicAoDHPHza"
        }
    }
    xml.send()
}
//改变文本样式
TestPhone.prototype.changeText = function (num) {
    if (this.testPhone(num)) {
        //true===>符合
        this.changeTextTrue()
        return false
    } else {
        this.changeTextFalse()
        return true
    }
}
TestPhone.prototype.changeTextTrue = function () {
    var n = 60
    var timer = setInterval(() => {
        n--
        n = n < 0 ? n = 0 : n
        this.option.spanArr[0].innerHTML = `已发送(${n})`
        if (n == 0) {
            clearInterval(timer)
            this.option.spanArr[0].innerHTML = '重新获取'
            this.option.spanArr[0].className = ''

        }
    }, 1000)
    this.option.spanArr[0].innerHTML = `已发送(${n})`
    this.option.spanArr[0].className = 'success'
}
TestPhone.prototype.changeTextFalse = function () {
    this.option.spanArr[0].innerHTML = '手机号错误'
    this.option.spanArr[0].className = 'error'
}
//校验手机号
TestPhone.prototype.testPhone = function (str) {
    return this.regExp(str)
}
//正则判断手机号码是否符合规范
TestPhone.prototype.regExp = function (str) {
    var RE = /^1[34578]\d{9}$/
    str = parseInt(str)
    return RE.test(str)
}
TestPhone.prototype.ableButton = function (flag) {
    this.flag = flag
    if (flag) {
        return
    }
}

//测试验证码
function TestPass(option) {
    this.option = option
    TestPass.prototype = Object.create(new TestPhone(option))
    this.init(option)
}
TestPass.prototype.constructor = TestPass
TestPass.prototype.init = function (option) {
    this.testPass(option)
}
TestPass.prototype.testPass = function (option) {
    this.blur(option)
}
TestPass.prototype.blur = function (option) {
    var that = this
    var el = document.querySelector(option.passNumID)
    el.addEventListener('blur', function () {
        that.changeTextTrue(el)
        that.num = document.querySelector(option.phoneNumID).value
        that.test(document.querySelector(option.passNumID).value)
    })
}

TestPass.prototype.changeTextTrue = function (el) {
    el.nextElementSibling.innerHTML = ""
    el.nextElementSibling.className = ""
    document.querySelector('.passbutton').className = "passbutton"
    document.querySelector('.passbutton').children[0].disabled = this.constructor.prototype.flag

}
TestPass.prototype.changeTextFalse = function (el) {
    el.nextElementSibling.innerHTML = "验证码错误"
    el.nextElementSibling.className = "error"

}
TestPass.prototype.test = function (str) {
    console.log(this, this.constructor.prototype.loginSessionId)
    
    this.buttonLogin(str)
}
TestPass.prototype.buttonLogin = function (str) {
    var that = this
    document.querySelector("div.passbutton > input[type='button']").addEventListener('click', function () {
        this.className = "passbutton"
        this.innerHTML = "登录中..."
        var inp = this
        var xml = new XMLHttpRequest()
        var url = `http://117.131.17.174:8084/smscodeLogin.msp?mobile=${that.num}&loginSessionId=${that.constructor.prototype.loginSessionId}&validateCode=${str}&deviceId=miguvideoh5migutokenlogin`
        xml.open('GET', url)
        xml.onreadystatechange = function () {
            if (xml.readyState == 4) {
                console.log(xml)
                if (JSON.parse(xml.response).resultCode === "LOGIN_SUCCESS") {
                    inp.value="登录成功"
                    inp.nextElementSibling.id = "logined"
                    return true
                } else {
                    that.changeTextFalse(document.querySelector(option.passNumID))
                    return false
                }
            }
        }
        xml.send()
    })
}


