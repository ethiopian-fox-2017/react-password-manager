import React from 'react';
import { FormCreate } from './FormCreate';
import { shallow } from 'enzyme';

describe('<FormCreate />', () => {

  let wrapper
  beforeEach(() => {
      wrapper = shallow(<FormCreate/>)
  })

  test('Render without crashing', () => {
    expect(wrapper).toBeDefined()
  })

  test('Should start with default state', () => {
    const expectedState = {
      url: '',
      username: '',
      password: '',
    }
    expect(wrapper.state()).toEqual(expectedState)
  })

  test('Should render <input> ', () => {
    const wrapper = shallow(<input />)
    expect(wrapper.containsAllMatchingElements([
      <input />,
    ])).toBeDefined()
  })

  test('Should state changed when input has been changed ', () => {
    let e = {
      target: {
        name: 'url',
        value: 'http://facebook.com'
      }

    }
    wrapper.instance().handleChange(e)
    expect(wrapper.state('url')).toEqual('http://facebook.com')

    e = {
      target: {
        name: 'username',
        value: 'danilags'
      }
    }
    wrapper.instance().handleChange(e)
    expect(wrapper.state('username')).toEqual('danilags')

    e = {
      target: {
        name: 'password',
        value: 'daniel1233'
      }
    }

    wrapper.instance().handleChange(e)
    expect(wrapper.state('password')).toEqual('daniel1233')
  })
})
