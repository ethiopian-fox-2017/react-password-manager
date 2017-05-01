import React from 'react';
import ReactDOM from 'react-dom';
import { shallow,mount } from 'enzyme';

import Errorview from '../components/error';

describe('error ',()=>{
  const wrapper = shallow(<Errorview />)
  it('has logo h2',() => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });
})
