import React from 'react'
import { connect } from 'react-redux'
import {
  FlatButton,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TextField,
} from '../MaterialUI'

import {fetchAccount, editAccount, searchKeywords} from '../../actions'
import { filterUrlsByKeywords } from '../../selectors'
import TableItem from './TableItem'
import EditDialog from './EditDialog'
import DeleteDialog from './DeleteDialog'

const styles = {
  paper : {
    margin: 20,
    marginTop : 86,
  },
  tableChild : {
    color : 'red',
    width: '100%'
  },
  SearchKeywords: {
   marginLeft: 20
 }
}

class ListAccount extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      openEdit : false,
      openDelete : false,
      editForm : {
        id : 0,
        url : '',
        username : '',
        password : '',
      },
      idDeleted : 0,
    }
    this.handleEditOpen = this.handleEditOpen.bind(this)
    this.handleEditClose = this.handleEditClose.bind(this)
    this.handleDeleteOpen = this.handleDeleteOpen.bind(this)
    this.handleDeleteClose = this.handleDeleteClose.bind(this)
  }

  componentDidMount(){
    this.props.fetchAccount('http://localhost:4000/passwords')
  }


    handleEditOpen(data){
      console.log('data yang dibawa', data);
      let newState = {editForm: {...data}}
      this.setState(newState)
      this.setState({openEdit : true})
    }

    handleDeleteOpen(idDeleted){
      this.setState({openDelete: true})
      this.setState({idDeleted : idDeleted})
      console.log('ini idnya',idDeleted);
    }

    handleEditClose(){
      this.setState({openEdit : false})
    }



    handleDeleteClose(){
      this.setState({openDelete : false})
    }


  render(){
    return (
      <Paper
      style={styles.paper}
      zDepth={2}
      >
        <EditDialog
           account={this.state.editForm}
           open={this.state.openEdit}
           onRequestClose={this.handleEditClose}
           onTouchTap={this.handleEditClose}
           editPassword={this.props.editPassword}
           />

        <DeleteDialog
          id={this.state.idDeleted}
          open={this.state.openDelete}
          handleClose={this.handleDeleteClose}
          />

          <div>
            <TextField
              hintText="Search by your url ..."
              floatingLabelText="search your url"
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

              <TableBody style={styles.tableChild} displayRowCheckbox={false}>
                { this.props.account.map(account => (
                <TableItem account={account}
                handleDeleteOpen={this.handleDeleteOpen}
                handleEditOpen={this.handleEditOpen}/>
              ))}
              </TableBody>
            </Table>
      </Paper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading : state.loading,
    account : filterUrlsByKeywords(state.account,state.search),
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchAccount : (url) => dispatch(fetchAccount(url)),
    editAccount : (payload) => dispatch(editAccount(payload)),
    searchKeywords : (keywords) => dispatch(searchKeywords(keywords))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListAccount)
