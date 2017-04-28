import React from 'react'
import { connect } from 'react-redux'

import { addPassword } from '../actions/passwordAction'

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
  Form: {
    width: 700,
    margin: '16px auto',
    marginTop: 86,
    padding: 16,
  }
}

class PasswordForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      username: '',
      password: '',
    }
  }

  handleChange(e) {
    let newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  render() {
    return (
      <Paper
        style={styles.Form}
        zDepth={2}
      >
        <h1>Password Form</h1>
        <form >
          <div>
            <TextField
              id={'url'}
              hintText="URL"
              floatingLabelText="URL"
              name="url"
              value={this.state.url}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div>
            <TextField
              id={'username'}
              hintText="Username"
              floatingLabelText="Username"
              name="username"
              value={this.state.username}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div>
            <TextField
              id={'password'}
              hintText="Password"
              floatingLabelText="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <RaisedButton
            label="Save"
            onTouchTap={() => this.props.addPassword(this.state)}
          />
        </form>
      </Paper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addPassword: password => dispatch(addPassword(password))
})

export default connect(null, mapDispatchToProps)(PasswordForm)