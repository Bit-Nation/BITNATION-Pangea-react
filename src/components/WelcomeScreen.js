import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import Styles from '../styles/Styles';
import logo from '../images/logo.png';

import { SCREEN_TYPES } from '../constants/status_types';


function WelcomeScreen(props) {
  return (
    <View
      style={
        {
          alignItems: 'center',
        }
      }
      onTouchEnd={() => props.onChangeScreenHandler(SCREEN_TYPES.MAIN)}
    >
      <Image
        style={Styles.logo}
        source={logo}
      />
    </View>
  );
}

WelcomeScreen.propTypes = {
  onChangeScreenHandler: PropTypes.func.isRequired,
};

export default WelcomeScreen;
