import React from 'react'
import { connect } from 'react-redux'

import { addPassword } from '../actions/passwordAction'

import {
  FontIcon,
  List,
  ListItem,
  Paper,
  RaisedButton,
  Snackbar,
  TextField } from '../MaterialUi'

// import {
//   pinkA200,
//   transparent} from 'material-ui/styles/colors'

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
      validations: {
        minOneUpperCase: false,
        minOneLowerCase: false,
        minOneSpecialChar: false,
        minOneNumber: false,
        minFiveLength: false,
      },
      open: false,
      message: 'Password added, Password strength is not enough'
    }
  }

  handleChange(e) {
    let prop = {}
    prop[e.target.name] = e.target.value
    let form = this.state.form
    let newState = {form: {...form, ...prop}}
    this.setState(newState)
  }

  handleChangePassword(e) {
    let prop = {}
    prop[e.target.name] = e.target.value
    let form = this.state.form
    let newForm = {form: {...form, ...prop}}

    let password = e.target.value
    let newValidations = {
      validations: {
        minOneUpperCase: /[A-Z]/.test(password),
        minOneLowerCase: /[a-z]/.test(password),
        minOneSpecialChar: /[^a-zA-Z0-9]/.test(password),
        minOneNumber: /[0-9]/.test(password),
        minFiveLength: password.length >= 5,
      }
    }
    let newState = { ...newForm, ...newValidations }
    this.setState(newState)
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    })
  }

  onSave() {
    let validations = this.state.validations
    for (let validation in validations) {
      if (validations[validation] === false) {
        let newState = {
          open: true,
          message: 'Password strength is not enough'
        }
        return this.setState(newState)
      }
    }
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
      validations: {
        minOneUpperCase: false,
        minOneLowerCase: false,
        minOneSpecialChar: false,
        minOneNumber: false,
        minFiveLength: false,
      },
      open: true,
      message: 'Password added'
    }
    this.setState(newState)
  }

  renderIconValidation(validationType) {
    return (
      <p>
        { this.state.validations[validationType] ? (
          <FontIcon
          className="material-icons"
          >
            check_box
          </FontIcon>
        ):(
          <FontIcon
          className="material-icons"
          >
            check_box_outline_blank
          </FontIcon>
        )}
      </p>
    )
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
              onChange={(e) => this.handleChangePassword(e)}
            />
          </div>
        </form>

        <h3>Password Strength:</h3>
        <List>
          <ListItem
            leftIcon={this.renderIconValidation('minOneUpperCase')}
            primaryText="Password harus memiliki setidaknya satu karakter huruf besar ( upper-case )"
            insetChildren={true}
          />
          <ListItem
            leftIcon={this.renderIconValidation('minOneLowerCase')}
            primaryText="Password harus memiliki setidaknya satu karakter huruf kecil ( lower-case )"
            insetChildren={true}
          />
          <ListItem
            leftIcon={this.renderIconValidation('minOneSpecialChar')}
            primaryText="Password harus memiliki setidaknya satu karakter spesial ( #$@!&%... )"
            insetChildren={true}
          />
          <ListItem
            leftIcon={this.renderIconValidation('minOneNumber')}
            primaryText="Password harus memiliki setidaknya satu angka"
            insetChildren={true}
          />
          <ListItem
            leftIcon={this.renderIconValidation('minFiveLength')}
            primaryText="Password harus memiliki panjang (length) lebih dari 5 karakter"
            insetChildren={true}
          />
        </List>

        <RaisedButton
          label="Save"
          onTouchTap={() => this.onSave()}
        />

        <Snackbar
          open={this.state.open}
          message={this.state.message}
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