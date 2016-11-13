'use strict';
let list = require('../2_Add_Delete_in_List');
let expect = require('chai').expect;

describe('Test list object', function () {
    //reset the list manually - harcode
    // beforeEach(function () {
    //     for (let i = 0; i < 10; i++) {
    //         list.delete(0);
    //     }
    // });
    describe('Test the list object and if it has all described properties', function () {
        it('Should return true if list is of type object', function () {
            expect(typeof list).to.equal('object');
        });
        it('Should have property add', function () {
            expect(list).to.have.property('add');
        });
        it('Should have property delete', function () {
            expect(list).to.have.property('delete');
        });
    });
    describe('Test if list object add behave correct', function () {
        it('should return correct 1, 2, {}, asddwasd458, NaN', function () {
            list.add(1);
            list.add(2);
            list.add({});
            list.add('asddwasd458');
            list.add(NaN);
            expect(list.toString()).to.equal('1, 2, [object Object], asddwasd458, NaN');
        });
        it('should return "5" where you add(5) only one element ', function () {
            list.add(5);
            expect(list.toString()).to.equal('5');
        });
        it('should return "" where you add() only one element ', function () {
            list.add();
            expect(list.toString()).to.equal('');
        })
    });
    describe('Test if list object delete behave correct', function () {
        it('should return  1, 2, 3, when remove last element', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            list.delete(3);
            expect(list.toString()).to.equal('1, 2, 3');
        });
        it('should return 2, 3 when delete last and first elements', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            list.delete(3);
            list.delete(0);
            expect(list.toString()).to.equal('2, 3');
        });
        it('should return the element when you delete it', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            expect(list.delete(3)).to.equal(4);
        });
        it('should return undefined and not delete anything if index is undefined', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            expect(list.delete(-8)).to.equal(undefined);
            expect(list.delete(8)).to.equal(undefined);
            expect(list.toString()).to.equal('1, 2, 3, 4')
        })
    })
});