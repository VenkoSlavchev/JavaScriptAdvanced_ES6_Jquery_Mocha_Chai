'use strict';
function solve(selector) {
    $(selector).on('click', function () {
        let text = $('#content p strong').text();
        $('<div>').attr('id', 'summary').appendTo($('.holder'));
        $('<h2>').text('Summary').appendTo($('#summary'));
        $('<p>').text(text).appendTo($('#content').parent());
    });
}

