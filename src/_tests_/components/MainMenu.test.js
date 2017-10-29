import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'react-native';
import sinon from 'sinon';
import PropTypes from 'prop-types';
import styles from '../../styles/Styles';

import MainMenu, { menuItems, renderItem } from '../../components/MainMenu';

describe('<MainMenu />', () => {
  it('Should render', () => {
    shallow(<MainMenu onClosed={() => {}} onItemClicked={() => {}} />);
  });

  // it('Should render all menu items correctly', () => {
  //   menuItems.map(item =>
  //     expect(renderItem(item, () => {})).toEqual(
  //       <Text onTouchEnd={() => {}} style={styles.menuText}>{item.label}</Text>,
  //     ),
  //   );
  // });

  it('Should test required props and throw warnings', () => {
    let stub;
    stub = sinon.stub(console, 'error');

    shallow(<MainMenu />);

    const warnings = [
      'Warning: Failed prop type: The prop `onClosed` is marked as required in `MainMenu`, but its value is `undefined`.\n    in MainMenu',
      'Warning: Failed prop type: The prop `onItemClicked` is marked as required in `MainMenu`, but its value is `undefined`.\n    in MainMenu',
    ];
    // Should test warnings in console
    expect(stub.args[0][0]).toEqual(warnings[0]);
    expect(stub.args[1][0]).toEqual(warnings[1]);

    expect(MainMenu.propTypes).toEqual({
      onClosed: PropTypes.func.isRequired,
      onItemClicked: PropTypes.func.isRequired,
    });

    console.error.restore();
  });
});
