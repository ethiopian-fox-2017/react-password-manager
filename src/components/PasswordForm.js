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
      warning: ''
    }
  }

  handleChange(e) {
   const updateState = this.state.data;
   updateState[e.target.name] = e.target.value;
   this.setState(updateState);
  }

  validatePassword(value) {
    const regex1 = new RegExp('^(?=.*[a-z])')
    const regex2 = new RegExp('^(?=.*[A-Z])')
    const regex3 = new RegExp('^(?=.*[0-9])')
    const regex4 = new RegExp('^(?=.*[!@#$%^&*])')
    const regex5 = new RegExp('^(?=.{5,})');

    if(!regex1.test(value)){
      this.setState({warning: 'Password at least must have 1 lowercase character'})
    } else if(!regex2.test(value)) {
      this.setState({warning: 'Password at least must have 1 uppercase character'})
    } else if(!regex3.test(value)) {
      this.setState({warning: 'Password at least must have 1 number character'})
    } else if(!regex4.test(value)) {
      this.setState({warning: 'Password at least must have 1 special character'})
    } else if(!regex5.test(value)) {
      this.setState({warning: 'Password length at least 5 characters'})
    } else {
      this.setState({warning: ''})
      return true
    }
  }

  addDataSuccess () {
    const backToInitialState = {
      data: {
        url: '',
        username: '',
        password: ''
      }
    }
    this.props.addData(this.state.data)
    this.setState(backToInitialState)
  }

  render() {
    return (
      <div>
        <center>
          <form onSubmit={(e) => {
              e.preventDefault();
              this.validatePassword(this.state.data.password) && this.addDataSuccess()
            }
          }>
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
