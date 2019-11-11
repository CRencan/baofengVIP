var dhang = document.getElementsByClassName('dhang')[0]
var more = dhang.getElementsByClassName('more')[0]
var type = document.getElementsByClassName('type')[0]
var sye = document.getElementsByClassName('sye')[0]
dhang.onmouseover = function() {
    dhang.style.color = '#0086FF'
    type.style.display = 'block'
    more.style.backgroundPosition = '-1180px -590px'

}
dhang.onmouseout = function() {
    dhang.style.color = '#989898'
    more.style.backgroundPosition = '-1180px -562px'
    type.style.display = 'none'
}
sye.onmouseover = function() {
    sye.style.color = '#0086FF'
}
sye.onmouseout = function() {
    sye.style.color = '#989898'
}

type.onmouseover = function() {
    dhang.style.color = '#0086FF'
    more.style.backgroundPosition = '-1180px -590px'
    type.style.display = 'block'

}
type.onmouseout = function() {
    dhang.style.color = '#989898'
    more.style.backgroundPosition = '-1180px -562px'
    type.style.display = 'none'
}
var sp1 = document.getElementsByClassName('sp1')[0]
var sp11 = document.getElementsByClassName('sp11')[0]
var sp2 = document.getElementsByClassName('sp2')[0]
var sp3 = document.getElementsByClassName('sp3')[0]
var sp4 = document.getElementsByClassName('sp4')[0]
var sp5 = document.getElementsByClassName('sp5')[0]
var sp6 = document.getElementsByClassName('sp6')[0]
var sp22 = document.getElementsByClassName('sp22')[0]
var sp33 = document.getElementsByClassName('sp33')[0]
var sp66 = document.getElementsByClassName('sp66')[0]
var sp44 = document.getElementsByClassName('sp44')[0]
var sp55 = document.getElementsByClassName('sp55')[0]
sp1.onmouseover = function() {
    sp11.innerHTML = '赞&nbsp;&nbsp;&nbsp;&nbsp;'
}
sp1.onmouseout = function() {
    sp11.innerHTML = '2645'
}
sp2.onmouseover = function() {
    sp22.innerHTML = '踩&nbsp;&nbsp;&nbsp;&nbsp;'
}
sp2.onmouseout = function() {
    sp22.innerHTML = '1487'
}
var xjsp = document.getElementById('xjsp')
var ssp = xjsp.getElementsByTagName('span')
var scroll = document.getElementsByClassName('scroll_cont')[0]
ssp[1].onclick = function() {
    ssp[0].className = ''
    scroll.innerHTML = ''
    ssp[1].className = 'zhong'
}
ssp[0].onclick = function() {
    ssp[1].className = ''
    ssp[0].className = 'zhong'
    scroll.innerHTML = '<p>「该片自然是对传统西游传奇的又一次解构，是大家能够想得到的周式幽默，再者一些包袱抖得很到位，这些源于台词的包袱，常能让人回味一笑，在这些幽默的基础之上，影片的很多情节都挺生动。」</p><p><a href="javascript:;">战狼2,硬汉吴京血战非洲</a></p><p><a href="javascript:;">战狼2,硬汉吴京血战非洲</a></p><p><a href="javascript:;">战狼2,硬汉吴京血战非洲</a></p><p><a href="javascript:;">战狼2,硬汉吴京血战非洲</a></p><p><a href="javascript:;">战狼2,硬汉吴京血战非洲</a></p><p><a href="javascript:;">战狼2,硬汉吴京血战非洲</a></p><p><a href="javascript:;">战狼2,硬汉吴京血战非洲</a></p><p><a href="javascript:;">战狼2,硬汉吴京血战非洲</a></p><p><a href="javascript:;">战狼2,硬汉吴京血战非洲</a></p><p><a href="javascript:;">战狼2,硬汉吴京血战非洲</a></p><p><a href="javascript:;">战狼2,硬汉吴京血战非洲</a></p><p><a href="javascript:;">战狼2,硬汉吴京血战非洲</a></p>'
}

// 猜你喜欢
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

var like = document.getElementsByClassName('like')[0]
var odiv = like.getElementsByTagName('div')[0]
var arr = []
ajax({
    'methods': 'get',
    'url': 'https://easy-mock.com/mock/5d6cac6131d9e23567e0e555/cainixihuan/bofang',
    'success': function(res) {
        arr = JSON.parse(res).data
        this.index = i
        for (var i = 0; i < arr.length; i++) {
            var str = '<a href=""><img src="' + arr[i].src + '" alt=""></a><span><a href="">' + arr[i].name + '</a> </span><span>' + arr[i].appraise + '</span><span>' + arr[i].score + '</span>'
            odiv.innerHTML += '<div>' + str + '</div>'
        }
    }
})

// 热门推荐
var hott = document.getElementsByClassName('hott')[0]
var mht = hott.getElementsByClassName('mht')[0]
var arr = []
ajax({
        'methods': 'get',
        'url': 'https://easy-mock.com/mock/5d6cd5b640f42e0b711f8a4e/baofeng/hott',
        'success': function(res) {
            arr = JSON.parse(res).data
            this.index = i
            for (var i = 0; i < arr.length; i++) {
                var str = '<a href=""><img src="' + arr[i].src + '" alt=""></a><span class="mhtname"><a href="">' + arr[i].name + '</a></span> '
                mht.innerHTML += '<div >' + str + '</div>'
            }
        }
    })
    // 排行榜
