import React from 'react'
import { shallow } from 'enzyme'
import { Route } from 'react-router'

import App from './App'
import { Main, Add } from './components'

describe('Render Test', () => {

  it('should render without error', () => {
    const actual = shallow(<App />).find('.App')
    expect(actual).toHaveLength(1)
  })

  it('should render nav', () => {
    const actual = shallow(<App />).find('.nav')
    expect(actual).toHaveLength(1)
  })

  it('should render Main component from route "/"', () => {
    const actual = shallow(<App />).find(Route).reduce((pathMap, route) => {
      const routeProps = route.props()
      pathMap[routeProps.path] = routeProps.component
      return pathMap
    }, {})
    expect(actual['/']).toBe(Main)
  })

  it('should render Add component from route "/add"', () => {
    const actual = shallow(<App />).find(Route).reduce((pathMap, route) => {
      const routeProps = route.props()
      pathMap[routeProps.path] = routeProps.component
      return pathMap
    }, {})
    expect(actual['/add']).toBe(Add)
  })
})
