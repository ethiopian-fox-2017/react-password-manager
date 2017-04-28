import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';

import store from './store'
import App from './App';
import { PasswordForm, PasswordList, Search } from './components'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>);
});

describe('with redux render testing', () => {
  it('should render All inside App', () => {
    const wrapper = shallow(
      <App />);
      expect(wrapper.containsAllMatchingElements([
        <div>
          <img />
          <h2>React Password Manager</h2>
        </div>,
        <PasswordForm />,
        <center>
        <fieldset>
          <legend>Password-List</legend>
          <Search />
          <PasswordList />
        </fieldset>
        </center>
      ])).toBe(true);
  })
})
