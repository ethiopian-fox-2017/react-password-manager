import React from 'react'
import { NewAccount } from './NewAccount'
import { shallow } from 'enzyme'
import { Paper, TextField, RaisedButton} from '../MaterialUI'

describe('renders without crashing', () => {
  var wrapper
  beforeEach(() => {
    wrapper = shallow(<NewAccount />)
  })
  test('renders without crashing ',() => {
    expect(wrapper).toBeDefined()
  })

  test('should be have input form', () => {
    expect(wrapper.find('#url')).toBeDefined()
    expect(wrapper.find('#username')).toBeDefined()
    expect(wrapper.find('#password')).toBeDefined()
  })

  test('should state with default state', () => {
    wrapper.state('username')
    wrapper.state('url')
    wrapper.state('password')
    const expectedState = {
      username : '',
      password : '',
      url : '',
      errors : [],
    }

    expect(wrapper.state()).toEqual(expectedState)
  })

  test('should change when we input', () => {
    let e = {
      target : {
        name : 'url',
        value : 'www.coba.com'
      }
    }
    wrapper.instance().handleChange(e)
    expect(wrapper.state('url')).toEqual('www.coba.com')
     e = {
      target : {
        name : 'username',
        value : 'ridho'
      }
    }
    wrapper.instance().handleChange(e)
    expect(wrapper.state('username')).toEqual('ridho')
     e = {
      target : {
        name : 'password',
        value : '123'
      }
    }
    wrapper.instance().handleChange(e)
    expect(wrapper.state('password')).toEqual('123')
  })

  test('should render <Paper />,<TextField />, <RaisedButton />', () =>{
    expect(wrapper.containsAllMatchingElements([
      <Paper />,
      <TextField />,
      <RaisedButton />
    ])).toBeDefined()
  })

})
