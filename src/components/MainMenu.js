import React from 'react';
import { ListView, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/Styles';
import { SCREEN_TYPES } from '../constants/status_types';

export const menuItems = [
  {
    label: 'Profile',
    screen: SCREEN_TYPES.WELCOME,
  },
  {
    label: 'Nations',
    screen: SCREEN_TYPES.NATIONS,
  },
  {
    label: 'Private messaging',
    screen: SCREEN_TYPES.WELCOME,
  },
  {
    label: 'Townhall',
    screen: SCREEN_TYPES.WELCOME,
  },
  {
    label: 'Jurisdiction',
    screen: SCREEN_TYPES.WELCOME,
  },
  {
    label: 'Settings',
    screen: SCREEN_TYPES.WELCOME,
  },
];

export function renderItem(row, onTouchEnd) {
  return (
    <Text style={styles.menuText} onTouchEnd={() => onTouchEnd(row.screen)}>
      {row.label}
    </Text>
  );
}

function MainMenu(props) {
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  const dataSource = ds.cloneWithRows(menuItems);

  return (
    <ListView
      style={styles.mainMenu}
      onTouchEnd={() => props.onClosed()}
      dataSource={dataSource}
      contentContainerStyle={styles.menuItem}
      renderRow={rowData => renderItem(rowData, props.onItemClicked)}
    />
  );
}

MainMenu.propTypes = {
  onClosed: PropTypes.func.isRequired,
  onItemClicked: PropTypes.func.isRequired,
};

export default MainMenu;
