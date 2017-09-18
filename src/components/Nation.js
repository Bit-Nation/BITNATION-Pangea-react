import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import Styles from '../styles/Styles';

function Nation(props) {
  return (
    <View
      style={{ flexDirection: 'column', marginTop: 100 }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Text style={Styles.nationDetails}>Name</Text>
        <Text style={Styles.nationDetailsRight}>{props.nation.name}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={Styles.nationDetails}>Type</Text>
        <Text style={Styles.nationDetailsRight}>{props.nation.type}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={Styles.nationDetails}>Reputation</Text>
        <Text style={Styles.nationDetailsRight}>{props.nation.reputation}</Text>
      </View>
    </View>
  );
}

Nation.propTypes = {
  nation: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    reputation: PropTypes.number.isRequired,
  }).isRequired,
};

export default Nation;
