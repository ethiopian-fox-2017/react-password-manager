import React,{ Component } from 'react';
import { connect } from 'react-redux';

import './myComponent.css';
import { savePassword } from '../actions'

export class PasswordForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      url: '',
      username: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.saveForm = this.saveForm.bind(this);
    this.checkUppercase = this.checkUppercase.bind(this);
    this.checkLowercase = this.checkLowercase.bind(this);
    this.checkSpecialChar = this.checkSpecialChar.bind(this);
    this.checkNumber = this.checkNumber.bind(this);
    this.checkLength = this.checkLength.bind(this);
  }

  saveForm(e){
    e.preventDefault()
    const newProfile = this.state;
    this.props.savePassword(newProfile);
  }

  handleChange(e){
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  checkUppercase(){
    let patt  = /([A-Z])/g
    let str   = this.state.password
    let check = patt.test(str)
    console.log(check);
    return check
  }

  checkLowercase(){
    let patt  = /[a-z]/g
    let str   = this.state.password
    let check = patt.test(str)
    return check
  }

  checkSpecialChar(){
    let patt  = /[!@#$%^&*()_+-=[]{};':"|,.<>\/?]/g
    let str   = this.state.password
    let check = patt.test(str)
    return check
  }

  checkNumber(){
    let patt  = /[0-9]/g
    let str   = this.state.password
    let check = patt.test(str)
    return check
  }

  checkLength(){
    if(this.state.password.length >= 5){
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <div className='myContainer'>
        <form onSubmit={(e) => this.saveForm(e)}>
          <div className="form-group">
            <label htmlFor="urlForm">URL</label>
            <input
            type="text"
            className="form-control"
            id="urlForm"
            name="url"
            value={this.state.url}
            onChange={this.handleChange}
            placeholder="url..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="usernameForm">Username</label>
            <input
            type="text"
            className="form-control"
            id="usernameForm"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="username..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordForm">Password</label>
            <input
            type="password"
            className="form-control"
            id="passwordForm"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="password..."
            />
          </div>
          <button
          id="saveButton"
          type="submit"
          className="btn btn-primary"
          >Save</button>
        </form>
        <br />
        <p>Password Strength: </p>
        { this.checkUppercase() ? (
          <p className='green'>Password harus memiliki setidaknya satu karakter huruf besar (upper-case)</p>
        ):(
          <p className='red'>Password harus memiliki setidaknya satu karakter huruf besar (upper-case)</p>
        )}
        { this.checkLowercase() ? (
          <p className='green'>Password harus memiliki setidaknya satu karakter huruf kecil (lower-case)</p>
        ):(
          <p className='red'>Password harus memiliki setidaknya satu karakter huruf kecil (lower-case)</p>
        )}
        { this.checkSpecialChar() ? (
          <p className='green'>Password harus memiliki setidaknya satu karakter spesial (#$@!&%...)</p>
        ):(
          <p className='red'>Password harus memiliki setidaknya satu karakter spesial (#$@!&%...)</p>
        )}
        { this.checkNumber() ? (
          <p className='green'>Password harus memiliki setidaknya satu angka</p>
        ):(
          <p className='red'>Password harus memiliki setidaknya satu angka</p>
        )}
        { this.checkLength() ? (
          <p className='green'>Password harus memiliki panjang (length) lebih dari 5 karakter</p>
        ):(
          <p className='red'>Password harus memiliki panjang (length) lebih dari 5 karakter</p>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    savePassword: (newProfile) => dispatch(savePassword(newProfile))
  }
}

export default connect(null,mapDispatchToProps)(PasswordForm);
