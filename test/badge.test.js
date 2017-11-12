import React from 'react';
import { expect } from 'code';
import { shallow } from 'enzyme';
import Badge from '../src/badge';

describe('<Filter list={[]}/> Creating', () => {


    it('list should contain "ca", "bc" and "ad" with filter ""', () => {
        renderedFilter.find('input').simulate('change', { target: { value: "" } });
        expect(renderedFilter.state('list')).to.have.length(3);
    })
});

describe('Render Badge in background of page', () => {
    let renderedBadge;

    beforeEach(() => {
        renderedBadge = shallow(<Badge color="AAAAAA" />);
    });

    it('color of badge shall be #AAAAAA', () => {
        expect(renderedBadge.find('div').style('background-color')).to.be.equal('#AAAAAA');
    })
}) 