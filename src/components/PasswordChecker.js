import React from 'react'

import {
  FontIcon,
  List,
  ListItem } from '../MaterialUi'

export class PasswordChecker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      minOneUpperCase: false,
      minOneLowerCase: false,
      minOneSpecialChar: false,
      minOneNumber: false,
      minFiveLength: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    let password = nextProps.password
    let newState = {
      minOneUpperCase: /[A-Z]/.test(password),
      minOneLowerCase: /[a-z]/.test(password),
      minOneSpecialChar: /[^a-zA-Z0-9]/.test(password),
      minOneNumber: /[0-9]/.test(password),
      minFiveLength: password.length >= 5,
    }
    this.setState(newState)
  }

  isStrong() {
    for (let validation in this.state)
      if (this.state[validation] === false) return false
    return true
  }

  renderIconValidation(checkType) {
    return (
      <p>
        { this.state[checkType] ? (
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
      <div>

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

      </div>
    )
  }
}

export default PasswordChecker