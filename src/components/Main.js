import React from 'react';
import { View, Text } from 'react-native';
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
          onItemClicked={screen => props.onItemClicked(screen)}
        />
      }
    >
      {props.children}
      <View style={Styles.topBar}>
        <MaterialIcons.Button
          name="menu"
          backgroundColor="transparent"
          color="#010101"
          size={32}
          style={Styles.menuButton}
          onPress={() => props.onOpen()}
        />
        <Text style={Styles.title}>Pangea</Text>
        <MaterialIcons.Button
          name="chat"
          backgroundColor="transparent"
          color="#010101"
          style={Styles.chatButton}
          size={32}
        />
        <MaterialIcons.Button
          name="settings"
          backgroundColor="transparent"
          color="#010101"
          style={Styles.settingsButton}
          size={32}
        />
      </View>
    </Drawer >
  );
}

Main.propTypes = {
  onOpen: PropTypes.func.isRequired,
  onClosed: PropTypes.func.isRequired,
  onItemClicked: PropTypes.func.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Main;
