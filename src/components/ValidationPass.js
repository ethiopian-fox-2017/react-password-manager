import React from 'react';
import {
  FontIcon,
  List,
  ListItem, } from 'material-ui'

const styles = {
  validation: {
    width: '500px',
    margin: '0 auto',
    backgroundColor: '#B3E5FC',

  }
}

class ValidationPass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      upperCase: false,
      lowerCase: false,
      UniqChar: false,
      oneNumber: false,
      lengthChar: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, "-----");
    let customValidations = {
      upperCase: /[A-Z]/.test(nextProps.pass),
      lowerCase: /[a-z]/.test(nextProps.pass),
      UniqChar: /[^a-zA-Z0-9]/.test(nextProps.pass),
      oneNumber: /[0-9]/.test(nextProps.pass),
      lengthChar: nextProps.pass.length >= 5,
    }
    this.setState(customValidations)
  }

  afterValidate() {
    for(let validate in this.state) {
      if (!this.state[validate]) {
        return false
      }
    }
    return true
  }

  customIconCheck(validationType) {
    return (
      <p>
        { this.state[validationType] ? (
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
      <div style={styles.validation}>
        <List>
          <ListItem
            leftIcon={this.customIconCheck('upperCase')}
            primaryText="Password harus memiliki setidaknya satu karakter huruf besar ( upper-case )"
            insetChildren={true}
          />
          <ListItem
            leftIcon={this.customIconCheck('lowerCase')}
            primaryText="Password harus memiliki setidaknya satu karakter huruf kecil ( lower-case )"
            insetChildren={true}
          />
          <ListItem
            leftIcon={this.customIconCheck('UniqChar')}
            primaryText="Password harus memiliki setidaknya satu karakter spesial ( #$@!&%... )"
            insetChildren={true}
          />
          <ListItem
            leftIcon={this.customIconCheck('oneNumber')}
            primaryText="Password harus memiliki setidaknya satu angka"
            insetChildren={true}
          />
          <ListItem
            leftIcon={this.customIconCheck('lengthChar')}
            primaryText="Password harus memiliki panjang (length) lebih dari 5 karakter"
            insetChildren={true}
          />
        </List>
      </div>
    )
  }

}
 export default ValidationPass;
