/* eslint global-require: 0 */
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers/index';
import DevTools from './components/common/DevTools';

export const loggerMiddleware = createLogger({ collapsed: true, duration: true });

// InitialState can be fetched from server (SSR)
export default function configureStore(initialState) {
  const middlewares = [
    thunk,
  ];

  /**
   * Libs for DEVELOPMENT only
   */
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(loggerMiddleware);
  }

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        ...middlewares,
      ),
      process.env.REACT_APP_DEV_TOOLS === 'true' ? DevTools.instrument() : f => f,
    ),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/index', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
