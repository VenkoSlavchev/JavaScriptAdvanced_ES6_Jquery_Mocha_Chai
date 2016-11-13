'use strict';

class Collection {
    constructor() {
        this.numbers = [].sort((a, b)=> a > b);
        this.size = 0;
    }

    returnValues() {
        console.log(this.numbers);
    }

    add(element) {
        if ((typeof element === 'number')) {
            this.size++;

            if (this.numbers.length === 0) {
                this.numbers.push(Number(element));
            } else {

                for (let i = 0; i < this.numbers.length; i++) {
                    if (element <= this.numbers[i]) {
                        this.numbers.splice(i, 0, element);
                        break;
                    }
                    else if (i === this.numbers.length - 1) {
                        this.numbers.push(element);
                        break;
                    }
                }
            }

        }

    }

    remove(index) {
        this.size--;
        if (index < this.numbers.length)
            this.numbers.splice(index, 1);
    }

    get(index) {
        if (index < this.numbers.length)
            return this.numbers[index];

    }
}
//Test the code
// let result = new Collection();
// result.add(-9);
// result.add(0);
// result.add(-1);
// result.add(51);
// result.add(-151);
// result.add(5);
// result.add('02');
// result.add('10');
//
// console.log(typeof result.size);
//
//
// result.returnValues();
