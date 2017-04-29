import React from 'react';
import { shallow } from 'enzyme';

import PassForm from './PassForm';

describe('<PassForm />', () => {
  it('should have', () => {
    const wrapper = shallow(<PassForm />);
    expect(wrapper.find(PassForm)).toBeTrue;
  });
});
