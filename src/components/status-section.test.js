import React from 'react';
import {shallow} from 'enzyme';

import StatusSection from './status-section';

let guesses = [
  {
    1: '1',
    2: '9',
    3: '4'
 }
 ];

describe('<StatusSection />', () => {
    it('Renders without crashing', () => {
        shallow(<StatusSection guesses={guesses}/>);
    });
});
