'use strict';
function sort() {
    let array = arguments[0],
        sortCondition = arguments[1];
    sortCondition === 'asc' ? array.sort((a, b) => a - b) : array.sort((a, b) => b - a);
    return array;
}
//Test the code
//sort([14, 7, 17, 6, 8], 'desc');