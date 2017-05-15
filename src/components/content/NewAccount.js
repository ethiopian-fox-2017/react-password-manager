import React from 'react'
import { connect } from 'react-redux'

import { addAccount } from '../../actions'
import CheckerParameter from './CheckerParameter'

import {Paper, TextField, AppBar, RaisedButton, Chip} from '../MaterialUI'
import {red500} from 'material-ui/styles/colors';

const styles = {
  paper : {
    margin: '16px auto',
    width: '50%',
    padding : '30'
  },
 inputText : {
   width: '100%'
 },
 label : {
   color : '#2196F3'
 },
 submit : {
   margin : 12
 },
 chip : {

 }
}
export class NewAccount extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      url : '',
      username : '',
      password : '',
      errors : [],
      createdAt : new Date(),
      updatedAt : new Date(),
    }
    this.addUserAccount = this.addUserAccount.bind(this)
  }

  addUserAccount(state){
    console.log('lagi jalan');
    if (this.Validator.isVerified){

    }else{

    }
    this.setState({createdAt : new Date()})
    this.setState({updatedAt : new Date()})
    this.props.addAccount(this.state)
  }

  handleChange(e){
    let newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }


  render(){
    return (
      <div>
      {this.state.errors.length != 0 && (
        this.state.errors.map((error,index) => (
          <Chip
            key={index}
            backgroundColor={red500}
            style={styles.chip}
            >
  {error}
</Chip>
        ))
      )}


        <Paper style={styles.paper} zDepth={1}>
          <h1 style={styles.label}>Password Form</h1>
          <div>
          <TextField
            id="url"
            name='url'
            hintText="Your Url"
            floatingLabelText="Your url"
            style={styles.inputText}
            onChange={(e) => this.handleChange(e)}
          />
          </div>
          <div>
          <TextField
            id='username'
            name='username'
            hintText="Your username"
            floatingLabelText="Your username"
            style={styles.inputText}
            onChange={(e) => this.handleChange(e)}
          />
          </div>
          <div>
          <TextField
            id='password'
            name='password'
            type='password'
            hintText="Your Password"
            floatingLabelText="Your Password"
            style={styles.inputText}
            onChange={(e) => this.handleChange(e)}
          />
          </div>
          <div>
             <RaisedButton
             label="Submit new Data"
             primary={true}
             style={styles.submit}
             onTouchTap={() => this.addUserAccount(this.state)} />
          </div>
        </Paper>
        <CheckerParameter
          ref={component => this.Validator = component}
          password={this.state.password}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addAccount : payload => dispatch(addAccount(payload))
})


export default connect(null, mapDispatchToProps)(NewAccount)
