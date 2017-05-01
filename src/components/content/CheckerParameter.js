import React from 'react'
import {List, ListItem } from '../MaterialUI'
import ActionInfo from 'material-ui/svg-icons/action/info';
import CheckCircle from 'material-ui/svg-icons/action/check-circle'
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import {style} from '../../config/'
class CheckerParameter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      upperCaseValidation : false,
      lowerCaseValidation : false,
      specialCharValidation : false,
      oneNumberValidation : false,
      fiveLetterValidation : false,
    }
    this.isVerified = this.isVerified.bind(this)
  }

  isVerified(){
    for(var valid in this.state){
      if(this.state['valid'] === false)
        return false
    }
    return true
  }

  componentWillReceiveProps(receiveProps){
    let password = receiveProps.password
    let newState = {
      minOneUpperCase: /[A-Z]/.test(password),
      minOneLowerCase: /[a-z]/.test(password),
      minOneSpecialChar: /[^a-zA-Z0-9]/.test(password),
      minOneNumber: /[0-9]/.test(password),
      minFiveLength: password.length >= 5,
    }
    this.setState(newState)
  }

  render(){
    const {minFiveLength, minOneNumber, minOneSpecialChar, minOneUpperCase, minOneLowerCase} = this.state
    return (
      <div>

        <List style={style.List} selectable={false}>
          <ListItem primaryText="Minimal Lima Karakter" rightIcon={this.state.minFiveLength ?  <CheckCircle color={greenA200}/> : <ActionInfo color={red500}/>} />
          <ListItem primaryText="Minimal Harus ada angka" rightIcon={this.state.minOneNumber ?  <CheckCircle color={greenA200}/> : <ActionInfo color={red500}/>} />
          <ListItem primaryText="Harus ada spesial Karakter" rightIcon={this.state.minOneSpecialChar ?  <CheckCircle color={greenA200}/> : <ActionInfo color={red500}/>} />
          <ListItem primaryText="Harus ada huruf besar" rightIcon={this.state.minOneUpperCase ? <CheckCircle color={greenA200}/> : <ActionInfo color={red500}/>} />
          <ListItem primaryText="Harus ada huruf kecil" rightIcon={this.state.minOneLowerCase ? <CheckCircle color={greenA200}/> : <ActionInfo color={red500}/>} />
        </List>
      </div>
    )
  }
}

export default CheckerParameter
