import 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import MobileAppContainer from './containers/MobileApp';
import reducers from './reducers';
import { AUTH_DIALOG_OPEN } from './constants/events';
import serverMiddleware from './middleware/server';
import { SCREEN_TYPES } from './constants/status_types';

import ethMock from './ethMock';

const store = createStore(
  reducers,
  applyMiddleware(
    thunk.withExtraArgument(ethMock),
    serverMiddleware,
  ),
);

const Main = () => (
  <Provider store={store}>
    <MobileAppContainer
      isDrawerOpen={false}
      currentScreen={SCREEN_TYPES.LOGIN}
    />
  </Provider>
);

export default Main;
