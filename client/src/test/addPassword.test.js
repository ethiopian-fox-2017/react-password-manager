import React from 'react';
import ReactDOM from 'react-dom';
import AddPassword from '../components/addPassword';
import { shallow } from 'enzyme';
import { Button, Checkbox, Form } from 'semantic-ui-react';

describe('<addPassword>',() => {
  const wrapper = shallow (<AddPassword />);

  it('has form ', () => {
    expect(wrapper.find(Form)).toHaveLength(1)
  });
  it('has input url username password', () => {
    //expect(wrapper.find('#name')).toHaveLength(1)
    expect(wrapper.find('[name="username"]')).toHaveLength(1)
    expect(wrapper.find('[name="password"]')).toHaveLength(1)
    expect(wrapper.find('[name="url"]')).toHaveLength(1)
  });
  it('has button save', () => {
    expect(wrapper.find(Button)).toHaveLength(1)
  });
});
