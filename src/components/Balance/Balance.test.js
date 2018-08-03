import React from 'react';
import { shallow } from 'enzyme';

import Header from './index';

describe('<Balance />', () => {
  it('renders without crashing', () => {
    shallow(<Balance />);
  });
});
