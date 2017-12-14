import React, { Component } from 'react';
import { ImageBackground } from 'react-native';

import background from './images/blue_background.png';

class Main extends Component {

  render(){
    return (
      <ImageBackground
        source={background}
        style={{
          flex: 1,
          width: null,
          height: null,
        }}
      />
    )
  }

}

export default Main;
