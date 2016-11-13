'use strict';
let mathEnforcer = require('../3_Math_Enforcer').mathEnforcer;
let expect = require('chai').expect;

describe('Test the object mathEnforcer which should have properties addFive(num), subtractTen(num) and sum(num1, num2)' +
    ' - and they should have strict functionality', function () {

    describe('Test the object mathEnforcer which should have properties addFive, subtractTen and sum and they must be functions'
        , function () {
            it('Should return true for check if mathEnforcer is object ', function () {
                let type = typeof(mathEnforcer);
                expect(type).to.be.equal('object');
            });
            it('Should return true for check if mathEnforcer has property addFive ', function () {
                expect(mathEnforcer).to.have.property('addFive');
            });
            it('Should return true for check if mathEnforcer has property subtractTen ', function () {
                expect(mathEnforcer).to.have.property('subtractTen');
            });
            it('Should return true for check if mathEnforcer has property sum ', function () {
                expect(mathEnforcer).to.have.property('sum');
            });
            it('Should return true for check if mathEnforcer has property sum ', function () {
                let type = typeof(mathEnforcer.addFive);
                expect(type).to.be.equal('function');
            });
            it('Should return true for check if mathEnforcer has property sum ', function () {
                let type = typeof(mathEnforcer.subtractTen);
                expect(type).to.be.equal('function');
            });
            it('Should return true for check if mathEnforcer has property sum ', function () {
                let type = typeof(mathEnforcer.sum);
                expect(type).to.be.equal('function');
            });
        });

    describe('Test the object mathEnforcer functionallity with correct input and correct output'
        , function () {
            it('Should return 8 for check if mathEnforcer.addFive(3)', function () {
                expect(mathEnforcer.addFive(3)).to.be.equal(8);
            });
            it('Should return -18 for check if mathEnforcer.addFive(-23)', function () {
                expect(mathEnforcer.addFive(-23)).to.be.equal(-18);
            });
            it('Should return -18.21 for check if mathEnforcer.addFive(-23.21)', function () {
                expect(mathEnforcer.addFive(-23.21)).to.be.equal(-18.21);
            });
            it('Should return 22 for check if mathEnforcer.subtractTen(32)', function () {
                expect(mathEnforcer.subtractTen(32)).to.be.equal(22);
            });
            it('Should return -18 for check if mathEnforcer.subtractTen(-8)', function () {
                expect(mathEnforcer.subtractTen(-8)).to.be.equal(-18);
            });
            it('Should return -38.21 for check if mathEnforcer.subtractTen(-28.21)', function () {
                expect(mathEnforcer.subtractTen(-28.21)).to.be.equal(-38.21);
            });
            it('Should return 5 for check if mathEnforcer.sum(2,3)', function () {
                expect(mathEnforcer.sum(2, 3)).to.be.equal(5);
            });
            it('Should return 0.30000000000000004 for check if mathEnforcer.sum(0.1,0.2)', function () {
                expect(mathEnforcer.sum(0.1, 0.2)).to.be.equal(0.30000000000000004);
            });
            it('Should return -153 for check if mathEnforcer.sum(22,-175)', function () {
                expect(mathEnforcer.sum(22, -175)).to.be.equal(-153);
            });
        });

    describe('Test the object mathEnforcer functionality addFive with incorrect input'
        , function () {
            it('Should return undefined for check if mathEnforcer.addFive("3")', function () {
                expect(mathEnforcer.addFive('3')).to.be.undefined;
            });
            it('Should return undefined for check if mathEnforcer.addFive([3])', function () {
                expect(mathEnforcer.addFive([3])).to.be.undefined;
            });
            it('Should return undefined for check if mathEnforcer.addFive(null)', function () {
                expect(mathEnforcer.addFive(null)).to.be.undefined;
            });
            it('Should return undefined for check if mathEnforcer.addFive()', function () {
                expect(mathEnforcer.addFive()).to.be.undefined;
            });

        });
    describe('Test the object mathEnforcer functionality subtractTen with incorrect input'
        , function () {
            it('Should return undefined for check if mathEnforcer.subtractTen("3")', function () {
                expect(mathEnforcer.subtractTen('3')).to.be.undefined;
            });
            it('Should return undefined for check if mathEnforcer.subtractTen([3])', function () {
                expect(mathEnforcer.subtractTen([3])).to.be.undefined;
            });
            it('Should return undefined for check if mathEnforcer.subtractTen(null)', function () {
                expect(mathEnforcer.subtractTen(null)).to.be.undefined;
            });
            it('Should return undefined for check if mathEnforcer.subtractTen()', function () {
                expect(mathEnforcer.subtractTen()).to.be.undefined;
            });

        });
    describe('Test the object mathEnforcer functionality sum with incorrect input'
        , function () {
            it('Should return undefined for check if mathEnforcer.sum("3")', function () {
                expect(mathEnforcer.sum('3', 6)).to.be.undefined;
            });
            it('Should return undefined for check if mathEnforcer.sum([3])', function () {
                expect(mathEnforcer.sum([3], '15')).to.be.undefined;
            });
            it('Should return undefined for check if mathEnforcer.sum(null)', function () {
                expect(mathEnforcer.sum(null, null)).to.be.undefined;
            });
            it('Should return undefined for check if mathEnforcer.sum()', function () {
                expect(mathEnforcer.sum()).to.be.undefined;
            });
            it('Should return undefined for check if mathEnforcer.sum(1)', function () {
                expect(mathEnforcer.sum(1)).to.be.undefined;
            });

        });

});
