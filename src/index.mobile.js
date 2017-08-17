import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import Counters from './containers/MobileApp';
import reducers from './reducers';


const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

const Main = () => (
  <Provider store={store}>
    <Counters />
  </Provider>
);

export default Main;