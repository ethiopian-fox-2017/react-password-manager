import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import { connect } from 'react-redux';
import { editData } from '../actions';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      id: this.props.id,
      url: this.props.url,
      username: this.props.username,
      password: this.props.password,
      createdAt: this.props.createdAt,
      warning: ''
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleChange(e) {
   const updateState = {};
   updateState[e.target.name] = e.target.value;
   this.setState(updateState);
  }

  validatePassword(value) {
    const regex1 = new RegExp('^(?=.*[a-z])')
    const regex2 = new RegExp('^(?=.*[A-Z])')
    const regex3 = new RegExp('^(?=.*[0-9])')
    const regex4 = new RegExp('^(?=.*[!@#$%^&*])')
    const regex5 = new RegExp('^(?=.{5,})');

    if(!regex1.test(value)){
      this.setState({warning: 'Password at least must have 1 lowercase character'})
    } else if(!regex2.test(value)) {
      this.setState({warning: 'Password at least must have 1 uppercase character'})
    } else if(!regex3.test(value)) {
      this.setState({warning: 'Password at least must have 1 number character'})
    } else if(!regex4.test(value)) {
      this.setState({warning: 'Password at least must have 1 special character'})
    } else if(!regex5.test(value)) {
      this.setState({warning: 'Password length at least 5 characters'})
    } else {
      this.setState({warning: ''})
      this.handleClose()
      return true
    }
  }

  render() {
    const actions = [
      <FlatButton
        label='Cancel'
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label='SAVE CHANGES'
        primary={true}
        keyboardFocused={true}
        onClick={() => {
          this.validatePassword(this.state.password) && this.props.editData(this.state)
        }}
      />,
    ];

    return (
      <div>
        <button onTouchTap={this.handleOpen} style={{backgroundColor:'orange', padding:'10px', borderRadius:'15px', color:'white', outline:'none', cursor:'pointer'}}>
          EDIT
        </button>
        <Dialog
          title='Edit this Data'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            hintText='Input Your Edited URL Here...'
            floatingLabelText='Edit URL'
            name='url'
            value={this.state.url}
            onChange={this.handleChange.bind(this)}
          /><br/>
          <TextField
            hintText='Input Your Edited Username Here...'
            floatingLabelText='Edit Username'
            name='username'
            value={this.state.username}
            onChange={this.handleChange.bind(this)}
          /><br />
          <TextField
            hintText='Input Your Edited Password Here...'
            floatingLabelText='Edit Password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange.bind(this)}
          />
          <p style={{color:'red'}}>{this.state.warning}</p>
        </Dialog>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editData: data => dispatch(editData(data)),
});

export default connect(null, mapDispatchToProps)(Edit);
