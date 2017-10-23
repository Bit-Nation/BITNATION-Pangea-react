import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import './styles/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';

ReactDOM.render(
  <AppContainer>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);
registerServiceWorker();

/**
 * Necessary for Local development and hot reloading components
 */
if (module.hot) {
  module.hot.accept()
}