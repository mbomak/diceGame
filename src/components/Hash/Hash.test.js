import React from 'react';
import { shallow } from 'enzyme';

import Hash from './index';

describe('<Hash />', () => {
  it('renders without crashing', () => {
    shallow(<Hash />);
  });
});
