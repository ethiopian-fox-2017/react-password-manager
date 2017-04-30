import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';

import store from '../store'
// import App from './App';
import PasswordForm from './PasswordForm';

describe('pure render testing', () => {
  it('should render fieldset legend Component', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <PasswordForm />
      </Provider>);
      expect(wrapper.find('fieldset')).toBeDefined();
      expect(wrapper.containsAllMatchingElements([
        <legend />
      ])).toEqual(true);
      // expect(wrapper.containsMatchingElement(<DummyComponent />)).toBe(true);
  //   expect(wrapper.containsAllMatchingElements([
  //
  //     <legend >Password Form</legend>
  // ])).toBe(true)
  })
})
