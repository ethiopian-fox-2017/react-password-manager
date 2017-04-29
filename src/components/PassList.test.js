import React from 'react';
import { shallow } from 'enzyme';

import PassList from './PassList';
import PassItem from './PassItem';

describe(<PassList />, () => {
  it('should have password item component', () => {
    const wrapper = shallow(<PassList />);
    expect(wrapper.containsAllMatchingElements([
      <PassItem />
    ])).toBeTrue;
  })
})
