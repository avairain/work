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
    console.log(option)
    this.option = option
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
        that.ableButton(that.changeText(num))
    })
}
//改变文本样式
TestPhone.prototype.changeText = function (num) {
    if (this.testPhone(num)) {
        //true===>符合
        var n = 60
        var timer = setInterval(() => {
            n--
            n = n < 0 ? n = 0 : n
            this.option.spanArr[0].innerHTML = `已发送(${n})`
            if (n == 0) {
                clearInterval(timer)
                this.option.spanArr[0].innerHTML = '获取验证码'
                this.option.spanArr[0].className = ''

            }
        }, 1000)
        this.option.spanArr[0].innerHTML = `已发送(${n})`
        this.option.spanArr[0].className = 'success'
        return false
    } else {
        this.option.spanArr[0].innerHTML = '手机号错误'
        this.option.spanArr[0].className = 'error'
        return true
    }
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
    if (flag) {
        return
    }
    document.querySelector('.passbutton').className = "passbutton"
    document.querySelector('.passbutton').children[0].disabled = flag
}

//测试验证码
function TestPass(option) {
    this.option = option
    console.log(this.option)
    TestPass.prototype = Object.create(new TestPhone(option))
    console.log(this)
    this.init(option)
}
TestPass.prototype.constructor = TestPass
TestPass.prototype.init=function(option){
    this.testPass(option)
}
TestPass.prototype.testPass=function(option){
    this.testPassNum(document.querySelector(option.passNumID).value)
}
TestPass.prototype.testPassNum=function(str){

}
