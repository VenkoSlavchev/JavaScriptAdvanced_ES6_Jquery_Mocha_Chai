'use strict';
function showText() {
    $('#more').css('display','none');
    let span = $('#text').css('display','block');
    for (let i = 0; i < 10; i++) {
        span.clone().appendTo('body');
    }
}