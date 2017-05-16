import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import store from './store';
import App from './App';

import PasswordForm from './components/PasswordForm'
import PasswordList from './components/PasswordList'

describe('<App />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  });
  test('should have PasswordForm element in App', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(PasswordForm)).toHaveLength(1)
  })
  test('should have PasswordList element in App', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(PasswordList)).toHaveLength(1)
  })
})
