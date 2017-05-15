import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import store from './store';
import App from './App';

describe('Test index.js ', () =>  {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>,
    )
  })

  test('Renders without crashing', () => {
    expect(wrapper).toBeDefined()
  })
})
