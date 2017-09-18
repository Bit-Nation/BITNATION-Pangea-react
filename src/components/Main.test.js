import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';

import Main from './Main';

describe('<Main />', () => { // eslint-disable-line no-undef
  it('should contain the welcome screen', () => { // eslint-disable-line no-undef
    const main = shallow(<Main
      onClosed={() => {}}
      onOpen={() => {}}
      onItemClicked={() => {}}
      isDrawerOpen={false}
      title="Test"
    >
      <View />
    </Main>);
    expect(main.length).toBe(1); // eslint-disable-line no-undef
    const mainMenu = main.find('Drawer').first();
    const open = mainMenu.prop('open');
    expect(open).toBeFalsy(); // eslint-disable-line no-undef
  });

  it('should contain the menu', () => { // eslint-disable-line no-undef
    const main = shallow(<Main
      onClosed={() => {}}
      onOpen={() => {}}
      onItemClicked={() => {}}
      isDrawerOpen
      title="Test"
    >
      <View />
    </Main>);
    expect(main.length).toBe(1); // eslint-disable-line no-undef
    const mainMenu = main.find('Drawer').first();
    const open = mainMenu.prop('open');
    expect(open).toBeTruthy(); // eslint-disable-line no-undef
  });
});
