// 首页，点播，激活码table切换========================================================
var oul = document.getElementById('mainNav')
var oli = oul.getElementsByTagName('li')
for (var i = 0; i < oli.length; i++) {
    oli[i].onclick = function() {
        for (var i = 0; i < oli.length; i++) {
            oli[i].className = ''
        }
        this.className = 'current'
    }

}

var mv = document.getElementsByClassName('movies')[0]
var odiv = mv.getElementsByTagName('div')[0]
var msp = odiv.getElementsByTagName('span')
for (var i = 0; i < msp.length; i++) {
    msp[i].onclick = function() {
        for (var i = 0; i < msp.length; i++) {
            msp[i].className = ''
        }
        this.className = 'now'
    }

}

// 影片(先来ajax)============================================================================
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
//=========================================================================================
var movie = document.getElementsByClassName('movie')[0]
var arr = []

ajax({
    'methods': 'get',
    'url': 'https://easy-mock.com/mock/5d652d79ed399e38065b35d7/example/asd',
    'success': function(res) {
        arr = JSON.parse(res).data
        this.index = i
        var arr2 = []

        function funny() {
            for (var i = 0; i < arr.length; i++) {
                var str = '<a href=""><img src="' + arr[i].src + '" alt=""></a><span ></span><span style="cursor: pointer">标清</span><span><a href="">' + arr[i].name + '</a> </span><span>' + arr[i].appraise + '</span><span id="fenshu">' + arr[i].score + '</span>'
                movie.innerHTML += '<div>' + str + '</div>'
            }
        }
        funny()
            //======全部，VIP免费，VIP折扣=================================================================================================
        var vip = document.getElementsByClassName('vip')[0]
        var sp = vip.getElementsByTagName('span')
        for (var i = 0; i < sp.length; i++) {
            sp[i].onclick = function() {
                movie.innerHTML = ''
                funny()
                for (var i = 0; i < sp.length; i++) {
                    sp[i].className = ''
                }
                this.className = 'dji'
                this.hover = 'none'
            }
        }
        sp[2].onclick = function() {
                movie.innerHTML = '<div style="width:100%;height:500px;line-height:500px;text-align: center">😭空空~~</div>'

                for (var i = 0; i < sp.length; i++) {
                    sp[i].className = ''
                }
                this.className = 'dji'
            }
            // 最新，最热排序======================================================================================
        var ne = document.getElementsByClassName('new')[0]
        var hot = document.getElementsByClassName('hot')[0]
        hot.onclick = function() {
            for (var i = 0; i < sp.length; i++) {
                sp[i].className = ''
            }
            sp[0].className = 'dji'

            hot.className = 'now'
            ne.className = ''
            arr.sort(function(a, b) {
                return b.score - a.score
            })
            movie.innerHTML = ''
            funny()

        }
        ne.onclick = function() {
            ne.className = 'now'
            hot.className = ''
            arr.sort(function(a, b) {
                return a.p - b.p
            })
            movie.innerHTML = ''
            funny()
        }
    }
})