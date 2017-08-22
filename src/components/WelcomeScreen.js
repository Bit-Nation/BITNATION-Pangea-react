import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import Drawer from 'react-native-drawer';
import { MaterialIcons } from '@expo/vector-icons';

import Styles from '../styles/Styles';
import MainMenu from '../components/MainMenu';
import logo from '../images/logo.jpg';


function WelcomeScreen(props) {
  return (
    <Drawer
      open={props.isDrawerOpen}
      content={
        <MainMenu
          onClosed={() => props.onClosed()}
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
        <MaterialIcons.Button
          name="menu"
          backgroundColor="transparent"
          color="#010101"
          size={32}
          onPress={() => props.onOpen()}
        />
      </View>
    </Drawer >

  );
}

WelcomeScreen.propTypes = {
  onOpen: PropTypes.func.isRequired,
  onClosed: PropTypes.func.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
};

export default WelcomeScreen;
