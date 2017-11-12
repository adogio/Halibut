import React from 'react';
import { expect } from 'code';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Badge from '../src/badge';

configure({ adapter: new Adapter() });

describe('Render Badge in background of page', () => {

    let renderedBadge;

    beforeEach(() => {
        renderedBadge = shallow(<Badge color="AAAAAA" />);
    });

    it('badge shall be rendered as div', () => {
        expect(renderedBadge.type()).to.be.equal('div');
    })

    it('badge shall have correct style', () => {
        expect(renderedBadge.prop('style').backgroundColor).to.be.equal('#AAAAAA');
        expect(renderedBadge.prop('style').height).to.be.equal('100%');
        expect(renderedBadge.prop('style').width).to.be.equal('20%');
        expect(renderedBadge.prop('style').float).to.be.equal('left');
    })

}) 