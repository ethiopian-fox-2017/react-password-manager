import React from 'react';
import ReactDOM from 'react-dom';
import { shallow,mount } from 'enzyme';

import SearchBox from '../components/searchBox';
import {Header} from '../components/header';
import {fetchPasswordDone,fetchPassword,addPassword,deletePassword,searchPassword,editPassword } from '../actions';

describe('header',()=>{
  const wrapper = shallow(<Header />)
  it('has logo h2',() => {
    expect(wrapper.find('h2')).toHaveLength(1);
  });
  it('<searchBox>',() => {
    expect(wrapper.find(SearchBox)).toHaveLength(1);
  });
})
