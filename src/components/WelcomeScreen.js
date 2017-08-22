import React from 'react';
import { View, Image } from 'react-native';

import Styles from '../styles/Styles';
import logo from '../images/logo.jpg';


function WelcomeScreen() {
  return (
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
  );
}

export default WelcomeScreen;
