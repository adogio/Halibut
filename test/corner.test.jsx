import React from 'react';
import { expect } from 'code';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Corner from '../src/corner';

configure({ adapter: new Adapter() });

describe('Render Corner in background of page', () => {

    let renderedCorner;

    beforeEach(() => {
        renderedCorner = shallow(<Corner>Test Children</Corner>);
    });

    it('corner shall be rendered as div', () => {
        expect(renderedCorner.type()).to.be.equal('div');
    })

    it('corner shall have corrent children', () => {
        expect(renderedCorner.prop('children')).to.be.equal('Test Children');
    })

    it('corner shall have enpty children', () => {
        renderedCorner = shallow(<Corner />);
        expect(renderedCorner.prop('children')).to.be.undefined();
    })

    it('corner shall have correct style', () => {
        expect(renderedCorner.prop('style').position).to.be.equal('absolute');
    })

}) 