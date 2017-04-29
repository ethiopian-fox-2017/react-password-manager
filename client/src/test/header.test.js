import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header';
import { shallow } from 'enzyme';
import { Input, Grid } from 'semantic-ui-react';

describe('header',()=>{
  const wrapper = shallow (<Header />)
  it('has logo h2',() => {
    expect(wrapper.find('h2')).toHaveLength(1);
  })
  it('has logo h2',() => {
    expect(wrapper.find(Input)).toHaveLength(1);
  })
})
