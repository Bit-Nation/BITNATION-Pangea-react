import 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import MobileAppContainer from './containers/MobileApp';
import reducers from './reducers';
import { AUTH_DIALOG_OPEN } from './constants/events';
import serverMiddleware from './middleware/server';

const store = createStore(
  reducers,
  applyMiddleware(
    thunk,
    serverMiddleware,
  ),
);

const Main = () => (
  <Provider store={store}>
    <MobileAppContainer
      isDrawerOpen={false}
    />
  </Provider>
);

// @TODO: Change it for real event stream
setTimeout(() => {
  store.dispatch({
    type: AUTH_DIALOG_OPEN,
  });
}, 2000);

export default Main;
