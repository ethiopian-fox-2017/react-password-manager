import React from 'react'
import { PasswordForm } from './PasswordForm'
import { shallow } from 'enzyme'

import { Paper, RaisedButton, Snackbar, TextField } from '../MaterialUi'

describe('<PasswordForm />', () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<PasswordForm />)
  })

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined()
  })

  test('should start with default state', () => {
    const expectedState = {
      form: {
        url: '',
        username: '',
        password: '',
        createdAt: null,
        updatedAt: null,
      },
      open: false,
    }

    expect(wrapper.state()).toEqual(expectedState)
  })

  test('should render <Paper />,<TextField />,<RaisedButton />', () => {
    expect(wrapper.containsAllMatchingElements([
      <Paper />,
      <TextField />,
      <RaisedButton />
    ])).toBeDefined()
  })

  test('should state same as input changed', () => {
    let e = {
      target: {
        name: 'url',
        value: 'www.google.com'
      }
    }
    wrapper.instance().handleChange(e)
    expect(wrapper.state('url')).toEqual('www.google.com')

    

  })

})