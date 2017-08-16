import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from '../images/logo.jpg';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={logo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//AppRegistry.registerComponent('App', () => App);