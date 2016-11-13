'use strict';
function result(number) {
    let result = [1, 1];
    if (number > 2) {
        for (let i = 2; i < number; i++) {
            result[i] = result[i - 2] + result[i - 1];
        }
    } else if (number === 1) {
        result = [1];
    }
    return result;
}

//Test the code
// result(5);

