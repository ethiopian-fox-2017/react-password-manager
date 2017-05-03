import React from 'react'
import { shallow, mount } from 'enzyme'

import { PasswordForm } from './PasswordForm'
import PasswordChecker from './PasswordChecker'

import { Paper, RaisedButton, Snackbar, TextField } from '../MaterialUi'

describe('<PasswordForm />', () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<PasswordForm />)
  })

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined()
  })

  // test(`should render some elements`, () => {
  //   expect(wrapper.find('h1').first().text()).toEqual('Password Form')
  //   expect(wrapper.find('#url')).toBeDefined()
  //   expect(wrapper.find('#username')).toBeDefined()
  //   expect(wrapper.find('#password')).toBeDefined()
  // })

  // test('should render <Paper />,<TextField />,<RaisedButton />', () => {
  //   expect(wrapper.containsAllMatchingElements([
  //     <Paper />,
  //     <TextField />,
  //     <RaisedButton />
  //   ])).toBeDefined()
  // })

  test(`should start with default state`, () => {
    let form = wrapper.state().form
    expect(form).toEqual({
      url: '',
      username: '',
      password: '',
      createdAt: null,
      updatedAt: null
    })
  })

  test(`should state changed when input has been changed`, () => {
    let e = {
      target: {
        name: 'url',
        value: 'http://localhost:3000'
      }
    }
    wrapper.instance().handleChange(e)
    let form = wrapper.state().form
    expect(form.url).toEqual('http://localhost:3000')

    e = {
      target: {
        name: 'username',
        value: 'tngmichael'
      }
    }
    wrapper.instance().handleChange(e)
    form = wrapper.state().form
    expect(form.username).toEqual('tngmichael')

    e = {
      target: {
        name: 'password',
        value: '1234'
      }
    }
    wrapper.instance().handleChange(e)
    form = wrapper.state().form
    expect(form.password).toEqual('1234')

    expect(form).toEqual({
      url: 'http://localhost:3000',
      username: 'tngmichael',
      password: '1234',
      createdAt: null,
      updatedAt: null
    })
  })

  test('test TextField', () => {
    let _TextField = wrapper.find('TextField')
    expect(_TextField).toHaveLength(3)

    let name = ['url', 'username', 'password']
    let value = ['url', 'username', 'password']
    _TextField.forEach((node, index) => {
      expect(node.prop('onChange')).toBeInstanceOf(Function)
      let e = {
        target: {
          name: name[index],
          value: value[index],
        }
      }
      node.prop('onChange')(e)
      expect(wrapper.state('form')[name[index]]).toEqual(value[index])
    })

  })

  test('test PasswordChecker', () => {
    let _PasswordChecker = wrapper.find('PasswordChecker')
    expect(_PasswordChecker).toHaveLength(1)
    const ref = _PasswordChecker.node.ref
    expect(ref).toBeInstanceOf(Function)
    ref(new PasswordChecker)
    expect(wrapper.instance().passwordChecker).toBeInstanceOf(PasswordChecker)
  })

  test('test RaisedButton', () => {
    let RaisedButton = wrapper.find('RaisedButton')
    expect(RaisedButton).toHaveLength(1)
    const prop = RaisedButton.prop('onTouchTap')
    expect(prop).toBeInstanceOf(Function)

    let _PasswordChecker = wrapper.find('PasswordChecker')
    expect(_PasswordChecker).toHaveLength(1)
    const ref = _PasswordChecker.node.ref
    expect(ref).toBeInstanceOf(Function)
    ref(new PasswordChecker)

    prop()
    expect(wrapper.state('open')).toEqual(true)
  })

})