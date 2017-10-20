import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'react-native';

import Nation from '../../components/Nation';

describe('<Nation />', () => {

  const nationData = {
    name: 'Freelancers!',
    type: 'Anarcho-capitalists',
    reputation: 100
  };

  it('Should render', () => {
    shallow(<Nation nation={nationData} />);
  })

  it('Should contain valid provided data', () => {
    const wrapper = shallow(<Nation nation={nationData} />);

    const textNodes = wrapper.find(Text);
    expect(textNodes.length).toBe(6);
    const nodes = textNodes.getElements();

    expect(nodes[1].props.children).toEqual(nationData.name);
    expect(nodes[3].props.children).toEqual(nationData.type);
    expect(nodes[5].props.children).toEqual(nationData.reputation);
  })
});