'use strict';
let isOddOrEven = require('../1_Even_or_Odd').isOddOrEven;
let expect = require('chai').expect;

describe('Test function isOddOrEven that shows if the length of a string is odd or even', function () {
    it('Should return odd for isOddOrEven("1234 ")', function () {
        expect(isOddOrEven("1234 ")).to.equal('odd');
    });
    it('Should return even for isOddOrEven("3 4 ")', function () {
        expect(isOddOrEven('3 4 ')).to.equal('even');
    });
    it('Should return even for isOddOrEven("")', function () {
        expect(isOddOrEven('')).to.equal('even');
    });
    it('Should return undefined for isOddOrEven([odd,even])', function () {
        expect(isOddOrEven(['odd', 2])).to.be.undefined;
    });
    it('Should return undefined for isOddOrEven({"asd":"asdw"})', function () {
        expect(isOddOrEven({'asd': 'asdw'})).to.be.undefined;
    });
    it('Should return undefined for isOddOrEven()', function () {
        expect(isOddOrEven()).to.be.undefined;
    });
    it('Should return correct values', function () {
        expect(isOddOrEven('tra la la')).to.be.equal('odd');
        expect(isOddOrEven('Pesho1')).to.be.equal('even');
        expect(isOddOrEven('Nomer 1 e Pesho')).to.be.equal('odd');
        expect(isOddOrEven('Na balalaika')).to.be.equal('even');
    });


});
