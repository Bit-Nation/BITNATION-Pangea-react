import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import MobileAppContainer from './containers/MobileApp';
import reducers from './reducers';
import { SCREEN_TYPES } from './constants/status_types';
import { AUTH_DIALOG_OPEN } from './constants/events';
import ethMock from './ethMock';

const store = createStore(
  reducers,
  applyMiddleware(
    thunk.withExtraArgument(ethMock),
  ),
);

const Main = () => (
  <Provider store={store}>
    <MobileAppContainer
      currentScreen={SCREEN_TYPES.WELCOME}
      isDrawerOpen={false}
    />
  </Provider>
);

ethMock.on('eth:storage-ready', (promise) => {
  promise.then(() => {
    store.dispatch({
      type: AUTH_DIALOG_OPEN,
    });
  });
});

export default Main;
