import React from 'react';
import { shallow } from 'enzyme';

import { App } from '../../containers/App';
import { APP_STATUS } from '../../constants/status_types';

describe('<App />', () => {
  let wrapper = null;

  it('Should render', () => {
    wrapper = shallow(<App startApp={() => {}} appStatus={APP_STATUS.RUNNING} />);
  });

  it('Should render correct status', () => {
    expect(wrapper.find('p.App-intro').text()).toEqual('Working!')
  })
});