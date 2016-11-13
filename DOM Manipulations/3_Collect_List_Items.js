'use strict';
function extractText() {
    $('#items li').each(function () {
        $('#result').append($(this).text() + '\n');
    });
}