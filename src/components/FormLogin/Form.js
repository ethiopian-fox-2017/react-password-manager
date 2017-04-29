import React from 'react';
import { connect } from 'react-redux';
import { addPassword, getList } from '../../actions';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      username: '',
      password: '',
      url: '',
      createdAt: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.props.getList();
  }

  handleChange(e) {
    const newPass = {};
    newPass[e.target.name] = e.target.value;
    console.log(newPass);
    this.setState(newPass);
  }

  render() {
    return (
      <div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="text"
              name="url"
              placeholder="URL"
              onChange={this.handleChange}
              value={this.state.url}
            />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="text"
              name="username"
              placeholder="Email"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <span className="icon is-small is-left">
              <i className="fa fa-lock" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button
              className="button is-success"
              onClick={() => { this.props.addPassword(this.props.passwords, this.state); }}
            >
              Save
            </button>
          </p>
        </div>
      </div>
    );
  }
}

const stateToProps = state => ({
  passwords: state,
});

const dispatchToProps = dispatch => ({
  addPassword: (state, newPass) => dispatch(addPassword(state, newPass)),
  getList: () => dispatch(getList()),
});

export default connect(stateToProps, dispatchToProps)(Form);
