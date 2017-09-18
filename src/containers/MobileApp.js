import React from 'react';
import PropTypes from 'prop-types';
import thunk from 'redux-thunk';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { startApp } from '../actions/core';
import { openDrawer, closeDrawer, changeScreen, changeTitle } from '../actions/ui';
import { setCurrentNation } from '../actions/nations';
import { SCREEN_TYPES } from '../constants/status_types';
import reducer from '../reducers';
import Main from '../components/Main';
import WelcomeScreen from '../components/WelcomeScreen';
import Home from '../components/Home';
import Nations from '../components/Nations';
import Nation from '../components/Nation';


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

    let title = 'Pangea';
    if (nextScreen === SCREEN_TYPES.NATIONS) {
      title = 'Nations';
    }

    this.props.dispatch(changeTitle(title));
  }

  onClickNationHandler(nation) {
    this.props.dispatch(setCurrentNation(nation));
    this.props.dispatch(changeScreen(SCREEN_TYPES.NATION));
  }

  getCurrentScreen() {
    switch (this.props.currentScreen) {
      case SCREEN_TYPES.MAIN:
        return (
          <Home />
        );
      case SCREEN_TYPES.NATIONS:
        return (
          <Nations
            onClickNationHandler={nation => this.onClickNationHandler(nation)}
            nations={this.props.nations}
          />
        );
      case SCREEN_TYPES.NATION:
        return (
          <Nation
            nation={this.props.nation}
          />
        );
      default:
        return (<WelcomeScreen
          onChangeScreenHandler={() => this.onChangeScreenHandler()}
        />);
    }
  }

  openMenu() {
    this.props.dispatch(openDrawer());
  }

  closeMenu() {
    this.props.dispatch(closeDrawer());
  }

  render() {
    const currentScreen = this.getCurrentScreen();

    return (
      <Provider store={store}>
        <Main
          onClosed={() => this.closeMenu()}
          onOpen={() => this.openMenu()}
          isDrawerOpen={this.props.isDrawerOpen}
          onItemClicked={nextScreen => this.onChangeScreenHandler(nextScreen)}
          title={this.props.title}
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
  title: PropTypes.string.isRequired,
  nations: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    reputation: PropTypes.number.isRequired,
  })).isRequired,
  nation: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    reputation: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  appStatus: state.core.appStatus,
  isDrawerOpen: state.ui.isDrawerOpen,
  currentScreen: state.ui.currentScreen,
  title: state.ui.title,
  nations: state.nations.nations,
  nation: state.nations.nation,
});

export default connect(mapStateToProps)(MobileApp);
