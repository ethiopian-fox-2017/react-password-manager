import React from 'react'
import App from './App'
import { shallow, mount } from 'enzyme'

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

  test('test props on AppBar', () => {
    const AppBar = wrapper.find('AppBar')
    expect(AppBar).toHaveLength(1)
    const props = AppBar.prop('onLeftIconButtonTouchTap')
    expect(props).toBeInstanceOf(Function)
    props()
    expect(wrapper.state('open')).toEqual(true)
  })

  test('test props on Drawer', () => {
    const Drawer = wrapper.find('Drawer')
    expect(Drawer).toHaveLength(1)
    const props = Drawer.prop('onRequestChange')
    expect(props).toBeInstanceOf(Function)
    props(true)
    expect(wrapper.state('open')).toEqual(true)
  })

  test('test props on MenuItems', () => {
    const MenuItems = wrapper.find('MenuItem')
    expect(MenuItems).toHaveLength(2)
    let props = MenuItems.at(0).prop('onTouchTap')
    expect(props).toBeInstanceOf(Function)
    props()
    expect(wrapper.state('current')).toEqual(0)
    props = MenuItems.at(1).prop('onTouchTap')
    expect(props).toBeInstanceOf(Function)
    props()
    expect(wrapper.state('current')).toEqual(1)
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