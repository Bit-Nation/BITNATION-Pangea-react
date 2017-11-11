import React from 'react';
import { shallow } from 'enzyme';

import Loader from '../../components/Loader';

describe('<Loader />', () => {
  it('Should render', () => {
    shallow(<Loader visible />);
  });
});