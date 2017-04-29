import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

import {
  MuiThemeProvider,
  AppBar,
  Drawer } from './MaterialUi'

describe('<App />', () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined()
  });

  test('should render MuiThemeProvider  ', () => {
    expect(wrapper.containsAllMatchingElements([
      <MuiThemeProvider />,
      <AppBar />,
      <Drawer />
    ])).toBeDefined()
  });

  test(`default state on rendered`, () => {
    let form = wrapper.state()
    expect(form.open).toEqual(false)
    expect(form.current).toEqual(0)
  })

  test(`should handleToggle run correctly`, () => {
    wrapper.instance().handleToggle()
    expect(wrapper.state('open')).toEqual(true)
  })

  test(`should handleCloseAndSwitch run correctly`, () => {
    wrapper.instance().handleCloseAndSwitch(null, 1)
    expect(wrapper.state('open')).toEqual(false)
    expect(wrapper.state('current')).toEqual(1)
  })

})