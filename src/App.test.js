import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Header from './components/Header';
import PassList from './components/PasswordList/PassList';

describe('<App />', () => {
  it('should render Header and Password Form', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.containsAllMatchingElements([
      <Header />,
      <PassList />,
    ])).toBeTrue;
  });
});
