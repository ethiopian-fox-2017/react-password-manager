import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import store from './store'
import {shallow} from 'enzyme'

describe('Testing Index.js', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <App/>
      </Provider>
    )
  })
  test('renders without crashing', () => {
    expect(wrapper).toBeDefined()
  })
})
