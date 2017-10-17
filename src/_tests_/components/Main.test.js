import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';

import Main from '../../components/Main';

/* eslint-env jest */

describe('<Main />', () => {
  it('should contain the welcome screen', () => {
    const main = shallow(<Main
      onClosed={() => {}}
      onOpen={() => {}}
      onItemClicked={() => {}}
      isDrawerOpen={false}
      title="Test"
    >
      <View />
    </Main>);
    expect(main.length).toBe(1);
    const mainMenu = main.find('Drawer').first();
    const open = mainMenu.prop('open');
    expect(open).toBeFalsy();
  });

  it('should contain the menu', () => {
    const main = shallow(<Main
      onClosed={() => {}}
      onOpen={() => {}}
      onItemClicked={() => {}}
      isDrawerOpen
      title="Test"
    >
      <View />
    </Main>);
    expect(main.length).toBe(1);
    const mainMenu = main.find('Drawer').first();
    const open = mainMenu.prop('open');
    expect(open).toBeTruthy();
  });
});
