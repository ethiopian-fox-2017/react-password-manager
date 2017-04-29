import React from 'react'
import ReactDOM from 'react-dom'
import { PasswordForm } from './PasswordForm'
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

})