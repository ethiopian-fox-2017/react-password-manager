import React from 'react';
import { shallow,mount } from 'enzyme';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store'
import { ContentPassword } from '../components/viewPassword/contentPassword';
import {  Table, Button } from 'semantic-ui-react';
import {DeletePassword} from '../components/viewPassword/deletePassword'
import {EditPassword} from '../components/viewPassword/editPassword'

describe ('content password test ',()=>{
  let password ={"id":1,"url":"http://lalala.com","username":"santap","password":"mantap","createdAt":"","updatedAt":""}
  const wrapper = mount(<Provider store={store}><ContentPassword password={password} /></Provider>)
  it('has table',()=>{
     expect (wrapper.find(Table.Row)).toHaveLength(1);
     expect (wrapper.find(Table.Cell)).toHaveLength(7);
  })
  it('has Button',()=>{
    expect (wrapper.find(DeletePassword)).toHaveLength(1);
    expect (wrapper.find(EditPassword)).toHaveLength(1);
  })
  it('has props',()=>{
    expect (wrapper.props().children.props.password).toEqual(password);
  })
})
