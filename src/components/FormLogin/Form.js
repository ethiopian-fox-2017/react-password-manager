import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      url: '',
      username: '',
      password: '',
    };
  }
  render() {
    return (
      <div>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="text" name="url" placeholder="URL" />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="text" name="username" placeholder="Email" />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="password" name="password" placeholder="Password" />
            <span className="icon is-small is-left">
              <i className="fa fa-lock" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success">
              Save
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default Form;
