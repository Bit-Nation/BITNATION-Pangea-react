import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { Input, Button } from 'native-base'

import { Login } from '../../components/Login';

describe('<Login />', () => {
  it('Should render', () => {
    shallow(<Login login={() => {}} />);
  });

  it('Should call login handler', () => {
    const stub = spy();
    
    const wrapper = shallow(<Login login={stub} />);
    // const loginInput = wrapper.find(Input).at(0);
    // const passwordInput = wrapper.find(Input).at(1);  

    // loginInput.simulate('change', { which: 'login' });
    // passwordInput.simulate('change', { which: 'my password' });

    wrapper.find(Button).simulate('press');
    expect(stub.called).toBeTruthy();
  });
});