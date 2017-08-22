import React from 'react';
import { shallow } from 'enzyme';

import WelcomeScreen from './WelcomeScreen';

describe('<WelcomeScreen />', () => { // eslint-disable-line no-undef
  it('should contain the welcome screen', () => { // eslint-disable-line no-undef
    const welcomeScreen = shallow(<WelcomeScreen
      onClosed={() => {}}
      onOpen={() => {}}
      isDrawerOpen={false}
    />);
    expect(welcomeScreen.length).toBe(1); // eslint-disable-line no-undef
    const menuButton = welcomeScreen.find('IconButton').first();
    const name = menuButton.prop('name');
    expect(name).toBe('menu'); // eslint-disable-line no-undef
  });

  it('should contain the menu', () => { // eslint-disable-line no-undef
    const welcomeScreen = shallow(<WelcomeScreen
      onClosed={() => {}}
      onOpen={() => {}}
      isDrawerOpen
    />);
    expect(welcomeScreen.length).toBe(1); // eslint-disable-line no-undef
    const mainMenu = welcomeScreen.find('Drawer').first();
    const open = mainMenu.prop('open');
    expect(open).toBeTruthy(); // eslint-disable-line no-undef
  });
});
