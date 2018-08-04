import React from 'react';
import { shallow } from 'enzyme';

import Result from './index';

describe('<Result />', () => {
  it('renders without crashing', () => {
    shallow(<Result />);
  });
});
