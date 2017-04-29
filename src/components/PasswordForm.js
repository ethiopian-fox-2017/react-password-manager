import React from 'react'
import { connect } from 'react-redux'

import { addPassword } from '../actions/passwordAction'

import { Paper, RaisedButton, Snackbar, TextField } from '../MaterialUi'

const styles = {
  Form: {
    width: 700,
    margin: '16px auto',
    marginTop: 86,
    padding: 16,
  }
}

export class PasswordForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        url: '',
        username: '',
        password: '',
        createdAt: null,
        updatedAt: null,
      },
      open: false,
    }
  }

  handleChange(e) {
    let prop = {}
    prop[e.target.name] = e.target.value
    let form = this.state.form
    let newState = {form: {...form, ...prop}}
    this.setState(newState)
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    })
  }

  onSave() {
    let form = this.state.form
    let createdAt = new Date()
    let state = {...form, createdAt}
    this.props.addPassword(state)
    let newState = {
      form: {
        url: '',
        username: '',
        password: '',
        createdAt: null,
        updatedAt: null,
      },
      open: true,
    }
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
              value={this.state.form.url}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div>
            <TextField
              id={'username'}
              hintText="Username"
              floatingLabelText="Username"
              name="username"
              value={this.state.form.username}
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
              value={this.state.form.password}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <RaisedButton
            label="Save"
            onTouchTap={() => this.onSave()}
          />
        </form>

        <Snackbar
          open={this.state.open}
          message="Password added"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </Paper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addPassword: password => dispatch(addPassword(password))
})

export default connect(null, mapDispatchToProps)(PasswordForm)