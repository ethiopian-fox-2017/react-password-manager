import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPassword, getList } from '../../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      username: '',
      password: '',
      url: '',
      createdAt: new Date(),
      warning: '',
      status: false,
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
    this.setState({ ...newPass, status: false });
  }

  verifyPass(newPass, passwords, pass) {
    const lowerCase = /^(?=.*[a-z])/;
    const upperCase = /^(?=.*[A-Z])/;
    const number = /^(?=.*[0-9])/;
    const special = /^(?=.*[!@#$%^&*])/;
    const length = /^(?=.{5,})/;

    if (!lowerCase.test(pass)) {
      this.setState({ warning: 'Need at least 1 lowercase character' });
    } else if (!upperCase.test(pass)) {
      this.setState({ warning: 'Need at least 1 uppercase character' });
    } else if (!number.test(pass)) {
      this.setState({ warning: 'Need at least 1 number' });
    } else if (!special.test(pass)) {
      this.setState({ warning: 'Need at least 1 special character' });
    } else if (!length.test(pass)) {
      this.setState({ warning: 'Need at least 5 character' });
    } else {
      this.setState({
        id: 0,
        username: '',
        password: '',
        url: '',
        createdAt: new Date(),
        warning: '',
        status: true,
      });
      this.props.addPassword(passwords, newPass);
    }
  }

  render() {
    const { passwords } = this.props;
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
              type="text"
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
              onClick={() => { this.verifyPass(this.state, passwords, this.state.password); }}
            >
              Save
            </button>
          </p>
        </div>
        { this.state.warning !== '' ?
          <div className="notification is-danger">
            <button className="delete" />
            {this.state.warning}
          </div>
          :
          <div />
        }

        { this.state.status ?
          <div className="notification is-success">
            <button className="delete" />
            Success
          </div>
          :
          <div />
        }
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

Form.propTypes = {
  passwords: PropTypes.arrayOf(PropTypes.object).isRequired,
  getList: PropTypes.func.isRequired,
  addPassword: PropTypes.func.isRequired,
};

export default connect(stateToProps, dispatchToProps)(Form);
