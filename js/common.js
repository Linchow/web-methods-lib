
/**
 * 设置cookie
 * @param {String} name cookie键名
 * @param {String | Number} value cookie值
 * @param {Number} iDay 过期时间 天数
 */
function setCookie(name, value, iDay){
    var tempStr = name + '=' + value;
    var expires = '';
    if(iDay) { // 默认过期时间为浏览器关闭
        var oDate = new Date();
        oDate.setDate(oDate.getDate() + iDay);
        expires = ';expires=' + oDate;
    }
    document.cookie = tempStr + expires;
}

/**
 * 读取cookie
 * @param {String} name
 */
function getCookie(name){
    var arr = document.cookie.split('; '); // cookie名字前有空格,需要加空格
    for(var i = 0; i < arr.length; i++){
        var arr2 = arr[i].split('=');
        if(arr2[0] == name){
            return arr2[1];
        }
    }
    return '';
}

/**
 * 删除cookie
 * @param {String} name 
 */
function removeCookie(name){
    setCookie(name, 1, -1);
}

/**
 * 将时间戳或时间格式转换成字符串
 * @param {String} format yyyy-MM-dd hh:mm:ss
 * @param {Number | Date} time 
 */
function dateFormat(format, time){
    var newDate;
    if(typeof time === 'number') {
        newDate = new Date(time.toString().length === 10 ? time * 1000 : time);
    }else {
        newDate = time
    }
    var date = {
        'M+': newDate.getMonth() + 1,
        'd+': newDate.getDate(),
        'h+': newDate.getHours(),
        'm+': newDate.getMinutes(),
        's+': newDate.getSeconds(),
        'q+': Math.floor((newDate.getMonth() + 3) / 3),
        'S+': newDate.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                ? date[k] : ('00' + date[k]).substr(('' + date[k]).length));
        }
    }
    return format;
}

/**
 * 获取地址栏参数
 * @param {String} name 
 */
function getUrlParams(name){
    var reg = new RegExp('(^|&)'+ name +'=([^&]*)(&|$)');
    var r = window.location.search.substr(1).match(reg);
    if(r)
        return  r[2];
    else
        return '';
}

/**
 * 获取地址栏参数
 * @param {string} url
 * @returns {Object}
 */
function param2Obj(url) {
    url = url == null ? window.location.href : url
    const search = url.substring(url.lastIndexOf('?') + 1)
    const obj = {}
    const reg = /([^?&=]+)=([^?&=]*)/g
    search.replace(reg, (rs, $1, $2) => {
      const name = decodeURIComponent($1)
      let val = decodeURIComponent($2)
      val = String(val)
      obj[name] = val
      return rs
    })
    return obj
}

/**
 * 获取地址栏参数
 * @param {string} url
 * @returns {Object}
 */
function param2Obj(url) {
    const search = url.split('?')[1]
    if (!search) {
        return {}
    }
    return JSON.parse(
        '{"' +
        decodeURIComponent(search)
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"')
          .replace(/\+/g, ' ') +
        '"}'
    )
}

/**
 * 将字符串转换成货币格式
 * @param {String} str 
 */
function FormatMoney (str){
    return str.replace( /\B(?=(?:\d{3})+$)/g, ',' ); 
}

/**
 * 给DOM绑定事件-兼容ie8以下
 * @param {DOM} target 目标DOM元素
 * @param {String} event 事件名
 * @param {Function} handler
 */
function addEvent (target, event, handler) {
    if (window.addEventListener) {
        target.addEventListener(event, handler);
    } else if (window.attachEvent) {
        target.attachEvent('on' + event, handler);
    }
}

/**
 * 给DOM解除绑定事件-兼容ie8以下
 * @param {DOM} target 目标DOM元素
 * @param {String} event 事件名
 * @param {Function} handler
 */
function removeEvent (target, event, handler) {
    if (window.removeEventListener) {
        target.removeEventListener(event, handler);
    } else if (window.detachEvent) {
        target.detachEvent('on' + event, handler);
    }
}

/**
 * 获取鼠标相对于body坐标
 * @param {Object} e
 */
function getMousePosition(e){
    if(!e) e = window.event;
    if(e.pageX || e.pageY){
        return {x: e.pageX, y: e.pageY};
    }
    return {
        x: e.clientX + document.documentElement.scrollLeft - document.body.clientLeft,
        y: e.clientY + document.documentElement.scrollTop  - document.body.clientTop
    };
}

/**
 * 获取DOM相对于body坐标
 * @param {DOM} dom 
 */
function getElPosition(dom) {
    var t = dom.offsetTop;
    var l = dom.offsetLeft;
    dom = dom.offsetParent;
    while (dom) {
        t += dom.offsetTop;
        l += dom.offsetLeft;
        dom = dom.offsetParent;
    }; 
    return {
        top: t,
        left: l
    };
}

/**
 * 生成uuid
 */
function getUUID() {
    function s4 () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1)
    }
    return (
        s4() + s4() + '-' + s4() + '-' + s4() +  '-' + s4() + '-' + s4() + s4() + s4()
    )
}
