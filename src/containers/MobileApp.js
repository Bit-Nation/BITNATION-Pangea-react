import React from 'react';
import PropTypes from 'prop-types';
import thunk from 'redux-thunk';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { startApp } from '../actions/core';
import { openDrawer, closeDrawer } from '../actions/ui';
import reducer from '../reducers';
import WelcomeScreen from '../components/WelcomeScreen';


const store = createStore(
  reducer,
  applyMiddleware(thunk),
);


class MobileApp extends React.Component {
  componentDidMount() {
    this.props.dispatch(startApp());
  }

  openMenu() {
    this.props.dispatch(openDrawer());
  }

  closeMenu() {
    this.props.dispatch(closeDrawer());
  }

  render() {
    return (
      <Provider store={store}>
        <WelcomeScreen
          onClosed={() => this.closeMenu()}
          onOpen={() => this.openMenu()}
          isDrawerOpen={this.props.isDrawerOpen}
        />
      </Provider>
    );
  }
}

MobileApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  appStatus: state.core.appStatus,
  isDrawerOpen: state.ui.isDrawerOpen,
});

export default connect(mapStateToProps)(MobileApp);
