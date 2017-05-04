import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editPassword, deletePassword } from '../../actions';

class Password extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      url: '',
      username: '',
      password: '',
      updatedAt: new Date(),
      warning: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  setStateToNull() {
    this.setState({
      id: 0,
      url: '',
      username: '',
      password: '',
      warning: '',
    });
  }

  handleChange(e) {
    const editData = {};
    editData[e.target.name] = e.target.value;
    this.setState(editData);
  }

  showEditForm(data) {
    this.setState({
      ...data,
      warning: '',
      updatedAt: (new Date()).toLocaleString(),
    });
  }

  verifyPass(pass) {
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
      });
      this.props.editPassword(this.state);
      this.setStateToNull();
    }
  }

  render() {
    return (
      <tbody>
        {(this.state.id > 0) ?
          <tr>
            <th>{this.props.password.id}</th>
            <td>
              <input
                className="input"
                type="text"
                name="url"
                placeholder="URL"
                onChange={this.handleChange}
                value={this.state.url}
              />
            </td>
            <td>
              <input
                className="input"
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
                value={this.state.username}
              />
            </td>
            <td>
              <input
                className="input"
                type="text"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </td>
            <td>{(new Date(this.props.password.createdAt)).toLocaleDateString()}</td>
            <td>{this.props.password.updatedAt}</td>
            <td>
              <button
                onClick={() => {
                  this.verifyPass(this.state.password);
                }}
                className="button is-primary is-outlined"
              >Save</button>
            </td>
            <td>
              <button
                className="button is-danger is-outlined"
                onClick={() => (this.setStateToNull())}
              >
                Cancel
              </button>
            </td>
            { this.state.warning !== '' ?
              <div className="notification is-danger">
                <button className="delete" />
                {this.state.warning}
              </div>
              :
              <div />
            }
          </tr>
         :
          <tr>
            <th>{this.props.password.id}</th>
            <td>{this.props.password.url}</td>
            <td>{this.props.password.username}</td>
            <td>{this.props.password.password}</td>
            <td>{(new Date(this.props.password.createdAt)).toLocaleString()}</td>
            <td>{this.props.password.updatedAt}</td>
            <td>
              <button
                onClick={() => this.showEditForm(this.props.password)}
                className="button is-primary is-outlined"
              >Edit</button>
            </td>
            <td>
              <button
                className="button is-danger is-outlined"
                onClick={() => this.props.deletePassword(this.props.password.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        }

      </tbody>


    );
  }
}

const dispatchToProps = dispatch => ({
  editPassword: data => dispatch(editPassword(data)),
  deletePassword: data => dispatch(deletePassword(data)),
});

Password.propTypes = {
  deletePassword: PropTypes.func.isRequired,
  editPassword: PropTypes.func.isRequired,
  password: PropTypes.objectOf().isRequired,
};

export default connect(null, dispatchToProps)(Password);
