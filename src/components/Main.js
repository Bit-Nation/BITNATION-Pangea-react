import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Drawer from 'react-native-drawer';
import { MaterialIcons } from '@expo/vector-icons';

import Styles from '../styles/Styles';
import MainMenu from '../components/MainMenu';


function Main(props) {
  return (
    <Drawer
      open={props.isDrawerOpen}
      content={
        <MainMenu
          onClosed={() => props.onClosed()}
        />
      }
    >
      {props.children}
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

Main.propTypes = {
  onOpen: PropTypes.func.isRequired,
  onClosed: PropTypes.func.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Main;
