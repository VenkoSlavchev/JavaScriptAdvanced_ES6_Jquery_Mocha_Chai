'use strict';
function extractText() {
    let arrayResult = [];
    $('#items li').each(function () {
        arrayResult.push($(this).text());
    });
    console.log(arrayResult);
    $('#result').append(arrayResult.join(', '));
}
