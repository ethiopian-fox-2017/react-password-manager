import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import App from './App';
import FormLogin from './components/FormLogin';
import { Form } from './components/FormLogin/Form';
import List from './components/List';
import store from './store';


describe('Testing DOM', () => {
  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  // });


  it('check element input in FormLogin', () => {
    const wrapper = mount(<Provider store={store}><App><FormLogin /></App></Provider>);
    expect(wrapper.containsAnyMatchingElements([
      <button className="button is-success">
        Save
      </button>,
    ])).toEqual(true);
  });

  it('check state url in FormLogin', () => {
    const wrapper = mount(<Form />);
    expect(wrapper.state('url')).toEqual('');
  });

  it('check state username in FormLogin', () => {
    const wrapper = mount(<Form />);
    expect(wrapper.state('username')).toEqual('');
  });

  it('check state password in FormLogin', () => {
    const wrapper = mount(<Form />);
    expect(wrapper.state('password')).toEqual('');
  });

  it('check class nav in App', () => {
    const wrapper = mount(<Provider store={store}><App /></Provider>);
    expect(wrapper.find('.navbarku')).toHaveLength(1);
  });

  it('renders correct routes for Home', () => {
    const wrapper = shallow(<App />);
    const actual = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
    expect(actual['/']).toBe(FormLogin);
  });

  it('renders correct routes for List', () => {
    const wrapper = shallow(<App />);
    const actual = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
    expect(actual['/list']).toBe(List);
  });
});
