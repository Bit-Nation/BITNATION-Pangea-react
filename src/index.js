import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
