import React from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { editRequest } from '../../actions';

class PassEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: {
        id: 0,
        url: '',
        username: '',
        password: '',
        createdAt: '',
        updatedAt: '',
      },
      open: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(e) {
    const updatePass = {};
    updatePass[e.target.name] = e.target.value;
    const editedPass = Object.assign({}, this.state.editForm, updatePass);
    this.setState({ editForm: editedPass });
  }

  handleOpen(data) {
    this.setState({
      open: true,
      editForm: { ...data },
    });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { id, url, username, password } = this.state.editForm;
    const { editRequest } = this.props;
    return (
      <div>
        <RaisedButton label="Edit" onTouchTap={() => this.handleOpen(this.props)} />
        <Dialog
          title="Edit Form"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              editRequest(
                { id, url, username, password, createdAt: Date.now(), updatedAt: Date.now() }
              );
              this.setState(
                { url: '', username: '', password: '' },
              );
            }}
          >
            <TextField
              type="text"
              name="url"
              value={url}
              onChange={this.handleChange}
              floatingLabelText="URL"
            /><br />
            <TextField
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              floatingLabelText="Username"
            /><br />
            <TextField
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              floatingLabelText="Password"
            /><br />
            <FlatButton
              label="Cancel"
              primary={true}
              onTouchTap={this.handleClose}
            />
            <FlatButton
              label="Submit"
              type="submit"
              primary={true}
              keyboardFocused={true}
              onTouchTap={this.handleClose}
            />
          </form>
        </Dialog>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editRequest: updatedPass => dispatch(editRequest(updatedPass)),
});

export default connect(null, mapDispatchToProps)(PassEdit);
