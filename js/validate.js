
/**
 * 邮箱验证
 * @param {String} str 
 */
function validEmail(str) {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return reg.test(str)
}

/**
 * 身份证验证
 * @param {String} val 
 */
function validCard(val) {
    if(val.match(/(^\d{15}$)|(^\d{17}([0-9]|[Xx])$)/)) {
        var idCardWi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        var idCardY = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];
        var idCardWiSum = 0;
        for(var i = 0; i < 17; i++) {
            idCardWiSum += val.substring(i, i+1) * idCardWi[i];
        }
        var idCardMod = idCardWiSum % 11;
        var idCardLast = val.substring(17);
        if(idCardMod == 2) {
            return idCardLast == 'X' || idCardLast == 'x';
        }else {
            return idCardLast == idCardY[idCardMod];
        }
    }else {
        return false;
    }
}

/**
 * 手机号验证
 * @param {String} str 
 */
function validPhone(str) {
    return /^1((3[\d])|(4[5,6,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[1-3,5-8])|(9[1,8,9]))\d{8}$/.test(str)
}

/**
 * 正整数或0
 * @param {String} str 
 */
function validNum(str) {
    return /^(0?|[1-9][0-9]*)$/.test(str)
}

/**
 * 最多两位小数 负数 (-)?
 * @param {String} str 
 */
function validDecimal(str) {
    return /^(0|[1-9]\d*)($|\.\d{1,2}$)/.test(str)
}

/**
 * 中文验证
 * @param {String} str 
 */
function validChinese(str) {
    return /^[\u4E00-\u9FA5]+$/.test(str)
}