import React from 'react';
import { connect } from 'react-redux';

import { addData } from '../actions';

const styles = {
  card : {
    margin: 20,
    /* Add shadows to create the "card" effect */
    boxShadow: '0 4 8 0 rgba(0,0,0,0.2)',
    border: 'solid grey',
    width: 280,
    transition: '0.3s',
    borderRadius: 5 /* 5px rounded corners */
  },
  container: {
    padding: 20
  },
  input: {
    width: '200px'
  }
}

class PasswordForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        url: '',
        username: '',
        password: ''
    }
  }

  handleChange(e){
    let newState = {};
    newState[e.target.name] = e.target.value;
    // console.log(this.state);
    this.setState(newState);
  }

  handleSubmit(e){
    e.preventDefault();
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
      password: ''
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
              <td><input name="password" onChange={this.handleChange.bind(this)} value={this.state.password} style={styles.input} type="password" /></td>
            </tr>
            <tr>
              <td />
              <td><button>Save</button></td>
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
