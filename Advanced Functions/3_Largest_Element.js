'use strict';
function largest(arr) {
    let biggest = Number.NEGATIVE_INFINITY;

    arr.forEach(x => {
        if (x > biggest) {
            biggest = x;
        }
    });
    return biggest;
}
//Test the code
// largest([10, 20, 5]);