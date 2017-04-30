import React from 'react';
import { connect } from 'react-redux';

import { addData } from '../actions';

const styles = {
  card : {
    margin: 20,
    /* Add shadows to create the "card" effect */
    boxShadow: '0 4 8 0 rgba(0,0,0,0.2)',
    border: 'solid grey',
    width: 420,
    transition: '0.3s',
    borderRadius: 5 /* 5px rounded corners */
  },
  container: {
    padding: 20
  },
  input: {
    width: '200px'
  },
  checked: {
    color: '#00ff00'
  }
}

class PasswordForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        url: '',
        username: '',
        password: '',
        hasLowerCase: false,
        hasUpperCase: false,
        hasSpecialChar: false,
        hasDigit: false,
        hasEnoughLength: false
    }
  }

  handleChange(e){
    let newState = {};
    newState[e.target.name] = e.target.value;
    // console.log(this.state);
    this.setState(newState);
    if(e.target.name === 'password'){
      this.setState({
        hasUpperCase: e.target.value.match(/[A-Z]/),
        hasLowerCase: e.target.value.match(/[a-z]/),
        hasDigit: e.target.value.match(/[0-9]/),
        hasSpecialChar: e.target.value.match(/[!@#$&*]/),
        hasEnoughLength: e.target.value.length > 5,
      })
    }
  }

  isPasswordStrongEnough(){
    if(this.state.hasUpperCase && this.state.hasLowerCase && this.state.hasDigit
      && this.state.hasSpecialChar && this.state.hasEnoughLength) return true;
    else return false;
  }

  handleSubmit(e){
    e.preventDefault();
    if(!this.isPasswordStrongEnough()) return;
    const ids = this.props.list.map(item => item.id);
    const newId = Math.max(...ids) + 1;
    this.props.addData({
      id: newId,
      url: this.state.url,
      username: this.state.username,
      password: this.state.password
    })
    this.setState({
      url: '',
      username: '',
      password: '',
      hasUpperCase: false,
      hasLowerCase: false,
      hasDigit: false,
      hasSpecialChar: false,
      hasEnoughLength: false
    })
  }

  render () {
    return (
      <div>
      <center>
      <fieldset style={styles.card}>
        <legend >Password Form</legend>
        <div style={styles.container}>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <table>
          <tbody>
            <tr>
              <td>URL </td>
              <td><input name="url" onChange={this.handleChange.bind(this)} value={this.state.url} style={styles.input} type="text" /></td>
            </tr>
            <tr>
              <td>Username </td>
              <td><input name="username" onChange={this.handleChange.bind(this)} value={this.state.username} style={styles.input} type="text" /></td>
            </tr>
            <tr>
              <td>Password </td>
              <td><input name="password" onChange={this.handleChange.bind(this)} value={this.state.password} style={styles.input} type="text" /></td>
            </tr>
            <tr>
              <td />
              <td><button>Save</button></td>
            </tr>
            <tr>
              <td><br /></td>
            </tr>
            <tr>
              <td colSpan="2">[{this.state.hasLowerCase ? <label style={styles.checked}>v</label> : ' '}] Password should at least has 1 lower case</td>
            </tr>
            <tr>
              <td colSpan="2">[{this.state.hasUpperCase ? <label style={styles.checked}>v</label> : ' '}] Password should at least has 1 upper case</td>
            </tr>
            <tr>
              <td colSpan="2">[{this.state.hasDigit ? <label style={styles.checked}>v</label> : ' '}] Password should at least has 1 number</td>
            </tr>
            <tr>
              <td colSpan="2">[{this.state.hasSpecialChar ? <label style={styles.checked}>v</label> : ' '}] Password should at least has 1 special character</td>
            </tr>
            <tr>
              <td colSpan="2">[{this.state.hasEnoughLength ? <label style={styles.checked}>v</label> : ' '}] Password should have more than 5 characters</td>
            </tr>
          </tbody>
          </table>
        </form>
        </div>
        </fieldset>
      </center>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.passwordData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addData: (data) => dispatch(addData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordForm);
