/* eslint global-require: 0 */
import React, { Component } from 'react';
import Expo from 'expo';

import Main from './src/index.mobile';

export default class App extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentWillMount() {
    Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
    }).then(() => {
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    const { loading } = this.state;

    return (loading ? null : <Main />);
  }
}
