import React from 'react';
import PropTypes from 'prop-types';
import thunk from 'redux-thunk';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { startApp } from '../actions/core';
import { openDrawer, closeDrawer, changeScreen } from '../actions/ui';
import { SCREEN_TYPES } from '../constants/status_types';
import reducer from '../reducers';
import Main from '../components/Main';
import WelcomeScreen from '../components/WelcomeScreen';
import Home from '../components/Home';


const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

class MobileApp extends React.Component {
  componentDidMount() {
    this.props.dispatch(startApp());
  }

  onChangeScreenHandler(nextScreen) {
    this.props.dispatch(changeScreen(nextScreen));
  }

  openMenu() {
    this.props.dispatch(openDrawer());
  }

  closeMenu() {
    this.props.dispatch(closeDrawer());
  }

  render() {
    const currentScreen = (this.props.currentScreen === SCREEN_TYPES.WELCOME) ?
      (<WelcomeScreen
        onChangeScreenHandler={() => this.onChangeScreenHandler()}
      />) :
      <Home />;

    return (
      <Provider store={store}>
        <Main
          onClosed={() => this.closeMenu()}
          onOpen={() => this.openMenu()}
          isDrawerOpen={this.props.isDrawerOpen}
        >
          {currentScreen}
        </Main>
      </Provider>
    );
  }
}

MobileApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  currentScreen: PropTypes.oneOf(Object.values(SCREEN_TYPES)).isRequired,
};

const mapStateToProps = state => ({
  appStatus: state.core.appStatus,
  isDrawerOpen: state.ui.isDrawerOpen,
  currentScreen: state.ui.currentScreen,
});

export default connect(mapStateToProps)(MobileApp);
