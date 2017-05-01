import React from 'react';
import ReactDOM from 'react-dom';
import { shallow,mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store'

import {AddPassword} from '../components/addPassword';
import { Button, Checkbox, Form,Segment } from 'semantic-ui-react';

describe('<addPassword>',() => {
const wrapper = shallow (<AddPassword />);
const mountwrapper = mount(<Provider store={store}><AddPassword /></Provider>)

  it('has form ', () => {
    expect(wrapper.find(Form)).toHaveLength(1);
    expect(wrapper.find('label')).toHaveLength(3);
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(Form.Field)).toHaveLength(4);
    expect(wrapper.find(Segment)).toHaveLength(1);
  });
  it('has input url username password', () => {
    //expect(wrapper.find('#name')).toHaveLength(1)
    expect(wrapper.find('[name="username"]')).toHaveLength(1)
    expect(wrapper.find('[name="password"]')).toHaveLength(1)
    expect(wrapper.find('[name="url"]')).toHaveLength(1)
  });
  it('has button save', () => {
    expect(wrapper.find(Button)).toHaveLength(1)
  });
  it('has state password with properties',()=>{
    expect(wrapper.state('password')).toHaveProperty('url','');
    expect(wrapper.state('password')).toHaveProperty('username','');
    expect(wrapper.state('password')).toHaveProperty('password','');
    expect(wrapper.state('password')).toHaveProperty('createdAt','');
    expect(wrapper.state('password')).toHaveProperty('updatedAt','');
  })
  it('did mount',()=>{
    wrapper.instance().componentDidMount();
    expect(wrapper.state('submited')).toBe(false);
  });
  it('onchange',()=>{
    wrapper.instance().handleChange({name:'url',value:'httl://lalal.com'});
    expect(wrapper.state('password')).toHaveProperty('url','httl://lalal.com');
    wrapper.instance().handleChange({name:'username',value:'ego'});
    expect(wrapper.state('password')).toHaveProperty('username','ego');
    wrapper.instance().handleChange({name:'password',value:'P@ssword'});
    expect(wrapper.state('password')).toHaveProperty('password','P@ssword');
    
  })
  it('simulate',()=>{

    //mountwrapper.find(Button).simulate('click',{ preventDefault() {} })
    mountwrapper.find('[name="username"]').simulate('change',{target:{value:'makan'}})
    //console.log('----------lalalalala------',mountwrapper.props())
  })
});
