import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import ViewPassword from '../components/viewPassword';
import ListPassword from '../components/viewPassword/listPassword'

describe('<viewPassword>',()=>{
  const wrapper = shallow (<ViewPassword />);
  it('has <ListPassword />',()=>{
    expect(wrapper.find(ListPassword)).toHaveLength(1)
  })

})
