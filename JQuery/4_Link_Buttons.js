'use strict';
function attachEvents() {
    $('a').each(function () {
        $(this).on('click', function () {
            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
        })
    })

}