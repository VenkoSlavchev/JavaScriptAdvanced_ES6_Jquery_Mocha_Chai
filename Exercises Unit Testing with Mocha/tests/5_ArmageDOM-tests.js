"use strict";
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
global.$ = require('jquery')(window);
let nuke = require('../5_ArmageDOM').nuke;


describe('ArmageDOM', function () {
    before(function () {
        document.body.innerHTML = `<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>`;
//        $ = require('jquery');
    });
    describe('Test nuke function with incorrect input', function () {
        it('with one selector should not change anything', function () {
            let firstSelector = '#target',
                elementsInBodyBefore = $('body').find('*').length;
            nuke(firstSelector);
            let elementsInBodyAfter = $('body').find('*').length;
            expect(elementsInBodyBefore).to.be.equal(elementsInBodyAfter)
        });
        it('with two selectors but one that is not correct selector should not change anything', function () {
            let firstSelector = 'AlaBala',
                secondSelector = '.nested',
                elementsInBodyBefore = $('body').find('*').length;
            nuke(firstSelector, secondSelector);
            let elementsInBodyAfter = $('body').find('*').length;
            expect(elementsInBodyBefore).to.be.equal(elementsInBodyAfter)
        });
        it('with two selectors but one that is not correct type of selectors should not change anything', function () {
            let firstSelector = 125485,
                secondSelector = '.nested',
                elementsInBodyBefore = $('body').find('*').length;
            nuke(firstSelector, secondSelector);
            let elementsInBodyAfter = $('body').find('*').length;
            expect(elementsInBodyBefore).to.be.equal(elementsInBodyAfter)
        });
        it('with two exactly the same selectors should not change anything', function () {
            let firstSelector = '.nested',
                secondSelector = '.nested',
                elementsInBodyBefore = $('body').find('*').length;
            nuke(firstSelector, secondSelector);
            let elementsInBodyAfter = $('body').find('*').length;
            expect(elementsInBodyBefore).to.be.equal(elementsInBodyAfter)
        });
    });

    describe('Test with correct parameters', function () {
        it('test with correct parameters', function () {
            let firstSelector = '.target',
                secondSelector = '.nested',
                elementsInBodyBefore = $('body').find('*').length,
                matchedElements = $(firstSelector).filter($(secondSelector)).children().length + 1;
            nuke(firstSelector, secondSelector);
            let elementsInBodyAfter = $('body').find('*').length;
            expect(matchedElements).to.be.equal(elementsInBodyBefore - elementsInBodyAfter)
        })
    });

});


