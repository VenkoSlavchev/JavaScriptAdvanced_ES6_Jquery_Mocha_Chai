'use strict';
(function solve() {
    let sum = 0;

    function add(param) {
        sum += param;
        return add
    }

    add.toString = function () {
        return sum;
    };
    return add;
})();
//Test the code
// let add = solve();
//console.log('' +add(1)(6)(-3));