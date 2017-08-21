import React from 'react';
import PropTypes from 'prop-types';
import thunk from 'redux-thunk';
import { Text, View, Image, Button } from 'react-native';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Drawer from 'react-native-drawer';

import { startApp } from '../actions/core';
import { APP_STATUS } from '../constants/status_types';
import MainMenu from '../components/MainMenu';

import { openDrawer, closeDrawer } from '../actions/ui';

import logo from '../images/logo.jpg';
import reducer from '../reducers';
import Styles from '../styles/Styles';


const store = createStore(
  reducer,
  applyMiddleware(thunk),
);


class MobileApp extends React.Component {
  componentDidMount() {
    this.props.dispatch(startApp());
  }

  openMenu() {
    console.log('Pressed to open');
    this.props.dispatch(openDrawer());
  }

  closeMenu() {
    console.log('Pressed to Close');
    this.props.dispatch(closeDrawer());
  }

  render() {
    return (
      <Provider store={store}>
        <Drawer
          open={this.props.isDrawerOpen}
          content={
            <MainMenu
              onClosed={() => this.closeMenu()}
            />
          }
        >
          <View
            style={
              {
                alignItems: 'center',
              }
            }
          >
            <Image
              style={Styles.logo}
              source={logo}
            />
          </View>
          <View style={Styles.menuButton}>
            <Button
              onPress={() => this.openMenu()}
              title="Menu"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
              flex={1}
            />
          </View>
        </Drawer >
      </Provider>
    );
  }
}

MobileApp.propTypes = {
  appStatus: PropTypes.string.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  appStatus: state.core.appStatus,
  isDrawerOpen: state.ui.isDrawerOpen,
});

export default connect(mapStateToProps)(MobileApp);
