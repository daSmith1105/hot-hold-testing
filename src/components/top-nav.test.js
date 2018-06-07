import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });
    it('Should call a new game on click', () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onRestartGame={callback} />);
        wrapper.find('.new').simulate('click', {preventDefault() {}
        });
        expect(callback).toBeCalled;
    });
    it('Should call an aural update on click', () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onGenerateAuralUpdate={callback} />);
        wrapper.find('.status-link').simulate('click', {preventDefault() {}
        });
        expect(callback).toBeCalled;
    });
});
