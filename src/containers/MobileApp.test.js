'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import { APP_STATUS } from '../constants/status_types';
import { Provider } from 'react-redux'; // eslint-disable-line-line import/first
import { Text } from 'react-native';
import configureMockStore from 'redux-mock-store'; // eslint-disable-line-line import/first
import thunk from 'redux-thunk'; // eslint-disable-line-line import/first

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const MobileApp = require.requireActual('./MobileApp.js').default;

describe('<MobileApp />', () => {
  it('should contain the status text', () => {
    const store = mockStore({ 
      core: {
        appStatus: APP_STATUS.INACTIVE,
      },
    });

    const mobileApp = shallow(<Provider store={store}><MobileApp /></Provider>);
    mobileApp.debug();
    expect(mobileApp).toMatchSnapshot();
  });
});
