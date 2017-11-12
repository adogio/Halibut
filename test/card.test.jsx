import React from 'react';
import { expect } from 'code';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '../src/card';

configure({ adapter: new Adapter() });

describe('Render Corner in background of page', () => {

    let renderedCard;

    beforeEach(() => {
        renderedCard = shallow(<Card color="AAAAAA">Test Children</Card>);
    });

    it('card shall be rendered as div', () => {
        expect(renderedCard.type()).to.be.equal('div');
    })

    it('card shall have corrent children', () => {
        expect(renderedCard.prop('children')).to.be.equal('Test Children');
    })

    it('card shall have correct style', () => {
        expect(renderedCard.prop('style').height).to.be.equal('25vh');
        expect(renderedCard.prop('style').position).to.be.equal('absolute');
    })

}) 