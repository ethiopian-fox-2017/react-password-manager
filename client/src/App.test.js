import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { App } from './App';
import { shallow } from 'enzyme';

import AddPassword from './components/addPassword';
import ViewPassword from './components/viewPassword';
import Header from './components/header';
import Errorview from './components/error';

it('renders without crashing', () => {
  const wrapper = shallow (<App />);
  expect(wrapper.find('div')).toBeDefined()
  expect(wrapper.containsAllMatchingElements([
    <Header />
  ])).toBe(true);
  expect(wrapper.find(Route)).toHaveLength(3);

});
