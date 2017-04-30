import React from 'react'
import ReactDOM from 'react-dom'
import PasswordList from './PasswordList'
import { shallow } from 'enzyme'

import { Provider } from 'react-redux'
import store from '../store'

describe('<PasswordList />', () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Provider store={store}><PasswordList /></Provider>)
  })

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined()
  })

})