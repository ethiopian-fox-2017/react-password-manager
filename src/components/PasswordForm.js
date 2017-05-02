import React from 'react';
import { connect } from 'react-redux';
import { addData } from '../actions';

class PasswordForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: {
        url: '',
        username: '',
        password: ''
      },
      hasLowerCase:false,
      hasUpperCase:false,
      hasNumber:false,
      hasSpecial:false,
      has5Char:false
    }
  }

  validatePassword(value) {
    const regex1 = new RegExp('^(?=.*[a-z])')
    const regex2 = new RegExp('^(?=.*[A-Z])')
    const regex3 = new RegExp('^(?=.*[0-9])')
    const regex4 = new RegExp('^(?=.*[!@#$%^&*])')
    const regex5 = new RegExp('^(?=.{6,})');

    if(regex1.test(value)){
      this.setState({hasLowerCase:true})
    } else {
      this.setState({hasLowerCase:false})
    }

    if(regex2.test(value)) {
      this.setState({hasUpperCase:true})
    } else {
      this.setState({hasUpperCase:false})
    }

    if(regex3.test(value)) {
      this.setState({hasNumber:true})
    } else {
      this.setState({hasNumber:false})
    }

    if(regex4.test(value)) {
      this.setState({hasSpecial:true})
    } else {
      this.setState({hasSpecial:false})
    }

    if(regex5.test(value)) {
      this.setState({has5Char:true})
    } else {
      this.setState({has5Char:false})
    }
  }

  handleChange(e) {
   const updateState = this.state.data;
   updateState[e.target.name] = e.target.value;
   this.setState(updateState);
   this.validatePassword(this.state.data.password)
  }

  validationSuccess() {
    if(this.state.hasLowerCase && this.state.hasUpperCase && this.state.hasSpecial && this.state.hasNumber && this.state.has5Char) {
      return true
    } else {
      return false
    }
  }

  addDataSuccess (e) {
    e.preventDefault();
    if(this.validationSuccess()){
      this.props.addData(this.state.data)

      const backToInitialState = {
        data: {
          url: '',
          username: '',
          password: ''
        },
        hasLowerCase:false,
        hasUpperCase:false,
        hasNumber:false,
        hasSpecial:false,
        has5Char:false
      }
      this.setState(backToInitialState) //set the Input Form to Blank after new data has succesfully added to Database
    }
  }

  render() {
    return (
      <div>
        <center>
          <form onSubmit={this.addDataSuccess.bind(this)}>
          <fieldset style={{width: '300px', padding: '20px', marginTop: '30px', border: '3px groove', textAlign:'left'}}>
            <legend><b>Password-Form</b></legend>
              <table>
               <tbody>
                  <tr>
                    <td style={{fontSize:'15pt'}}>URL</td>
                    <td><input type='text' name='url' onChange={this.handleChange.bind(this)} value={this.state.data.url} style={{width: '300px', height: '20px', padding: '10px', fontSize:'15pt'}} placeholder='input URL here...'/></td>
                  </tr>
                  <tr>
                    <td style={{fontSize:'15pt'}}>Username</td>
                    <td><input type='text' name='username' onChange={this.handleChange.bind(this)} value={this.state.data.username} style={{width: '300px', height: '20px', padding: '10px', fontSize:'15pt'}} placeholder='input Username here...'/></td>
                  </tr>
                  <tr>
                    <td style={{fontSize:'15pt'}}>Password</td>
                    <td><input type='text' name='password' onChange={this.handleChange.bind(this)} value={this.state.data.password} style={{width: '300px', height: '20px', padding: '10px', fontSize:'15pt'}} placeholder='input Password here...'/></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td style={{textAlign:'right'}}><button
                          type='submit'
                          style={{backgroundColor:'green', padding:'10px', borderRadius:'15px', color:'white', width:'100px', fontSize:'15pt', outline:'none', cursor:'pointer'}}
                        >ADD</button></td>
                  </tr>
                </tbody>
              </table>
                <br />
                <div>[<label style={{color:'green'}}> {this.state.hasLowerCase ? ' x ' : '' } </label>] Password at least must have 1 lowercase character </div>
                <div>[<label style={{color:'green'}}> {this.state.hasUpperCase ? 'x' : '' } </label>] Password at least must have 1 uppercase character </div>
                <div>[<label style={{color:'green'}}> {this.state.hasNumber ? 'x' : '' } </label>] Password at least must have 1 number character </div>
                <div>[<label style={{color:'green'}}> {this.state.hasSpecial ? 'x' : '' } </label>] Password at least must have 1 special character </div>
                <div>[<label style={{color:'green'}}> {this.state.has5Char ? 'x' : '' } </label>] Password length must be more than 5 characters </div>
                <br />
                <div><label style={{color:'green'}}>{(this.state.hasLowerCase && this.state.hasUpperCase && this.state.hasSpecial && this.state.hasNumber && this.state.has5Char) && 'You have a STRONG password now.'}</label></div>
              <center><p style={{color:'red'}}>{this.state.warning}</p></center>
            </fieldset>
          </form>
        </center>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addData: newData => dispatch(addData(newData))
})

export default connect(null, mapDispatchToProps)(PasswordForm);
