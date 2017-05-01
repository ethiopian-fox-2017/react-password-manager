import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store'
import { mount } from 'enzyme';
import { Button } from 'semantic-ui-react';
import DeletePassword from '../components/viewPassword/deletePassword'
import {fetchPasswordDone,fetchPassword,addPassword,deletePassword,searchPassword,editPassword } from '../actions';



describe('delete password',()=>{
  const wrapper = mount(<Provider store={store}><DeletePassword id={1} /></Provider>)
  it('contain props',()=>{
    expect(wrapper.props().children.props.id).toEqual(1);
  })
  it('contain Button',()=>{
    expect(wrapper.find(Button)).toHaveLength(1);
  })
  it('contain click',()=>{
    const initState = [
      {"id":1,"url":"http://lalala.com","username":"mantap","password":"mantap","createdAt":"lqlq","updatedAt":"lwle"},
      {"id":2,"url":"http://lalala.com","username":"santap","password":"mantap","createdAt":"","updatedAt":""}
    ];
    store.dispatch(fetchPasswordDone(initState));
    wrapper.find(Button).simulate('click',{target:{value:1}});
    //console.log('----------',store.getState('passwords'));
    expect(store.getState('passwords').passwords).toHaveLength(1)
  })

})
