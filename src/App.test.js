import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';

import store from './store'
import App from './App';
import PasswordForm from './components/PasswordForm';
import PasswordSearchList from './components/PasswordSearchList';

import DummyComponent from './components/DummyComponent';

console.log(store.getState());

it('renders without crashing', () => {
  const div = document.createElement('div');
  const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>);
});

describe('pure render testing', () => {
  it('should render PasswordSearchList Component', () => {
    const wrapper = shallow(<App />);
      // expect(wrapper.containsMatchingElement(<DummyComponent />)).toBe(true);
    expect(wrapper.containsAllMatchingElements([<PasswordSearchList />])).toBe(true)
  })
})

describe('with redux render testing', () => {
  it('should render All inside App', () => {
    const wrapper = shallow(<App />);
      expect(wrapper.containsAllMatchingElements([
        <div>
          <img />
          <h2>Password Manager</h2>
        </div>,
        <PasswordForm />,
        <br />,
        <PasswordSearchList />,
      ])).toBe(true);
  })
})

describe('dummy component', () => {
  it('should render dummy class inside dummy', () => {
    const wrapper = shallow(<DummyComponent />);
      expect(wrapper.find('.dummy')).toHaveLength(1);
  })

  it('should render h1 component inside dummy', () => {
    const wrapper = shallow(<DummyComponent />);
      expect(wrapper.containsMatchingElement(<h1>dummy</h1>)).toBe(true);
  })

  it('should render all component inside dummy', () => {
    const wrapper = shallow(<DummyComponent />);
      expect(wrapper.containsAllMatchingElements([
        <h1>dummy</h1>,
        <h2>dummy2</h2>,
        <p>papoy</p>,
      ])).toBe(true);
  })
})
