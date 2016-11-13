'use strict';
let lookupChar = require('../2_Char_LookUp').lookupChar;
let expect = require('chai').expect;

describe('Test function lookupChar that returns one Character from given string and given index', function () {
    it('Should return  for lookupChar("12345",2)', function () {
        expect(lookupChar("12345", 2)).to.have.lengthOf(1);
    });
    it('Should return 3 for lookupChar("12345",2)', function () {
        expect(lookupChar("12345", 2)).to.be.equal('3');
    });
    it('Should return o for lookupChar("Pesho",4)', function () {
        expect(lookupChar("Pesho", 4)).to.be.equal('o');
    });
    it('Should return undefined for lookupChar(["Pesho"],4)', function () {
        expect(lookupChar(['Pesho'], 4)).to.be.undefined;
    });
    it('Should return undefined for lookupChar(["Pesho"])', function () {
        expect(lookupChar(['Pesho'])).to.be.undefined;
    });
    it('Should return undefined for lookupChar(4)', function () {
        expect(lookupChar(4)).to.be.undefined;
    });
    it('Should return undefined for lookupChar()', function () {
        expect(lookupChar()).to.be.undefined;
    });
    it('Should return undefined for lookupChar("Pesho1",1.4)', function () {
        expect(lookupChar('Pesho1', 1.4)).to.be.undefined;
    });
    it('Should return undefined for lookupChar("a1b2","0")', function () {
        expect(lookupChar('a1b2', '0')).to.be.undefined;
    });
    it('Should return undefined for lookupChar("a1b2",{0:0})', function () {
        expect(lookupChar('a1b2', {0: 0})).to.be.undefined;
    });
    it('Should return undefined for lookupChar("a1b2",null)', function () {
        expect(lookupChar('a1b2', null)).to.be.undefined;
    });
    it('Should return Incorrect index for lookupChar("a1b2",5)', function () {
        expect(lookupChar('a1b2', 5)).to.be.equal('Incorrect index');
    });
    it('Should return Incorrect index for lookupChar("a1b2",-5)', function () {
        expect(lookupChar('a1b2', -5)).to.be.equal('Incorrect index');
    });


});