var arry = []
ajax({
        'methods': 'get',
        'url': 'https://easy-mock.com/mock/5d6d192923f431172b9625fb/baofengph/paihangjj',
        'success': function(res) {
            arry = JSON.parse(res).data
            this.index = i
            for (var i = 0; i < arry.length; i++) {
                var str = '<a href=""><span class="xuhao">' + arry[i].xuhao + '</span><span class="pianming">' + arry[i].pianming + '</span><span class="pingfen">' + arry[i].pingfen + '</span>'
                var str2 = '<a href=""><img src="' + arry[i].src + '" alt=""><span class="hengtiao"><span class="xuehao2">' + arry[i].xuhao + '</span><span class="pianming2">' + arry[i].pianming + ' </span></span>'
                paihangbang.innerHTML += '<div >' + str + '</div>'
                PeriodicWave.innerHTML += '<div >' + str2 + '</div>'
            }
        }
    })
    // 评论
var txt = document.getElementsByTagName('textarea')[0]
var spa4 = document.getElementsByClassName('spa4')[0]
var a = spa4.getElementsByTagName('a')[0]


function num() {
    var n = txt.value.length
    a.innerHTML = 140 - n

}
// 验证码
var yz = document.getElementsByClassName('yz')[0]
var fyz = function() {
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
fyz()
change.onclick = function() {
        fyz()
    }
    // 排序
var pxu = document.getElementsByClassName('pxu')[0]
var pspan = pxu.getElementsByTagName('span')
    //for(var i = 0; i < pspan.length; i++) {
    //
    //	pspan[i].onmouseover = function() {
    //		for(var i = 0; i < pspan.length; i++) {
    //			pspan[i].className = ''
    //		}
    //		this.className = 'pnow'
    //
    //	}
    //
    //}

//用户评论
var ping = document.getElementsByClassName('ping')
    //ping[0].onmouseover=function(){
    //	alert(0)
    //}
var arra = []
ajax({
    'methods': 'get',
    'url': 'https://easy-mock.com/mock/5d6e19866500f83ffa739b13/pinglun/pl',
    'success': function(res) {
        arra = JSON.parse(res).data
        this.index = i

        function xhxh() {
            for (var i = 0; i < arra.length; i++) {
                var str = '<div class="ping"><div class="toux"></div><span class="mingz">' + arra[i].mingz + '</span><span class="time">' + arra[i].time + '</span><p class="write">' + arra[i].write + '</p><p class="z"><span class="s0" id="jubao">举报</span> <span class="s1"></span><span class="s2">' + arra[i].s2 + '</span></p></div><br>'
                pla.innerHTML += str
            }
        }

        fbiao.onclick = function() {
            var oDate = new Date()
            var y = oDate.getFullYear()
            var m = oDate.getMonth() + 1
            var d = oDate.getDate()
            var h = oDate.getHours()
            var mi = oDate.getMinutes()
            var t = y + "-" + m + "-" + d + "  " + h + ":" + mi
            var adda = {
                'p': 0,
                'mingz': 'xxxxx',
                'time': t,
                'write': txt.value,
                's2': '0'
            }
            arra.unshift(adda)
            txt.value = ''
        }


        xhxh()
        hhh.onclick = function() {
            for (var i = 0; i < pspan.length; i++) {
                pspan[i].className = ''
            }
            this.className = 'pnow'
            arra.sort(function(a, b) {
                return b.s2 - a.s2
            })
            pla.innerHTML = ''
            xhxh()
            qian.value = 1
            abc()

        }
        xxx.onclick = function() {
            for (var i = 0; i < pspan.length; i++) {
                pspan[i].className = ''
            }
            this.className = 'pnow'
            arra.sort(function(a, b) {
                return a.p - b.p
            })
            pla.innerHTML = ''
            xhxh()
            qian.value = 1
            abc()
        }

        function abc() {
            var result = []
            result = pla.innerHTML.split('<br>')
                //			console.log(result)
                //			console.log(typeof(result))

            var shuliang = result.length - 3
            fengle.innerHTML = shuliang
            var a = []
            for (var i = 0; i < result.length; i += 6) {
                a.push(result.slice(i, i + 5))
            }
            zonggong.innerHTML = '/' + a.length
            var j = 0
            xia.onclick = function() {
                j++
                if (j >= a.length) {
                    j = a.length - 1
                }
                console.log(j)
                pla.innerHTML = a[j]
                qian.value = j + 1
            }
            shang.onclick = function() {
                j--
                if (j < 1) {
                    j = 0
                }
                console.log(j)
                pla.innerHTML = a[j]
                qian.value = j + 1
            }
            queding.onclick = function() {
                console.log(Number(j) + 1)
                if (qian.value > a.length || qian.value < 1) {
                    qian.value = j
                }
                j = qian.value
                pla.innerHTML = a[j - 1]
            }
            pla.innerHTML = a[0]
        }
        abc()

    }
})