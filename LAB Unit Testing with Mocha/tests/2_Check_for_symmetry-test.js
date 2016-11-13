'use strict';
let isSymmetric = require('../2_Check_For_Symetry').isSymmetric;
let expect = require('chai').expect;

describe('Test isSymmetric(arr)', function () {
        it('Should return true for [1,2,3,2,1]', function () {
            expect(isSymmetric([1, 2, 3, 2, 1])).to.equal(true);
        });
        it('Should return false for [1,2]', function () {
            expect(isSymmetric([1, 2])).to.equal(false);
        });
        it('Should return false for 1', function () {
            expect(isSymmetric(1)).to.equal(false);
        });
        it('Should return false for "asa"', function () {
            expect(isSymmetric('asa')).to.equal(false);
        });
        it('Should return false for {}', function () {
            expect(isSymmetric({})).to.equal(false);
        });
        it('Should return treu for [undefined,undefined]', function () {
            expect(isSymmetric([undefined, undefined])).to.equal(true);
        });
        it('Should return true for [undefined,null,undefined]', function () {
            expect(isSymmetric([undefined, null, undefined])).to.equal(true);
        });
        it('Should return true for []', function () {
            expect(isSymmetric([])).to.equal(true);
        });
        it('Should return false for ["asa"]', function () {
            expect(isSymmetric([])).to.equal(true);
        });
        it('Should return true for ["asa",function(){},[123],function(){},"asa"]', function () {
            expect(isSymmetric(["asa", function () {
            }, [123], function () {
            }, "asa"])).to.equal(true);
        });


    }
);
