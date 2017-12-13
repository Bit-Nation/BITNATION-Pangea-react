import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { startApp } from '../actions/core';
import { openDrawer, closeDrawer, changeScreen, changeTitle } from '../actions/ui';
import { setCurrentNation } from '../actions/nations';
import { SCREEN_TYPES } from '../constants/status_types';
import { closeAuthDialog } from '../actions/events';
import Main from '../components/Main';
import WelcomeScreen from '../components/WelcomeScreen';
import Home from '../components/Home';
import Nations from '../components/Nations';
import Nation from '../components/Nation';

export class MobileApp extends React.Component {
  componentDidMount() {
    this.props.startApp();
  }

  onChangeScreenHandler(nextScreen) {
    if (this.props.currentScreen !== nextScreen) {
      this.props.changeScreen(nextScreen);

      let title = 'Pangea';
      if (nextScreen === SCREEN_TYPES.NATIONS) {
        title = 'Nations';
      }

      this.props.changeTitle(title);
    }
  }

  onClickNationHandler(nation) {
    this.props.setCurrentNation(nation);
    this.props.changeScreen(SCREEN_TYPES.NATION);
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
        return (<Nation
          nation={this.props.nation}
        />);
      default:
        return (<WelcomeScreen
          onChangeScreenHandler={() => this.onChangeScreenHandler()}
        />);
    }
  }

  openMenu() {
    this.props.openDrawer();
  }

  closeMenu() {
    this.props.closeDrawer();
  }

  render() {
    const currentScreen = this.getCurrentScreen();

    return (
      <Main
        onClosed={() => this.closeMenu()}
        onOpen={() => this.openMenu()}
        isDrawerOpen={this.props.isDrawerOpen}
        onItemClicked={nextScreen => this.onChangeScreenHandler(nextScreen)}
        title={this.props.title}
        isAuthPromptOpen={this.props.events.authDialogVisible}
        onAuthPromptSubmit={() => this.props.closeAuthDialog()}
      >
        {currentScreen}
      </Main>
    );
  }
}

MobileApp.propTypes = {
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
  startApp: PropTypes.func.isRequired,
  changeScreen: PropTypes.func.isRequired,
  changeTitle: PropTypes.func.isRequired,
  setCurrentNation: PropTypes.func.isRequired,
  openDrawer: PropTypes.func.isRequired,
  closeDrawer: PropTypes.func.isRequired,
  events: PropTypes.shape({
    authDialogVisible: PropTypes.bool,
  }).isRequired,
  closeAuthDialog: PropTypes.func.isRequired,
};


export default connect(state => ({
  appStatus: state.core.appStatus,
  isDrawerOpen: state.ui.isDrawerOpen,
  currentScreen: state.ui.currentScreen,
  title: state.ui.title,
  nations: state.nations.nations,
  nation: state.nations.nation,
  events: state.events,
}), {
  startApp,
  changeScreen,
  changeTitle,
  setCurrentNation,
  openDrawer,
  closeDrawer,
  closeAuthDialog,
})(MobileApp);
