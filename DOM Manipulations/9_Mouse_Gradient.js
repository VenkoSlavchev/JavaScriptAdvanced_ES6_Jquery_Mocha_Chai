'use strict';
function attachGradientEvents () {
    $('#gradient-box').on('mousemove', function (event) {
        $('#result').text(Math.floor(event.pageX/3)-3 + '%');
    })
}