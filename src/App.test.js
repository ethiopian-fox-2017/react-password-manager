import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';

import store from './store'
import App from './App';
import { PasswordForm, PasswordList, Search } from './components'

it('App renders without crashing', () => {
  const div = document.createElement('div');
  const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>);
});

describe('App with redux render testing', () => {
  it('successfully render All Matching Elements inside App', () => {
    const wrapper = shallow(
      <App />);
      expect(wrapper.containsAllMatchingElements([
          <div>
            <div>
              <img />
              <h2>React-Redux Password Manager</h2>
            </div>
            <PasswordForm />
            <center>
            <fieldset>
              <legend><b>Password-List</b></legend>
              <center><Search /></center>
              <PasswordList />
            </fieldset>
            </center>
          </div>
      ])).toBe(true);
  })
})
