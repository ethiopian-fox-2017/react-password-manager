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
      createdAt: this.props.createdAt
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

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="SAVE CHANGES"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
        onClick={() => {
          this.props.editData(this.state);
          this.setState({ title: this.state.title });
        }}
      />,
    ];

    return (
      <div>
        <button onTouchTap={this.handleOpen} style={{backgroundColor:"orange", padding:"10px", borderRadius:"15px", color:"white", outline:"none"}}>
          EDIT
        </button>
        <Dialog
          title="Edit this Data"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            hintText="Input Your Edited URL Here..."
            floatingLabelText="Edit URL"
            name="url"
            value={this.state.url}
            onChange={this.handleChange.bind(this)}
          /><br/>
          <TextField
            hintText="Input Your Edited Username Here..."
            floatingLabelText="Edit Username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange.bind(this)}
          /><br />
          <TextField
            hintText="Input Your Edited Password Here..."
            floatingLabelText="Edit Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange.bind(this)}
          />
        </Dialog>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editData: data => dispatch(editData(data)),
});

export default connect(null, mapDispatchToProps)(Edit);
