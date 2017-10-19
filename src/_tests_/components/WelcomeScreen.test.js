import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import sinon from 'sinon';

import WelcomeScreen from '../../components/WelcomeScreen';
import { SCREEN_TYPES } from '../../constants/status_types';

describe('<WelcomeScreen />', () => {
  it('Should render and call touch event', () => {
    const stub = sinon.spy();
    const wrapper = shallow(<WelcomeScreen onChangeScreenHandler={stub} />);

    wrapper.find(View).simulate('touchEnd');

    expect(stub.called).toBe(true);
    expect(stub.args[0][0]).toEqual(SCREEN_TYPES.MAIN);

  });
});