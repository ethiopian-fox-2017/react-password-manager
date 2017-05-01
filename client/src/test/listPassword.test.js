import React from 'react';
import { Provider } from 'react-redux';
import store from '../store'
import { mount,shallow } from 'enzyme';
import ListPassword from '../components/viewPassword/listPassword';
import {fetchPasswordDone,fetchPassword,addPassword,deletePassword,searchPassword,editPassword } from '../actions';
import {  Table, Button } from 'semantic-ui-react';

describe('<ListPassword>',()=>{
  const mountwrapper = mount(<Provider store={store}><ListPassword /></Provider>)
  //const shallowwrapper = shallow(<ListPassword  />)

  const initState = [
    {"id":1,"url":"http://lalala.com","username":"mantap","password":"mantap","createdAt":"lqlq","updatedAt":"lwle"},
    {"id":2,"url":"http://lalala.com","username":"santap","password":"mantap","createdAt":"","updatedAt":""}
  ];
  it('has h1',()=>{
    //store.dispatch(fetchPasswordDone(initState));
    //console.log(mountwrapper.find(Table.HeaderCell));
    expect(mountwrapper.find('h1')).toHaveLength(1)
  })

})
