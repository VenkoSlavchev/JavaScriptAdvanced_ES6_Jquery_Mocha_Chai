'use strict';
class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = Number(length);
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength - length < 0 || this.innerLength - length < 3
            ? this.innerLength = 0 : this.innerLength -= length


    }

    toString() {
        if (this.innerLength === 0) {
            return '...';
        } else if (this.innerLength < this.innerString.length) {
            let elementsToRemove = this.innerString.length - this.innerLength,
                result = this.innerString.slice(0, -(elementsToRemove));
            return result + '...';
        } else {
            return this.innerString;
        }
    }

}
//Test the code
// let str = new Stringer('Pesho e golqm bokliuk',9);
// str.increase(3);
// str.decrease(10);
// console.log(str.toString());