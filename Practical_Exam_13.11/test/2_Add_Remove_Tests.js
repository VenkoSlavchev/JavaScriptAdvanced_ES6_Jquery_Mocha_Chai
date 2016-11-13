'use strict';
let createList = require('../2_Unit_Tests_Add_Swap');
let expect = require('chai').expect;


describe('Test createList object', function () {
    let list;
    beforeEach(function () {
        list = createList();
    });
    describe('Test the list function and if it has all described properties', function () {
        it('Should return true if list is of type function', function () {
            expect(typeof list).to.equal('object');
        });
        it('Should have property add', function () {
            expect(list).to.have.property('add');
        });
        it('Should have property shiftLeft', function () {
            expect(list).to.have.property('shiftLeft');
        });
        it('Should have property shiftRight', function () {
            expect(list).to.have.property('shiftRight');
        });
        it('Should have property swap', function () {
            expect(list).to.have.property('swap');
        });
        it('Should have property toString', function () {
            expect(list).to.have.property('toString');
        });
    });
    describe('Test add functionallity', function () {
        it('Should return 1, asd, [object Object], -23', function () {
            list.add(1);
            list.add('asd');
            list.add({});
            list.add(-23);
            expect(list.toString()).to.equal('1, asd, [object Object], -23');
        });
        it('Should return 1, asd, []', function () {
            list.add(1);
            list.add('asd');
            list.add([]);
            expect(list.toString()).to.equal('1, asd, ');
        });
    });
    describe('Test shifRight functionallity', function () {
        it('Should return  -23, 1, asd, [object Object]', function () {
            list.add(1);
            list.add('asd');
            list.add({});
            list.add(-23);
            list.shiftRight();
            expect(list.toString()).to.equal('-23, 1, asd, [object Object]');
        });

    });
    describe('Test shifLeft functionallity', function () {
        it('Should return  asd, [object Object], -23, 1', function () {
            list.add(1);
            list.add('asd');
            list.add({});
            list.add(-23);
            list.shiftLeft();
            expect(list.toString()).to.equal('asd, [object Object], -23, 1');
        });

    });
    describe('Test swap functionallity', function () {
        it('Should return true and asd, 1, [object Object], -23', function () {
            list.add(1);
            list.add('asd');
            list.add({});
            list.add(-23);
            expect(list.swap(0, 1)).to.equal(true);
            expect(list.toString()).to.equal('asd, 1, [object Object], -23');
        });
        it('Should return true and asd, 1, [object Object], -23', function () {
            list.add(1);
            list.add('asd');
            list.add({});
            list.add(-23);
            expect(list.swap(1, 0)).to.equal(true);
            expect(list.toString()).to.equal('asd, 1, [object Object], -23');
        });
        it('Should return false and 1, asd, [object Object], -23', function () {
            list.add(1);
            list.add('asd');
            list.add({});
            list.add(-23);
            expect(list.swap(0, 0)).to.equal(false);
            expect(list.toString()).to.equal('1, asd, [object Object], -23');
        });
        it('Should return  false and 1, asd, [object Object], -23', function () {
            list.add(1);
            list.add('asd');
            list.add({});
            list.add(-23);
            expect(list.swap(0.1, 0)).to.equal(false);
            expect(list.toString()).to.equal('1, asd, [object Object], -23');
        });
        it('Should return  true and asd, 1, [object Object], -23', function () {
            list.add(1);
            list.add('asd');
            list.add({});
            list.add(-23);
            expect(list.swap(0, 1.000)).to.equal(true);
            expect(list.toString()).to.equal('asd, 1, [object Object], -23');
        });
        it('Should return  true and 1, [object Object], asd, -23', function () {
            list.add(1);
            list.add('asd');
            list.add({});
            list.add(-23);
            expect(list.swap(2.00000000, 1.000)).to.equal(true);
            expect(list.toString()).to.equal('1, [object Object], asd, -23');
        });
        it('Should return  false and 1, asd, [object Object], -23', function () {
            list.add(1);
            list.add('asd');
            list.add({});
            list.add(-23);
            expect(list.swap(2.0000000000000009, 1.050)).to.equal(false);
            expect(list.toString()).to.equal('1, asd, [object Object], -23');
        });
        it('Should return 1, asd, -23, ', function () {
            list.add(1);
            list.add('asd');
            list.add(-23);
            list.add('');
            list.swap(1, 4);
            list.swap(-1, 4);
            list.swap(-1, 1);
            list.swap(1, 1);
            list.swap(-1, -1);
            expect(list.swap()).to.equal(false);
            expect(list.swap('string', -1)).to.equal(false);
            expect(list.swap('string')).to.equal(false);
            expect(list.swap(0)).to.equal(false);
            expect(list.swap(NaN)).to.equal(false);
            expect(list.swap(undefined)).to.equal(false);
            expect(list.swap(1, 2)).to.equal(true);
            expect(list.toString()).to.equal('1, -23, asd, ');
            expect(list.swap('', '')).to.equal(false);
            expect(list.swap(undefined, '')).to.equal(false);
            expect(list.swap(undefined, undefined)).to.equal(false);
            expect(list.swap('1', '0')).to.equal(false);
            expect(list.swap(1, '1')).to.equal(false);
            expect(list.swap(1, 1)).to.equal(false);
            list.swap(1, 2);
            expect(list.toString()).to.equal('1, asd, -23, ');

        });


    });

    describe('Test all functionalities mixed', function () {
        it('Should return  -23, 1, asd, ', function () {
            list.add(1);
            expect(list.toString()).to.equal('1');
            list.shiftLeft();
            expect(list.toString()).to.equal('1');
            list.add('asd');
            list.shiftLeft();
            expect(list.toString()).to.equal('asd, 1');
            list.add(-23);
            list.shiftLeft();
            expect(list.toString()).to.equal('1, -23, asd');
            list.add('');
            expect(list.toString()).to.equal('1, -23, asd, ');
            list.shiftLeft();
            list.shiftLeft();
            list.shiftRight();
            expect(list.swap(0, 5)).to.equal(false);
            expect(list.toString()).to.equal('-23, asd, , 1');
            list.shiftLeft();
            list.shiftLeft();
            list.shiftLeft();
            expect(list.swap(0, 5)).to.equal(false);
            expect(list.swap(0, 2)).to.equal(true);
            expect(list.toString()).to.equal('asd, -23, 1, ');
            list.shiftRight();
            expect(list.swap(0, 2)).to.equal(true);
            expect(list.toString()).to.equal('-23, asd, , 1');
            list.shiftRight();
            expect(list.swap(0, 1)).to.equal(true);
            expect(list.swap(0, 0)).to.equal(false);
            expect(list.swap(0, 1)).to.equal(true);
            expect(list.swap(0, 1)).to.equal(true);
            expect(list.toString()).to.equal('-23, 1, asd, ');
        });

    });


});