import React from 'react';
import { View, Text, Image, TouchableHighlight, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import Drawer from 'react-native-drawer';
import Prompt from 'react-native-prompt';
import { connect } from 'react-redux';

import Styles from '../styles/Styles';
import MainMenu from '../components/MainMenu';

import menuIcon from '../images/menu.png';
import messagesIcon from '../images/messages.png';
import holonsIcon from '../images/holons.png';
import background from '../images/blue_background.png';

import { decryptStorage, closeAuthDialog } from '../actions/events';

export function Main(props) {
  let encryptionPassword = null;

  const setEncryptionPassword = (value) => {
    encryptionPassword = value;
  };

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
      <ImageBackground
        source={background}
        style={{
          flex: 1,
          width: null,
          height: null,
        }}
      >
        <Prompt
          title="Encryption password prompt"
          placeholder="Enter password to decrypt"
          onCancel={() => props.closeAuthDialog()}
          onSubmit={() => props.decryptStorage(encryptionPassword)}
          onChangeText={value => setEncryptionPassword(value)}
          visible={props.events.authDialogVisible}
          textInputProps={{ secureTextEntry: true }}
        />
        {props.children}
        <View style={Styles.topBar}>
          <TouchableHighlight onPress={() => props.onOpen()}>
            <View>
              <Image
                resizeMode="contain"
                resizeMethod="resize"
                source={menuIcon}
                style={Styles.menuButton}
                onPress={() => props.onOpen()}
              />
            </View>
          </TouchableHighlight>
          <Text style={Styles.title}>{props.title}</Text>
          <Image
            resizeMode="contain"
            resizeMethod="resize"
            source={messagesIcon}
            style={Styles.chatButton}
            onPress={() => props.onOpen()}
          />
          <Image
            resizeMode="contain"
            resizeMethod="resize"
            source={holonsIcon}
            style={Styles.holonsButton}
            onPress={() => props.onOpen()}
          />
        </View>
      </ImageBackground>
    </Drawer>
  );
}

Main.propTypes = {
  onOpen: PropTypes.func.isRequired,
  onClosed: PropTypes.func.isRequired,
  onItemClicked: PropTypes.func.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  decryptStorage: PropTypes.func.isRequired,
  events: PropTypes.shape({
    authDialogVisible: PropTypes.bool,
  }).isRequired,
  closeAuthDialog: PropTypes.func.isRequired,
};

Main.defaultProps = {
  isAuthPromptOpen: false,
};

export default connect(state => ({
  events: state.events,
}), {
  decryptStorage,
  closeAuthDialog,
})(Main);
