import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import MobileApp from './containers/MobileApp';
import reducers from './reducers';
import { SCREEN_TYPES } from './constants/status_types';


const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

const Main = () => (
  <Provider store={store}>
    <MobileApp
      currentScreen={SCREEN_TYPES.WELCOME}
      isDrawerOpen={false}
    />
  </Provider>
);

export default Main;
