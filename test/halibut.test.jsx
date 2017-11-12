import React from 'react';
import { expect } from 'code';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Halibut from '../src/halibut';
import COLORS, { WEATHERS } from 'chaetodon';

configure({ adapter: new Adapter() });

describe('Render Halibut in background of page', () => {

    let renderedHalibut;

    beforeEach(() => {
        renderedHalibut = shallow(<Halibut weather={WEATHERS.SUN}>Test Children</Halibut>);
    });

    it('halibut shall be rendered as div', () => {
        expect(renderedHalibut.type()).to.be.equal('div');
    })

    it('halibut shall have corrent children', () => {
        expect(renderedHalibut.children('Card').prop('children')).to.be.equal('Test Children');
    })

    it('halibut shall have corrent colors', () => {
        expect(renderedHalibut.children('Badge').at(0).prop('color')).to.be.equal(COLORS(WEATHERS.SUN)[0])
        expect(renderedHalibut.children('Badge').at(1).prop('color')).to.be.equal(COLORS(WEATHERS.SUN)[1])
        expect(renderedHalibut.children('Badge').at(2).prop('color')).to.be.equal(COLORS(WEATHERS.SUN)[2])
        expect(renderedHalibut.children('Badge').at(3).prop('color')).to.be.equal(COLORS(WEATHERS.SUN)[3])
        expect(renderedHalibut.children('Badge').at(4).prop('color')).to.be.equal(COLORS(WEATHERS.SUN)[4])
    })

    it('halibut shall have corrent colors (2)', () => {
        renderedHalibut = shallow(<Halibut weather={WEATHERS.WIND}>Test Children</Halibut>);
        expect(renderedHalibut.children('Badge').at(0).prop('color')).to.be.equal(COLORS(WEATHERS.WIND)[0])
        expect(renderedHalibut.children('Badge').at(1).prop('color')).to.be.equal(COLORS(WEATHERS.WIND)[1])
        expect(renderedHalibut.children('Badge').at(2).prop('color')).to.be.equal(COLORS(WEATHERS.WIND)[2])
        expect(renderedHalibut.children('Badge').at(3).prop('color')).to.be.equal(COLORS(WEATHERS.WIND)[3])
        expect(renderedHalibut.children('Badge').at(4).prop('color')).to.be.equal(COLORS(WEATHERS.WIND)[4])
    })

    it('halibut shall have correct style', () => {
        expect(renderedHalibut.prop('style').position).to.be.equal('relative');
    })

}) 