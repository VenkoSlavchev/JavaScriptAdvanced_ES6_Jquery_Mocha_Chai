'use strict';
let rgbToHexColor = require('../3_RGB_To_Hex').rgbToHexColor;
let expect = require('chai').expect;

describe('Test rgbToHexColor(Number,Number,Number)', function () {
    it('Should return #FFFFFF for (255,255,255)', function () {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
    it('Should return #000000 for (0,0,0)', function () {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });
    it('Should return #FAA460 for (250,164,96)', function () {
        expect(rgbToHexColor(250, 164, 96)).to.equal('#FAA460');
    });
    it('Should return undefined for (null,null,null)', function () {
        expect(rgbToHexColor(null, null, null)).to.be.undefined;
    });
    it('Should return undefined for ([1],[2],[3])', function () {
        expect(rgbToHexColor([1], [2], [3])).to.be.undefined;
    });
    it('Should return undefined for (1,2,NaN)', function () {
        expect(rgbToHexColor(1, 2, NaN)).to.be.undefined;
    });
    it('Should return undefined for (-1,255,255)', function () {
        expect(rgbToHexColor(-1, 255, 255)).to.be.undefined;
    });
    it('Should return undefined for (245,255,265)', function () {
        expect(rgbToHexColor(245, 255, 265)).to.be.undefined;
    });
    it('Should return undefined for ("125","125","125")', function () {
        expect(rgbToHexColor('125', '125', '125')).to.be.undefined;
    });
    it('Should return #7D7DFF for (125,125,255.00000000000001)', function () {
        expect(rgbToHexColor(125, 125, 255.00000000000001)).to.be.equal('#7D7DFF');
    });
    it('Should return undefined for (125,125,255.000000000001)', function () {
        expect(rgbToHexColor(125, 125, 255.000000000001)).to.be.undefined;
    });
    it('Should return undefined for ()', function () {
        expect(rgbToHexColor()).to.be.undefined;
    });


});
