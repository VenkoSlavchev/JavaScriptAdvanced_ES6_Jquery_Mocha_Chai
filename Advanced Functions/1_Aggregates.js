'use strict';
function aggregate(arr) {
    let sum = 0,
        product = 1,
        biggest = Number.NEGATIVE_INFINITY,
        smallest = Number.POSITIVE_INFINITY,
        join = '';
    arr.forEach(x => {
        sum += x;
        product *= x;
        if (x > biggest) {
            biggest = x;
        }
        if (x < smallest) {
            smallest = x;
        }
        join += String(x);
    });
    if (arr.length < 1) {
        product = 0;
    }
    console.log(`Sum = ${sum}\nMin = ${smallest}\nMax = ${biggest}\nProduct = ${product}\nJoin = ${join}`);
}
//Test the code
// aggregate([5, -3, 20, 7, 0.5]);