'use strict';
function solve() {
    return {
        numbers: [].sort((a, b)=> a > b),

        returnValues: function () {
            console.log(this.numbers);
        },
        add: function (element) {
            if (!(isNaN(element))) {
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

        },
        remove: function (index) {
            this.size--;
            if (index < this.numbers.length)
                this.numbers.splice(index, 1);
        },
        get: function (index) {
            if (index < this.numbers.length)
                return this.numbers[index];

        },

        size: 0

    };

}

//Test the code
// let result = solve();
// result.add(-9);
// result.add(0);
// result.add(-1);
// result.add(51);
// result.add(-151);
// result.add(544);
// result.add('sd');
//
// console.log(result.size);
//
//
// result.returnValues();