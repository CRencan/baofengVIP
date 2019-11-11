// 登录注册切换-------------------------------------------------------------------------------
var wp1 = document.getElementsByClassName('wrap1')[0]
var wp2 = document.getElementsByClassName('wrap2')[0]
var ljzc = document.getElementById('ljzc')
var ljdl = document.getElementById('ljdl')
ljzc.onclick = function() {
    wp1.style.display = 'none'
    wp2.style.display = 'block'
}
ljdl.onclick = function() {
        wp2.style.display = 'none'
        wp1.style.display = 'block'
    }
    // 注册验证手机号-----------------------------------------------------------------------

var ph = document.getElementById('phone')
var form = document.getElementById('form')

function w2fun1() {
    var phone = document.getElementById('tel').value
    if (!(/^1[3456789]\d{9}$/.test(phone))) {
        ph.innerHTML = "手机号格式不正确"
    } else {
        ph.innerHTML = ''
    }
}
// 注册验证密码强弱-----------------------------------------------------------------------------------
var safe = wp2.getElementsByClassName('safe')[0]

function w2fun2() {
    var passlen = form.pass.value.length

    if (passlen < 6) {
        ph.innerHTML = '请输入6-32位英文、数字和符号的组合密码'
        safe.style.backgroundPosition = '-40px -70px'
    }
    if (passlen >= 6 && passlen < 9 && /^[0-9]*$|^[a-z]*$|^[^a-z0-9]$/i) {
        ph.innerHTML = '密码过于简单，请试试英文、数字和符号的组合'
        safe.style.backgroundPosition = '-40px -70px'
    }
    if (passlen >= 9 && passlen < 12 && /^[0-9a-z]+$/i) {
        ph.innerHTML = ''
        safe.style.backgroundPosition = '-70px -70px'
    }
    if (passlen >= 12 && passlen < 15 && /^[0-9]+[a-z]+[\w]+/i) {
        ph.innerHTML = ''
        safe.style.backgroundPosition = '-100px -70px'
    }
    if (passlen >= 15 && /^[0-9]+[a-z]+[\w]+/i) {
        ph.innerHTML = ''
        safe.style.backgroundPosition = '-130px -70px'
    }
}
// 点击刷新验证码-------------------------------------------------------------------------
var yzm = document.getElementsByClassName('yzm')[0]
var shuax = yzm.getElementsByClassName('sp2')[0]
var yz = yzm.getElementsByClassName('yz')[0]
var funyz = function() {
    var a = '1,2,3,4,5,6,7,8,9,0,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m,Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M'
    var array = a.split(',')
    var arr = []
    var str = ''
    for (i = 0; i < 4; i++) {
        var b = parseInt(Math.random() * array.length)
        var a = array[b]
        arr[i] = a
        str = arr.join('')
    }
    yz.innerHTML = str
}
funyz()
shuax.onclick = function() {
    funyz()
}
shuax.onmouseover = function() {

    shuax.style.backgroundPosition = '-151px -32px'
}
shuax.onmouseout = function() {
        shuax.style.backgroundPosition = '-121px -32px'
    }
    // 发送短信验证码-----------------------------------------------------------------------
var dxin = document.getElementsByClassName('dxin')[0]
var send = dxin.getElementsByClassName('sp2')[0]
var inp = dxin.getElementsByTagName('input')[0]
var timer;
send.onclick = function() {
    if (tel.value.length == 0) {
        ph.innerHTML = "手机号格式不正确"
    }
    if (form.pass.value.length == 0 && ph.innerHTML == '') {

        w2fun2()
    }
    if (ph.innerHTML == '' && form.pass.value.length != 0 && aa.value.toLowerCase() == yz.innerHTML.toLowerCase()) {
        var n = 60;
        timer = setInterval(function() {
            n--
            if (n <= 0) {
                send.value = "发送短信验证码"
                send.disabled = false;
                clearInterval(timer);
            } else {
                send.value = n + '秒后重新发送'
                send.disabled = true
                ph.innerHTML = '短信验证码已下发到手机'
            }
        }, 1000)
    } else if (ph.innerHTML == '' && form.pass.value.length != 0 && aa.value.toLowerCase() != yz.innerHTML.toLowerCase()) {
        ph.innerHTML = '验证码错误'
        funyz()
        setTimeout(function() {
            ph.innerHTML = ''
        }, 1000)

    }
}

// 存储（函数）------------------------------------------------------------------------------
function setCookie(key, value, day) {
    var date = new Date()
    date.setDate(date.getDate() + day)
    document.cookie = key + '=' + value + ';expires=' + date
}
//获取（函数）
function getCookie(key) {
    var cook = {}
    var cookie = document.cookie.split('; ')
    for (i = 0; i < cookie.length; i++) {
        var arr = cookie[i].split('=')
        cook[arr[0]] = arr[1]
    }
    return cook[key]
}
getCookie('name')
zhucea.onclick = function() {
    ph.innerHTML = ''
    if (tel.value.length == 0) {
        ph.innerHTML = "手机号格式不正确"
    }
    if (form.pass.value.length == 0 && ph.innerHTML == '') {
        w2fun2()
    }
    if (ph.innerHTML == '' && form.pass.value.length != 0 && aa.value.toLowerCase() != yz.innerHTML.toLowerCase()) {
        ph.innerHTML = '验证码错误'
        funyz()
        setTimeout(function() {
            ph.innerHTML = ''
        }, 1000)
    }
    if (ph.innerHTML == '' && form.pass.value.length != 0 && aa.value.toLowerCase() == yz.innerHTML.toLowerCase() && ddxx.value != 1111) {
        ph.innerHTML = '短信验证码有误'
    }
    if ((ph.innerHTML == '' || ph.innerHTML == '短信验证码已下发到手机') && form.pass.value.length != 0 && aa.value.toLowerCase() == yz.innerHTML.toLowerCase() && ddxx.value == 1111) {
        setCookie('name', tel.value, 7)
        setCookie('pass', passa.value, 7)
        form.submit()
    }
}
var phe = document.getElementById('phonee')
logina.onclick = function() {
    var n = getCookie('name')
    var p = getCookie('pass')
    if (myname.value == n && mypass.value == p) {
        phe.innerHTML = '登录成功'
        forma.submit()
    } else {
        phe.innerHTML = '请输入正确的用户名或密码'
    }
}