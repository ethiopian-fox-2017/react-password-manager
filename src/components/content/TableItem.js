import React from 'react'
import moment from 'moment'

import { TableBody, TableRow, TableRowColumn, IconButton} from '../MaterialUI'
import { connect } from 'react-redux'
const style ={
  tableChild : {
    width: '100%',
    color: 'red',
  }
}
class TableItem extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    const {account} = this.props

    return (
          <TableRow >
          <TableRowColumn>{account.id.toString()}</TableRowColumn>
          <TableRowColumn>{account.url.toString()}</TableRowColumn>
          <TableRowColumn>{account.username.toString()}</TableRowColumn>
          <TableRowColumn>{account.password.toString()}</TableRowColumn>
          <TableRowColumn>{moment(account.createdAt).startOf('hour').fromNow() || 'empty'}</TableRowColumn>
          <TableRowColumn>{moment(account.updatedAt).startOf('hour').fromNow() || 'empty'}</TableRowColumn>
          <TableRowColumn>

          <IconButton
            iconClassName="material-icons"
            onTouchTap={() => this.props.handleEditOpen(account)}>
            edit
          </IconButton>
          <IconButton
            iconClassName="material-icons"
            onTouchTap={() => this.props.handleDeleteOpen(account.id)}>
            delete
          </IconButton>

          </TableRowColumn>
          </TableRow>

    )
  }
}




export default TableItem
