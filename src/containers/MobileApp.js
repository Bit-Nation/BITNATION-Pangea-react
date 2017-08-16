import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from '../images/logo.png';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={logo}
        />
        <Text>The Internet of Sovereignity.</Text>
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