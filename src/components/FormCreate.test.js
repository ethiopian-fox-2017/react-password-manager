import React from 'react';
import { FormCreate } from './FormCreate';
import { shallow } from 'enzyme';

describe('<FormCreate />', () => {
  test('Render without crashing', () => {
    const wrapper = shallow(<FormCreate />)
    expect(wrapper).toBeDefined()
  })

  test('Should start with default state', () => {
    const wrapper = shallow(<FormCreate />)
    const expectedState = {
      url: '',
      username: '',
      password: '',
    }
    expect(wrapper.state()).toEqual(expectedState)
  })
})
