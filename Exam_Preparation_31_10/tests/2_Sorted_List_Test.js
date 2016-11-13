'use strict';
let SortedList = require('../2_Sorted_List');
let expect = require('chai').expect;

describe('Test class SortedList', function () {
    describe('Test if class is function and if it has all described properties', function () {
        it('Should return true if class SortedList is of type function', function () {
            expect(typeof SortedList).to.equal('function');
        });
        it('Should return true if class SortedList has own property add', function () {
            expect(SortedList.prototype).to.have.property('add');
        });
        it('Should return true if class SortedList has own property add and it is a function', function () {
            expect(typeof SortedList.prototype.add === 'function').to.equal(true);
        });
        it('Should return true if class SortedList has own property remove', function () {
            expect(SortedList.prototype).to.have.property('remove');
        });
        it('Should return true if class SortedList has own property remove and it is a function', function () {
            expect(typeof SortedList.prototype.remove === 'function').to.equal(true);
        });
        it('Should return true if class SortedList has own property get', function () {
            expect(SortedList.prototype).to.have.property('get');
        });
        it('Should return true if class SortedList has own property get and it is a function', function () {
            expect(typeof SortedList.prototype.get === 'function').to.equal(true);
        });
        it('Should return true if class SortedList has own property get', function () {
            expect(typeof Object.getOwnPropertyDescriptor(SortedList.prototype, 'size').get === 'function').to.equal(true);
        });
        it('Should return true if class SortedList has own property get', function () {
            expect(Object.getOwnPropertyDescriptor(SortedList.prototype, 'size').get.name).to.equal('size');
        });

    });

    describe('Test add functionallity and the order of elements of the class SortedList', function () {
        it('Element of index 0 should be 4 if we add the number 4', function () {
            let x = new SortedList;
            x.add(4);
            expect(x.get(0)).to.equal(4);
        });
        it('Elements of index 0 and index 3 should be -4 and 58 if we add the numbers 20,58,-4,0', function () {
            let x = new SortedList;
            x.add(20);
            x.add(58);
            x.add(-4);
            x.add(0);
            expect(x.get(0)).to.equal(-4);
            expect(x.get(3)).to.equal(58);
        });
        it('There should be elements of type that is not a number if something not a number is passed to the function add', function () {
            let x = new SortedList;
            x.add(undefined);
            x.add(NaN);
            x.add({5: 5});
            x.add(8);
            x.add(-2);
            expect(x.get(4)).to.equal(undefined);
            expect(x.get(2)).to.equal(-2);
            expect(x.get(3)).to.equal(8);
        });
    });
    describe('Test remove functionallity of the class SortedList', function () {
        it('There should be removed all elements except -2 and {5:5}', function () {
            let x = new SortedList;
            x.add(undefined);
            x.add(NaN);
            x.add({5: 5});
            x.add(8);
            x.add(-2);
            x.remove(4);
            x.remove(0);
            x.remove(2);
            expect(x.get(1)).to.equal(-2);
        });
        it('There should throw error if index was out of boundaries', function () {

            let x = new SortedList;
            x.add(8);
            x.add(-2);
            x.remove(0);
            expect(()=> x.remove(2)).to.throw(Error);
        });
        it('There should throw error if index was out of boundaries', function () {

            let x = new SortedList;
            x.add(8);
            x.add(-2);
            x.remove(0);
            expect(()=> x.remove(-2)).to.throw(Error);
        });

        it('There should throw error if collection is empty', function () {
            let x = new SortedList;
            x.add(8);
            x.add(-2);
            x.remove(0);
            x.remove(0);
            expect(()=> x.remove(0)).to.throw(Error);
        });
    })
    describe('Test get functionallity', function () {
        it('Should return -2 for getting element at index 0', function () {
            let x = new SortedList;
            x.add(8);
            x.add(-2);

            expect(x.get(0)).to.equal(-2);
        });
        it('Should return throw error for getting element at index -3', function () {
            let x = new SortedList;
            x.add(8);
            x.add(-2);

            expect(()=>x.get(-3)).to.throw(Error);
        });
        it('Should return throw error for getting element in empty collection', function () {
            let x = new SortedList;
            expect(()=>x.get(0)).to.throw(Error);
        });
    })
    describe('Test size property', function () {
        it('Should return 3', function () {
            let x = new SortedList;
            x.add(8);
            x.add(-2);
            x.add(9);

            expect(x.size).to.equal(3);
        });
    })


});
