'use strict';
(function () {
    String.prototype.ensureStart = function (str) {
        if (!(this.startsWith(str))) {
            return str + this;
        } else {
            return this;
        }
    };
    String.prototype.ensureEnd = function (str) {
        if (!(this.endsWith(str))) {
            return this + str;
        } else {
            return this;
        }
    };
    String.prototype.isEmpty = function () {
        return this === '';
    };
    String.prototype.truncate = function (n) {
        let length = this.length;
        if (n > length) {
            return this;
        } else if (n < 4) {
            return '.'.repeat(n);
        } else if (n <= length) {
            let newValue = this;
            while (newValue.lastIndexOf(' ') > -1) {
                if (newValue.lastIndexOf(' ') + 3 <= n) {
                    newValue = newValue.replace(newValue.slice(newValue.lastIndexOf(' ')), '...');
                    return newValue;
                } else {
                    newValue = newValue.split('');
                    newValue.splice(newValue.lastIndexOf(' '), newValue.length - newValue.lastIndexOf(' '));
                    newValue = newValue.join('');
                }
            }
            if (newValue.lastIndexOf(' ') === -1) {
                return this.slice(0, n - 3) + '...';
            }

        }
    };
    String.prototype.format = function () {
        let argumentsArray = Array.from(arguments);
        let stringResult = argumentsArray[0];

        for (let i = 1; i < argumentsArray.length; i++) {
            stringResult = stringResult.replace(/{\d+}/, argumentsArray[i]);
        }
        console.log(stringResult);
    }


})();
//Test the code
// let str = 'my string';
// str = str.ensureStart('my');
// str = str.ensureStart('hello ');
// str = str.truncate(16);
// str = str.truncate(14);
// str = str.truncate(8);
// str = str.truncate(4);
// str = str.truncate(2);
// str = String.format('The {0} {1} fox',
//     'quick', 'brown');
// str = String.format('jumps {0} {1}',
//     'dog');

