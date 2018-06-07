import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('Renders without crashing', () => {
        let guessArray = [40, 30, 20, 10];
        shallow(<GuessList guesses={guessArray}/>);
    });

    it('Renders the correct number of li elements', () => {
        let guessArray = [40, 30, 20, 10];
        const wrapper = shallow(<GuessList guesses={guessArray}/>);
        let rendered = wrapper.find('li');
        expect(rendered.length).toEqual(guessArray.length);
    });
});
