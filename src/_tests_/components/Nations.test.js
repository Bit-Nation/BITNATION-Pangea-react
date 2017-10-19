import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'react-native';
import sinon from 'sinon';

import Nations from '../../components/Nations';

describe('<Nations />', () => {
  const nationsData = [
    {
      name: 'Test',
      type: 'Test type',
      reputation: 100
    }
  ];

  it('Should render', () => {
    shallow(<Nations nations={nationsData} onClickNationHandler={() => {}} />);
  });

  it('Should contain valid data', () => {

  });

});