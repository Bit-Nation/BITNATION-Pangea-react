import React from 'react';
import PropTypes from 'prop-types';
import thunk from 'redux-thunk';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { startApp } from '../actions/core';
import { APP_STATUS } from '../constants/status_types';

import logo from '../images/logo.jpg';
import reducer from '../reducers';


const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(startApp());
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Image
            style={{ width: 450, height: 300 }}
            source={logo}
          />
          <Text>
            {this.props.appStatus === APP_STATUS.INACTIVE && 'Inactive...'}
            {this.props.appStatus === APP_STATUS.STARTING && 'Starting...'}
            {this.props.appStatus === APP_STATUS.RUNNING && 'Working!'}
          </Text>
        </View>
      </Provider>
    );
  }
}

App.propTypes = {
  appStatus: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  appStatus: state.core.appStatus,
});

export default connect(mapStateToProps)(App);
