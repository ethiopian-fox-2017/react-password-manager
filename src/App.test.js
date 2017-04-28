import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

describe('Render Test', () => {

  it('should render without error', () => {
    const actual = shallow(<App />).contains(<div className="App"></div>)
    expect(actual).toBe(true)
  })

})
