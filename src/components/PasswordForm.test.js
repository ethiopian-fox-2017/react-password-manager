import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';

import store from '../store';
import { PasswordForm } from './PasswordForm.js';

describe('<PasswordForm />', () => {
  test('renders password form without crashing', () => {
    const wrapper = mount(<PasswordForm store={store}/>)
    expect(wrapper.find('form')).toHaveLength(1)
  });
  test('should have url input form', () => {
    const wrapper = mount(<PasswordForm store={store}/>)
    expect(wrapper.find('#urlForm')).toHaveLength(1)
  });
  test('should have username input form', () => {
    const wrapper = mount(<PasswordForm store={store}/>)
    expect(wrapper.find('#usernameForm')).toHaveLength(1)
  });
  test('should have password input form', () => {
    const wrapper = mount(<PasswordForm />)
    expect(wrapper.find('#passwordForm')).toHaveLength(1)
  });
  test('should have save button', () => {
    const wrapper = mount(<PasswordForm />)
    expect(wrapper.find('#saveButton')).toHaveLength(1)
  });
  test('url input should be same', () => {
    const wrapper = shallow(<PasswordForm />)
    wrapper.find('#urlForm').simulate('change', {target: {name:'url', value: 'url'}});
    expect(wrapper.state('url')).toEqual('url');
  });
  test('username input should be same', () => {
    const wrapper = shallow(<PasswordForm />)
    wrapper.find('#usernameForm').simulate('change', {target: {name:'username', value: 'username'}});
    expect(wrapper.state('username')).toEqual('username');
  });
  test('password input should be same', () => {
    const wrapper = shallow(<PasswordForm />)
    wrapper.find('#passwordForm').simulate('change', {target: {name:'password', value: 'password'}});
    expect(wrapper.state('password')).toEqual('password');
  })
  test('save button should save state', () => {
    const wrapper = shallow(<PasswordForm />)
    wrapper.find('#passwordForm').simulate('change', {target: {name:'password', value: 'password'}});
    wrapper.find('#saveButton').simulate('click');
    expect(wrapper.state('password')).toEqual('password');
  })
  test('save button should save state 2', () => {
    const wrapper = shallow(<PasswordForm />)
    let e = {
      target: {
        name: 'password',
        value: 'password',
      }
    }
    wrapper.instance().handleChange(e)
    expect(wrapper.state('password')).toEqual('password');
  })
})
