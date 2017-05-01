import React,{ Component } from 'react'
import { connect } from 'react-redux';
import {  Table, Button } from 'semantic-ui-react';
import {fetchPassword} from '../../actions';
import {filterPassword} from '../../selector'
import { Link } from 'react-router-dom';

import ContentPassword from './contentPassword'

export class ListPassword extends Component {
  render () {
    const { passwords } = this.props
  if(passwords.length === 0){
    return ( <h1>loaddinf..</h1>)
  }
    return(
      <div>
        <Link to='/new'><Button> New Password</Button></Link>
        <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={1}>ID</Table.HeaderCell>
            <Table.HeaderCell width={3}>URL</Table.HeaderCell>
            <Table.HeaderCell width={2}>Username</Table.HeaderCell>
            <Table.HeaderCell width={2}>Password</Table.HeaderCell>
            <Table.HeaderCell width={3}>CreatedAt</Table.HeaderCell>
            <Table.HeaderCell width={3}>UpdatedAt</Table.HeaderCell>
            <Table.HeaderCell width={2}>actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
           {passwords.map((password,index )=> {
             return(
               <ContentPassword key={index} password={password} />
             )
            }
          )}
        </Table.Body>
      </Table>
      </div>
    )
  }
}


const mapStateToProps = state => ( {passwords: filterPassword(state.passwords,state.searchKey)})
const mapDispatchToProps = dispatch => ( {fetchPassword:() =>dispatch(fetchPassword()) })

export default connect(mapStateToProps, mapDispatchToProps) (ListPassword)
