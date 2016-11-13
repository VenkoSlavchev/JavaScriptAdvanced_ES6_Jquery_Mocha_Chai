'use strict';
let sum = require('../1_Sum_of_numbers').sum;
let expect = require('chai').expect;


describe('Test sum(arr)', function () {
        it('Should return 3 for [1,2]', function () {
            expect(sum([1, 2])).to.equal(3);
        });
        it('Should return 0 for []', function () {
            expect(sum([])).to.equal(0);
        });
        it('Should return NaN for ["string"]', function () {
            expect(sum(['string'])).to.be.NaN;
        });
        it('Should return Undefined for [undefined]', function () {
            expect(sum([undefined])).to.be.NaN;
        });
        it('Should return -23 for [-11,-12]', function () {
            expect(sum([-11, -12])).to.be.equal(-23);
        });
        it('Should return 0.30000000000000004  for [0.1,0.2]', function () {
            expect(sum([0.1, 0.2])).to.be.equal(0.30000000000000004);
        });
        it('Should return 0  for [null]', function () {
            expect(sum([null])).to.be.equal(0);
        });
        it('Should return NaN for [{obj:56}]', function () {
            expect(sum([{obj: 56}])).to.be.NaN;
        });


    }
);