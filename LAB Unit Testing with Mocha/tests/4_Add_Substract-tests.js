'use strict';
let createCalculator = require('../4_Add_Substract').createCalculator;
let expect = require('chai').expect;

describe('Test function createCalculator which returns a module (object), ' +
    'containing the functions add, subtract and get as properties', function () {
    let calc;
    beforeEach(function () {
        calc = createCalculator();
    });
    it('Should return 5 for add(3);add(2)', function () {
        calc.add(2);
        calc.add(3);
        expect(calc.get()).to.equal(5);
    });
    it('Should return 2 for add(3);subtract(2)add(3);subtract(2)', function () {
        calc.add(3);
        calc.subtract(2);
        calc.add(3);
        calc.subtract(2);
        expect(calc.get()).to.equal(2);
    });
    it('Should return -21 for subtract(20) subtract(1)', function () {
        calc.subtract(20);
        calc.subtract(1);
        expect(calc.get()).to.equal(-21);
    });
    it('Should return 0 for  add(0)', function () {
        calc.add(0);
        expect(calc.get()).to.equal(0);
    });
    it('Should return 10 for  add("5")add("5")', function () {
        calc.add('5');
        calc.add('5');
        expect(calc.get()).to.equal(10);
    });
    it('Should return NaN for add(NaN)', function () {
        calc.add(NaN);
        expect(calc.get()).to.be.NaN;
    });
    it('Should return 0.30000000000000004 for  add("0.1")add("0.2")', function () {
        calc.add(0.1);
        calc.add(0.2);
        expect(calc.get()).to.equal(0.30000000000000004);
    });
    it('Should return object', function () {
        expect(calc).to.be.instanceOf(Object);
    });
    it('Should return object with property add', function () {
        expect(calc).to.have.ownProperty('add');
    });
    it('Should return object with property subtract', function () {
        expect(calc).to.have.ownProperty('subtract');
    });
    it('Should return object with property get', function () {
        expect(calc).to.have.ownProperty('get');
    });
    it('Should return 0 for add()', function () {
        calc.add();
        expect(calc.get()).to.be.NaN;
    });
    it('Should return 0 for subtract()', function () {
        calc.subtract();
        expect(calc.get()).to.be.NaN;
    });


})