
/**
 * ajax封装
 * @param {Object} params 
 */
function ajaxFunc(params) {
    $.ajax({
        url: params.url || '',
        type: params.type || 'post',
        cash: false,
        async: params.async || true,
        dataType: 'text',
        contentType: 'application/json',
        data: JSON.stringify(params.data) || '',
        success: function(res){
            if(params.success) {
                params.success(JSON.parse(res));
            }
        },
        error: function(err){
            // toast('服务器连接失败~'); // 给出错误提示
            if(params.error){
                params.error(err);
            }
        }
    })
}

/**
 * 移动端错误提示
 * @param {String} msg 
 */
function toast(msg){
    $('.toast-box').remove();
    $('body').append('<div class="toast-box" style="padding: 8px 10px;' +
        'border-radius: 5px;' +
        'position: fixed;' +
        'max-width: 90%;' +
        'bottom: 80px;' +
        'left: 50%;' +
        'font-size: 12px;' +
        'line-height: 1.5;' +
        'background-color: rgba(0,0,0,.75);' +
        'color: #fff;' +
        'transform: translateX(-50%);' +
        '-webkit-transform: translateX(-50%);' +
        'opacity: 0;' +
        'z-index: 9999;">'+ msg +'</div>');
    $('.toast-box').animate({opacity: 1})
    setTimeout(function() {
        $('.toast-box').animate({opacity: 0},function(){
            $('.toast-box').remove();
        })
    }, 3000);
}
