'use strict';
function solve(a, b) {
    if (a == 0)
        return b;
    while (b != 0) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }
    return a;
}
//Test the code
//console.log(solve(252, 105));