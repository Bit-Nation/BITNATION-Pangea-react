import React from 'react';
import PropTypes from 'prop-types';
import { Text, ListView, View, TouchableHighlight, Image } from 'react-native';
import Styles from '../styles/Styles';
import pointIcon from '../images/point.png';

function Nations(props) {
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  const dataSource = ds.cloneWithRows(props.nations);

  return (
    <ListView
      dataSource={dataSource}
      contentContainerStyle={Styles.nationsDataItem}
      renderRow={rowData => (
        <View style={Styles.nationsColumn}>
          <TouchableHighlight onPress={() => props.onClickNationHandler(rowData)}>
            <View style={Styles.nationsRow}>
              <Text style={Styles.nationsDataLeftText}>
                {rowData.name}
              </Text>
              <Text style={Styles.nationsDataRightText}>
                {rowData.reputation}
              </Text>
              <View>
                <Image
                  resizeMode="contain"
                  resizeMethod="resize"
                  source={pointIcon}
                  style={Styles.pointIcon}
                />
              </View>
            </View>
          </TouchableHighlight>
          <Text style={Styles.nationsDataSubText}>{rowData.type}</Text>
        </View>
      )
      }
    />
  );
}

Nations.propTypes = {
  nations: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    reputation: PropTypes.number.isRequired,
  })).isRequired,
  onClickNationHandler: PropTypes.func.isRequired,
};

export default Nations;
