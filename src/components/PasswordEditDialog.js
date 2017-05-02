import React from 'react'

import PasswordChecker from './PasswordChecker'

import {
  Dialog,
  RaisedButton,
  TextField } from '../MaterialUi'

const styles = {
  EditDialog: {
    overflowY: 'scroll',
    maxHeight: 400,
  }
}

class PasswordEditDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      url: '',
      username: '',
      password: '',
      createdAt: null,
      updatedAt: null,
    }
  }

  componentWillReceiveProps(nextProps) {
    let state = nextProps.password
    let newState = {...state}
    this.setState(newState)
  }

  handleChange(e) {
    let newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  onUpdate() {
    let passed = this.passwordChecker.isStrong()

    if (passed) {
      let form = this.state
      let updatedAt = new Date()
      let state = {...form, updatedAt}
      this.props.editPassword(state)
      this.props.onRequestClose()
    } else {
      alert('Password strength is not enough')
    }
  }

  render() {
    return (
      <Dialog
        actions={[
          <RaisedButton
            label="Update"
            onTouchTap={() => this.onUpdate()}
            style={{marginRight: 10}}
          />,
          <RaisedButton
            label="Cancel"
            onTouchTap={() => this.props.onRequestClose()}
          />
        ]}
        modal={false}
        open={this.props.open}
        onRequestClose={() => this.props.onRequestClose()}
      >

        <div style={styles.EditDialog}>
          <h1>Password Form</h1>
          <form >
            <div>
              <TextField
                hintText="URL"
                floatingLabelText="URL"
                name="url"
                value={this.state.url}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div>
              <TextField
                hintText="Username"
                floatingLabelText="Username"
                name="username"
                value={this.state.username}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div>
              <TextField
                hintText="Password"
                floatingLabelText="Password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
          </form>

          <PasswordChecker
            password={this.state.password}
            ref={comp => {this.passwordChecker = comp}}
          />
        </div>

      </Dialog>

    )
  }
}

export default PasswordEditDialog