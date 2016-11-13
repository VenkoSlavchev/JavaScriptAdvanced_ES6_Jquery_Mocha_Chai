'use strict';
function closure() {
    let firstInput, secondInput, result;

    function init(selector1, selector2, resultSelector) {
        firstInput = $('#' + selector1);
        secondInput = $('#' + selector2);
        result = $('#' + resultSelector);

    }

    function add() {
        result.val(Number(firstInput.val()) + Number(secondInput.val()));
    }

    function subtract() {
        result.val(Number(firstInput.val()) - Number(secondInput.val()));
    }


    return {
        init,
        add,
        subtract
    }

}
//Test the code
let module = closure();
module.init('num1', 'num2', 'result');
$('#sumButton').on('click', module.add);
$('#subtractButton').on('click', module.subtract);
//return module;
