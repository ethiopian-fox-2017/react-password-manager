import React from 'react';
import { connect } from 'react-redux';
import { addData } from '../actions';

const styles = {
  form: {
    padding: '10px',
    width: '250px',
    marginTop: 10
  }
}

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
          <form style={styles.form} onSubmit={(e) => {
            e.preventDefault();
            this.props.addData(this.state);
            this.setState({url: '', username: '', password: ''})
            }
          }>
          <fieldset>
            <legend>Password-Form</legend>
              <table>
               <tbody>
                  <tr>
                    <td>URL</td>
                    <td><input type="text" name="url" onChange={this.handleChange.bind(this)} value={this.state.url}/></td>
                  </tr>
                  <tr>
                    <td>Username</td>
                    <td><input type="text" name="username" onChange={this.handleChange.bind(this)} value={this.state.username}/></td>
                  </tr>
                  <tr>
                    <td>Password</td> 
                    <td><input type="text" name="password" onChange={this.handleChange.bind(this)} value={this.state.password}/></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td><input type="submit" value="SAVE" /></td>
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
