'use strict';
window.onload = function () {
    (function substract() {
        $('#result').text(function () {
            return Number.parseFloat($('#firstNumber').val()) - Number.parseFloat($('#secondNumber').val()) ;
        } );
    })()
};