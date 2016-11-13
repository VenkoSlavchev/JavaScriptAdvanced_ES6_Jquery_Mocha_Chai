'use strict';
(function solve() {
    Array.prototype.last = function () {
        let _this = this;
        return _this.pop();
    };
    Array.prototype.skip = function (n) {
        let _this = this;
        _this.splice(0, n);
        return _this;
    };
    Array.prototype.take = function (n) {

        let _this = this;
        return _this.slice(0, n);
    };
    Array.prototype.sum = function () {
        let _this = this;
        let sum = 0;
        _this.forEach(x => sum += x);
        return sum;
    };
    Array.prototype.average = function () {
        let _this = this;
        let sum = 0;
        _this.forEach(x => sum += x);
        return sum / _this.length;
    }
})();
//Test the code
// console.log([1,2,3].last());
//console.log([1, 2, 3].skip(1)[1]);
// console.log([1,2,3,4434].take(1));
// console.log([1,2,3,4434].sum());
// console.log([1,2,3,4].average());