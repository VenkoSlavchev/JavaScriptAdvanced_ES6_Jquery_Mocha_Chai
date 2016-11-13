'use strict';
function solve() {
    let myObj = {};

    myObj.extend = function (templateObj) {
        for (let propName in templateObj) {
            if (templateObj.hasOwnProperty(propName)) {
                if (typeof templateObj[propName] === 'function') {
                    myObj.__proto__[propName] = templateObj[propName];
                } else {
                    myObj[propName] = templateObj[propName];
                }
            }
        }
    };

    return myObj;
}
//Test the code
// solve({
//     extensionMethod: function () {console.log('asd');},
//     extensionProperty: 'someString'
//     }
// );