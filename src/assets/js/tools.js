export default {
    // 1. cookie操作

    // setCookie
    // @about 设置cookie
    setCookie: (name,value,expiresDays=0) => {
        var exp =   new Date()
        exp.setTime(exp.getTime() + expiresDays *　24 * 60 * 60 * 1000)
        document.cookie = name + '=' + escape(value) + ";expires="+exp.toGMTString();
    }, 

    // getCookie
    // about 获取cookie
    getCookie: name => {
        var arr = document.cookie.match(new RegExp('(^| )'+ name + "=([^;]*)(;|$)"))
        if(arr != null) {
            return arr[2]
        } else {
            return ''
        }
    },

    // delCookie
    // about 删除cookie
    delCookie: name => {
        var exp = new Date()
        exp.setTime(exp.getTime() - 1)
        var cval = getCookie(name)
        if(cval != '') {
            document.cookie = name + '=' + cval +　';expires=' + exp.toGMTString()
        }
    },

    // 2.localStorage操作
    
    // setLocalStorage
    // about 设置localstorage 
    setLocalStorage: (name, value) => {
        localStorage.setItem(name, JSON.stringify(value))
    },

    // getLocalStorage
    // about 获取Localstorage
    getLocalStorage: name => {
        return JSON.parse(localStorage.getItem(name))
    },


    // 3. 返回随机数
    // randomNumber
    // about 设置随机数
    randomNumber: (n1,n2) =>{
        if(arguments.length == 2) {
            return (n1 +　Math.random() * (n2-n1))
        } else if(arguments.length == 1) {
            return (Math.random() * n1)
        } else {
            return Math.random()
        }
    },

    // 4. 时间操作

    // countDown 
    // about 倒计时
    // @endTime (YYYY/MM/DD H:mm:ss)
    countDown: endTime => {
        var curTime = new Date()
        var endTime = endTime
        var restTime = endTime.getTime() - curTime.getTime()
        var d = 0, h = 0, m = 0, s = 0
        if(restTime >　0) {
            d = Math.floor(restTime/1000/60/60/24)
            h = Math.floor(restTime/1000/60/60%24)
            m = Math.floor(restTime/1000/60%60)
            s = Math.floor(restTime/1000%60)
            return '剩余时间' +　d + '天' + h + '时' + m  + '分' + '秒'
        }

    }, 

    // formatDate
    // about 格式化日期
    format: (date, Joiner) => {
        var date = new Date(date)
        var year = date.getFullYear()
        var month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + date.getMonth() + 1 
        var day = date.getDate() +　1 > 9 ? date.getDate() + 1 : '0' + date.getDate() + 1
        var hour = date.getHours() + 1 > 9 ? date.getHours() + 1 : '0' + date.getHours() + 1
        var minutes = date.getMinutes() + 1 > 9 ? date.getMinutes() + 1 : '0' + date.getMinutes() 
        var seconds = date.getSeconds() + 1 > 9 ? date.getSeconds() + 1 : '0' + date.getSeconds()

        return year + Joiner + month + Joiner + day + Joiner + hour + ':' + m + ':' + s
    },


    // 5.url 操作

    // getUrlPrmt
    // about 获取地址栏参数
    getUrlPrmt: (url, key) => {
        var obj = {}
        var url = url || window.location.href
        url = url.substring(url.indexOf('?') + 1)
        url.split('&').forEach((v,i) => {
            obj[v.split('=')[0]] = obj[v.split('=')[1]]
        }) 

        return obj[key]
    }

    // 6 正则验证

    /**
     * 
     */



}