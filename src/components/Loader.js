import React from 'react';
import { Container, View, Text } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import PropTypes from 'prop-types';

function Loader(props) {
  if (!props.visible) {
    return null;
  }

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <Spinner visible={props.visible} textContent={'Loading...'} textStyle={{ color: '#FFF' }} />
      </View>
    </Container>
  );
}

Loader.propTypes = {
  visible: PropTypes.bool,
};

Loader.defaultProps = {
  visible: false,
};

export default Loader;
