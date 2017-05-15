import React from 'react'

import { connect } from 'react-redux'
import { editAccount } from '../../actions'

import { Dialog, TextField, RaisedButton, FlatButton} from '../MaterialUI'



class EditDialog extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id : 0,
      username : '',
      url : '',
      password: '',
      createdAt : new Date(),
      updatedAt : new Date(),
    }
  }

  handleChange(e){
    let newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  componentWillReceiveProps(nextProps){
    let newState = {...nextProps.account}
    this.setState(newState)
    console.log('props baru', nextProps);
  }

  render(){
    return (
      <Dialog
            actions={[
              <FlatButton
              label="Cancel"
              primary={true}
              onTouchTap={this.props.onTouchTap}
            />
          ]}
        modal={false}
        open={this.props.open}
        onRequestClose={() => this.props.onRequestClose()}
        >

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
       <RaisedButton
         label="Update"
         onTouchTap={() => {
           this.props.editAccount(this.state)
           this.props.onRequestClose()
         }}
       />
       <RaisedButton
         label="Cancel"
         onTouchTap={() => this.props.onRequestClose()}
       />
     </form>

   </Dialog>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editAccount : (payload) => dispatch(editAccount(payload))
  }
}

export default connect(null,mapDispatchToProps)(EditDialog)
