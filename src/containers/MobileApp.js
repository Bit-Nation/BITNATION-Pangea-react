import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import logo from '../images/logo.jpg';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={{width: 450, height: 300}}
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
