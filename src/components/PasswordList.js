import React from 'react'
import { connect } from 'react-redux'

import { fetchPasswords, deletePassword, editPassword } from '../actions/passwordAction'
import { searchKeywords } from '../actions/searchAction'
import { filterUrlsByKeywords } from '../selectors/passwordList'

import PasswordEditDialog from './PasswordEditDialog'

import {
  Dialog,
  FlatButton,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TextField } from '../MaterialUi'

const styles = {
  PaperTable: {
    margin: 20,
    marginTop: 86,
  },
  SearchKeywords: {
    marginLeft: 20
  },
}

export class PasswordList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      id: 0,
      openEdit: false,
      editPassword: {
        id: 0,
        url: '',
        username: '',
        password: '',
      },
    }
  }

  componentDidMount() {
    this.props.fetchPasswords()
  }

  handleOpen = (id) => {
    this.setState({
      open: true,
      id
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  handleCloseAndDelete = () => {
    this.props.deletePassword(this.state.id)
    this.setState({
      open: false,
      id: 0,
    })
  }

  handleEditOpen = (password) => {
    this.setState({
      openEdit: true,
      editPassword: password,
    })
  }

  handleEditClose = () => {
    this.setState({
      openEdit: false
    })
  }

  handleChange(e) {
    let newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }
  
  renderPasswordItems() {
    return (
      <TableBody displayRowCheckbox={false}>
        { this.props.passwords.map(password => (
          <TableRow key={password.id}>
          <TableRowColumn>{password.id}</TableRowColumn>
          <TableRowColumn>{password.url}</TableRowColumn>
          <TableRowColumn>{password.username}</TableRowColumn>
          <TableRowColumn>{password.password}</TableRowColumn>
          <TableRowColumn>{password.createdAt}</TableRowColumn>
          <TableRowColumn>{password.updatedAt}</TableRowColumn>
          <TableRowColumn>

          <IconButton
            iconClassName="material-icons"
            onTouchTap={() => this.handleEditOpen(password)}>
            edit
          </IconButton>
          <IconButton
            iconClassName="material-icons"
            onTouchTap={() => this.handleOpen(password.id)}>
            delete
          </IconButton>

          </TableRowColumn>
          </TableRow>

        )) }
      </TableBody>
    )
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Discard"
        primary={true}
        onTouchTap={this.handleCloseAndDelete}
      />,
    ]

    return (
      <Paper
        style={styles.PaperTable}
        zDepth={2}
      >

        <PasswordEditDialog
          password={this.state.editPassword}
          open={this.state.openEdit}
          onRequestClose={this.handleEditClose}
          onTouchTap={this.handleEditClose}
          editPassword={this.props.editPassword}
        />

        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Delete password?
        </Dialog>


        <div>
          <TextField
            hintText="Search Urls"
            floatingLabelText="Search Urls"
            name="searchKeywords"
            onChange={(e) => this.props.searchKeywords(e.target.value)}
            style={styles.SearchKeywords}
          />
        </div>

        <Table
          selectable={false}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Url</TableHeaderColumn>
              <TableHeaderColumn>Username</TableHeaderColumn>
              <TableHeaderColumn>Password</TableHeaderColumn>
              <TableHeaderColumn>Created At</TableHeaderColumn>
              <TableHeaderColumn>Updated At</TableHeaderColumn>
              <TableHeaderColumn>Action</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          {this.renderPasswordItems()}
        </Table>

      </Paper>
    )
  }
}

const mapStateToProps = state => ({
  passwords: filterUrlsByKeywords(state.passwords, state.search)
})

const mapDispatchToProps = dispatch => ({
  fetchPasswords: () => dispatch(fetchPasswords()),
  deletePassword: id => dispatch(deletePassword(id)),
  editPassword: password => dispatch(editPassword(password)),
  searchKeywords: keywords => dispatch(searchKeywords(keywords))
})

export default connect(mapStateToProps, mapDispatchToProps)(PasswordList)