'use strict';
function recangles(arr) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        let rectangle = {
            width: arr[i][0],
            height: arr[i][1],
            area: function () {
                return rectangle.width * rectangle.height;
            },
            compareTo: function (otherObj) {
                if (rectangle.area() === otherObj.area()) {
                    return otherObj.width - rectangle.width
                } else {
                    return otherObj.area() - rectangle.area();
                }
            }
        };
        resultArr.push(rectangle);
    }

    resultArr.sort((rect1, rect2) => rect1.compareTo(rect2));

    return resultArr;
}
//Test the code
//recangles([[10, 5], [3, 20], [5, 12]]);