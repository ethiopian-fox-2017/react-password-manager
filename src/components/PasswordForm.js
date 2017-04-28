import React from 'react';
import { connect } from 'react-redux';
import { addData } from '../actions';

class PasswordForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      url: '',
      username: '',
      password: ''
    }
  }

  handleChange(e) {
   const updateState = {};
   updateState[e.target.name] = e.target.value;
   this.setState(updateState);
 }

  render() {
    return (
      <div>
        <center>
          <form onSubmit={(e) => {
            e.preventDefault();
            this.props.addData(this.state);
            this.setState({url: '', username: '', password: ''})
            }
          }>
          <fieldset style={{width: '300px', padding: '20px', marginTop: '30px', border: "3px groove", textAlign:'left'}}>
            <legend><b>Password-Form</b></legend>
              <table>
               <tbody>
                  <tr>
                    <td style={{fontSize:'15pt'}}>URL</td>
                    <td><input type="text" name="url" onChange={this.handleChange.bind(this)} value={this.state.url} style={{width: '300px', height: '20px', padding: '10px', fontSize:'15pt'}} placeholder="input URL here..."/></td>
                  </tr>
                  <tr>
                    <td style={{fontSize:'15pt'}}>Username</td>
                    <td><input type="text" name="username" onChange={this.handleChange.bind(this)} value={this.state.username} style={{width: '300px', height: '20px', padding: '10px', fontSize:'15pt'}} placeholder="input Username here..."/></td>
                  </tr>
                  <tr>
                    <td style={{fontSize:'15pt'}}>Password</td>
                    <td><input type="text" name="password" onChange={this.handleChange.bind(this)} value={this.state.password} style={{width: '300px', height: '20px', padding: '10px', fontSize:'15pt'}} placeholder="input Password here..."/></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td style={{textAlign:"right"}}><button
                          type="submit"
                          style={{backgroundColor:"green", padding:"10px", borderRadius:"15px", color:"white", width:"100px", fontSize:"15pt", outline:"none"}}
                        >ADD</button></td>
                  </tr>
                </tbody>
              </table>
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
