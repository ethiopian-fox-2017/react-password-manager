import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'

import PasswordChecker from './PasswordChecker'

import {
  MuiThemeProvider,
  injectTapEventPlugin } from '../MaterialUi'

injectTapEventPlugin()

describe('<PasswordChecker />', () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <PasswordChecker
        password={''}
      />
    )
  })

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined()
  })

  test(`should call componentDidMount on mounted`, () => {
    const spy = sinon.spy(PasswordChecker.prototype, "componentDidMount")
    const wrapper = mount(
      <MuiThemeProvider>
        <PasswordChecker
          password={'aA1!1'}
        />
      </MuiThemeProvider>
    )
    expect(spy.calledOnce).toEqual(true)

    const state = wrapper.find('PasswordChecker').node.state
    expect(state).toEqual(
      { minOneUpperCase: true,
        minOneLowerCase: true,
        minOneSpecialChar: true,
        minOneNumber: true,
        minFiveLength: true }
    )
  })

  test(`should call componentWillReceiveProps on update`, () => {
    const spy = sinon.spy(PasswordChecker.prototype, "componentWillReceiveProps")
    const wrapper = shallow(
      <PasswordChecker
        password={''}
      />
    )
    expect(spy.calledOnce).toEqual(false)
    expect(wrapper.instance().isStrong()).toEqual(false)
    wrapper.setProps({ password: 'aA1!1' })
    expect(spy.calledOnce).toEqual(true)
    expect(wrapper.instance().isStrong()).toEqual(true)
  })



})