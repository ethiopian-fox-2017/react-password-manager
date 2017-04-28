import React from 'react'
import ReactDOM from 'react-dom'
import PasswordForm from './PasswordForm'
import { shallow } from 'enzyme'

describe('<PasswordForm />', () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<PasswordForm />)
  })

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined()
  })

  test(`should have header text of 'Password Form'`, () => {
    expect(wrapper.find('h1').first().text()).toEqual('Password Form')
    expect(wrapper.find('#url')).toBeDefined()
    expect(wrapper.find('#username')).toBeDefined()
    expect(wrapper.find('#password')).toBeDefined()
  })

  test(`should start with empty text`, () => {
    expect(wrapper.state('url')).toEqual('')
    expect(wrapper.state('username')).toEqual('')
    expect(wrapper.state('password')).toEqual('')
  })

  test(`should state changed when input has been changed`, () => {
    let e = {
      target: {
        name: 'url',
        value: 'http://localhost:3000'
      }
    }
    wrapper.instance().handleChange(e)
    expect(wrapper.state('url')).toEqual('http://localhost:3000')
  })

})