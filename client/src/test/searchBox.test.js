import React from 'react'
import { Input } from 'semantic-ui-react';
import SearchBox from '../components/searchBox';
import { shallow,mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';
import {fetchPasswordDone,fetchPassword,addPassword,deletePassword,searchPassword,editPassword } from '../actions';

describe ('<SearchPassword>',()=>{
  const wrapper = mount(<Provider store={store}><SearchBox /></Provider>)
  it('have element',()=>{
    expect(wrapper.find(Input)).toHaveLength(1)
  })
  it('change',()=>{
    wrapper.find(Input).simulate('change',{target:{value:'cari'}})
    //console.log('------------',store.getState('passwords').searchKey);
    expect(store.getState('passwords').searchKey).toEqual('');

  })
  it('dispatch',()=>{
  wrapper.props().store.dispatch(searchPassword('cari'));
  expect(store.getState('passwords').searchKey).toEqual('cari');
  })
  it('props',()=>{
  console.log('------------',wrapper.props().children);
  })

})
