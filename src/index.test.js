import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import App from './App'
import store from './store'

describe('Test index.js', () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    )
  })

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined()
  })

})