import React from 'react';
import { shallow, mount } from 'enzyme';

import { MobileApp } from '../../containers/MobileApp';
import { SCREEN_TYPES, APP_STATUS } from '../../constants/status_types';

describe('<MobileApp />', () => {
  let wrapper = null;

  const nationData = {
    name: 'Freelancers!',
    type: 'Anarcho-capitalists',
    reputation: 100
  };

  it('Should render', () => {
    wrapper = shallow(
      <MobileApp
        isDrawerOpen={false}
        currentScreen={SCREEN_TYPES.MAIN}
        title={'Title'}
        nations={[]}
        nation={nationData}
        startApp={() => {}}
        changeScreen={() => {}}
        changeTitle={() => {}}
        setCurrentNation={() => {}}
        openDrawer={() => {}}
        closeDrawer={() => {}}
        appStatus={APP_STATUS.RUNNING}
      />
    )
  })
})