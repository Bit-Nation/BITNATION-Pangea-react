import React from 'react';
import { Text, ListView, View } from 'react-native';
import Styles from '../styles/Styles';


function Nations() {
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  const dataSource = ds.cloneWithRows([{
    name: 'Bitnation',
    type: 'Holacracy',
    reputation: 500,
  },
  {
    name: 'Mordor',
    type: 'Dictatorship',
    reputation: -100,
  }]);

  return (
    <ListView
      dataSource={dataSource}
      contentContainerStyle={Styles.nationsDataItem}
      renderRow={rowData => (
        <View style={Styles.nationsColumn}>
          <View style={Styles.nationsRow}>
            <Text style={Styles.nationsDataLeftText}>
              {rowData.name}
            </Text>
            <Text style={Styles.nationsDataRightText}>
              {rowData.reputation}
            </Text>
          </View>
          <Text style={Styles.nationsDataSubText}>{rowData.type}</Text>
        </View>
      )
      }
    />
  );
}

export default Nations;
