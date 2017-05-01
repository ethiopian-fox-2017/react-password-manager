import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store'
import { mount,shallow } from 'enzyme';
import { Button,Modal,Form ,requestAnimationFrame} from 'semantic-ui-react';
import EditPassword, {EditPassword as EditPassword1 } from '../components/viewPassword/editPassword'
import {fetchPasswordDone,fetchPassword,addPassword,deletePassword,searchPassword,editPassword } from '../actions';


describe('edit password',()=>{
  let newpassword={id:2,url:"http://lalala3.com",username:"mantap3",password:"mantap3"};
    const mountwrapper = mount(<Provider store={store}><EditPassword password={newpassword} /></Provider>)
    const shallowwrapper = shallow(<EditPassword1 password={newpassword} />)
  it('has button',()=>{
    expect(shallowwrapper.find(Button)).toHaveLength(3);
  })
  it('has modal',()=>{
    expect(shallowwrapper.find(Modal.Header)).toHaveLength(1);
    expect(shallowwrapper.find(Form)).toHaveLength(1);
    expect(shallowwrapper.find(Form.Field)).toHaveLength(3);
    expect(shallowwrapper.find('input')).toHaveLength(3);
    expect(shallowwrapper.find('label')).toHaveLength(3);
    expect(shallowwrapper.find(Modal.Content)).toHaveLength(1);
  })
  it('has state',()=>{
     let password={
       url:'',
       username:'',
       password:'',
       createdAt:'',
       updatedAt:'',
     };
     expect(shallowwrapper.state().password).toEqual(password);
      expect(shallowwrapper.state().modalOpen).toEqual(false);
  })
  it('has openModal,closeModal',()=>{
      shallowwrapper.instance().openModal()
      expect(shallowwrapper.state().modalOpen).toEqual(true);
      shallowwrapper.instance().closeModal()
      expect(shallowwrapper.state().modalOpen).toEqual(false);
  })
  it('handleChange ',()=>{
    shallowwrapper.instance().handleChange({name:'url',value:'httl://lalal.com'});
    expect(shallowwrapper.state('password')).toHaveProperty('url','httl://lalal.com');
    shallowwrapper.instance().handleChange({name:'username',value:'ego'});
    expect(shallowwrapper.state('password')).toHaveProperty('username','ego');
    shallowwrapper.instance().handleChange({name:'password',value:'P@ssword'});
    expect(shallowwrapper.state('password')).toHaveProperty('password','P@ssword');
  })
  it('did mount ',()=>{
    shallowwrapper.instance().componentDidMount();
  })
  
})
