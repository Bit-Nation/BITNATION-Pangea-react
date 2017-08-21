import React from 'react';
import { ListView, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/Styles';


function MainMenu(props) {
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  const dataSource = ds.cloneWithRows(['Profile', 'Nations', 'Private messaging', 'Townhall', 'Jurisdiction', 'Settings']);

  return (
    <ListView
      style={styles.mainMenu}
      onTouchEnd={() => props.onClosed()}
      dataSource={dataSource}
      renderRow={rowData => (<View style={styles.menuItem}><Text>{rowData}</Text></View>)}
    />
  );
}

MainMenu.propTypes = {
  onClosed: PropTypes.func.isRequired,
};

export default MainMenu;
