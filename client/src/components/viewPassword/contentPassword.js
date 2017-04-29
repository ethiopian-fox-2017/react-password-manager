import React from 'react';
import {  Table } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import DeletePassword from './deletePassword'
import EditPassword from './editPassword'

const ContentPassword = (props) =>(
  <Table.Row>
    <Table.Cell width={1}>{props.password.id}</Table.Cell>
    <Table.Cell width={3}>{props.password.url}</Table.Cell>
    <Table.Cell width={2}>{props.password.username}</Table.Cell>
    <Table.Cell width={2}>{props.password.password}</Table.Cell>
    <Table.Cell width={3}>{props.password.createdAt}</Table.Cell>
    <Table.Cell width={3}>{props.password.updatedAt}</Table.Cell>
    <Table.Cell width={2}>
      <Button.Group>
         <EditPassword password={props.password}/>
        <DeletePassword id={props.password.id}/>
      </Button.Group>
    </Table.Cell>
  </Table.Row>
)



export default ContentPassword
