import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers/index';
import DevTools from './components/common/DevTools';

const loggerMiddleware = createLogger({ collapsed: true, duration: true });

export default function configureStore(initialState) {
  let middlewares = [
    thunk,
  ];
  const isDevelopment = process.env.NODE_ENV === 'development';

  /**
   * Libs for DEVELOPMENT only
   */
  if (isDevelopment) {
    middlewares.push(loggerMiddleware);
  }

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        ...middlewares,
      ),
      isDevelopment ? DevTools.instrument() : f => f,
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
