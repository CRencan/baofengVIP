// 导航-----------------------------------------------------------------------------
var mainNav = document.getElementById('mainNav')
var oli = mainNav.getElementsByTagName('li')

for (var i = 0; i < oli.length; i++) {
    oli[i].onclick = function() {

        for (var i = 0; i < oli.length; i++) {
            oli[i].className = ''
        }
        this.className = 'current'
    }

}

// VIP特权-------------------------------------------------------------------------------
var rollerLeft = document.getElementsByClassName('roller-left')[0]
var rollerRight = document.getElementsByClassName('roller-right')[0]
var rollerBoxWrap = document.getElementsByClassName('rollerBox-wrap')[0]
var sp = rollerBoxWrap.getElementsByTagName('span')

//移动函数
function mov(obj, tag, stopValue, attr) {
    tag = stopValue > parseInt(getStyle(obj, attr)) ? tag : -tag
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var speed = parseInt(getStyle(obj, attr)) + tag
        if (speed <= stopValue && tag < 0 || speed >= stopValue && tag > 0) {
            speed = stopValue
        }
        obj.style[attr] = speed + 'px'
        if (speed == stopValue) {
            clearInterval(obj.timer)
        }
    }, 30)
}

function getStyle(obj, attr) {
    return obj.getStyle ? obj.getStyle[attr] : getComputedStyle(obj)[attr]
}
rollerLeft.onclick = function() {
    mov(rollerBoxWrap, 50, -1075, 'left')
}
rollerRight.onclick = function() {
        mov(rollerBoxWrap, 50, 0, 'left')
    }
    // 轮播图（先来Ajax）-------------------------------------------------------------
function ajax(json) {
    var ajax = new XMLHttpRequest()
    ajax.open(json.methods, json.url)
    if (json.methods == 'post') {
        ajax.setRequestHeader('Content-type', json.type)
        ajax.send(json.data)
    }
    if (json.methods == 'get') {
        ajax.send()
    }
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                json.success(ajax.response)
            }
        }
    }
}


var file = document.getElementsByClassName('file')[0]
var focusmap = document.getElementsByClassName('focusmap')[0]
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var file = document.getElementsByClassName('file')[0]
tiaozhuan.onclick = function() {
    window.location = './bofangye.html'
}
ajax({
    'methods': 'get',
    'url': 'https://easy-mock.com/mock/5d66696282a7894e83239bc1/index/syc',
    'success': function(res) {
        arr = JSON.parse(res).data
        for (var i = 0; i < arr.length; i++) {
            var str = '<a href="javascript:;"><span><img src=' + arr[i].src + ' ></span></a >'
            file.innerHTML += str

            var span = file.getElementsByTagName('span')
            var num = 0
            span[num].style.opacity = 1
            prev.onclick = function() {
                num--
                if (num < 0) {
                    num = span.length - 1
                }
                for (var j = 0; j < span.length; j++) {
                    span[j].style.opacity = 0.5
                }
                span[num].style.opacity = 1
                focusmap.style.background = 'url(' + arr[num].pic + ')'
            }

            function funn() {
                num++
                if (num > span.length - 1) {
                    num = 0
                }
                for (var j = 0; j < span.length; j++) {
                    span[j].style.opacity = 0.5
                }
                span[num].style.opacity = 1

                focusmap.style.background = 'url(' + arr[num].pic + ')'
            }

            next.onclick = function() {
                funn()
            }
        }
        var timer = setInterval(function() {
            funn()
        }, 2000)
        focusmap.onmouseover = function() {
            clearInterval(timer)
        }
        focusmap.onmouseout = function() {
                timer = setInterval(function() {
                    funn()
                }, 2000)
            }
            // 透明(写在外面的话执行速度可能比ajax获取速度快，从而找不到span)

        for (var i = 0; i < span.length; i++) {
            span[i].index = i
            span[i].onmouseover = function() {
                for (var j = 0; j < span.length; j++) {
                    span[j].style.opacity = 0.5
                }
                this.style.opacity = 1
                num = this.index
                focusmap.style.background = 'url(' + arr[this.index].pic + ')'

            }
        }
    }
})