'use strict';
let Extend = (function () {
    class Extensible {
        constructor() {
            this.id = Extensible.prototype._id || 0;
            Extensible.prototype._id = this.id + 1;

        }


        extend(objectToExtendWith) {
            for (let propName in objectToExtendWith) {
                if (objectToExtendWith.hasOwnProperty(propName)) {
                    if (typeof objectToExtendWith[propName] === 'function') {
                        this.__proto__ = {[propName]: objectToExtendWith[propName]};
                    }
                    else {
                        this[propName] = objectToExtendWith[propName];
                    }
                }
            }
        }


    }



    return Extensible;
})();
//Test the code
// let q = new Extend();
//
// q.extend({
//     extensionMethod: function () {
//     },
//     extensionProperty: 'someString'
// });

//console.log(q);
// let r = new Extend();
// console.log(r);

// let p = new Extend();
// console.log(p);
// let o = new Extend();
// console.log(o.id);
// let f = new Extend();
// console.log(f.id);