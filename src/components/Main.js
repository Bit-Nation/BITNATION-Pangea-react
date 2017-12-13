import React from 'react';
import { ImageBackground } from 'react-native';

import background from '../images/blue_background.png';

function Main() {
  return (

    <ImageBackground
      source={background}
      style={{
        flex: 1,
        width: null,
        height: null,
      }}
    />

  );
}

export default Main;
