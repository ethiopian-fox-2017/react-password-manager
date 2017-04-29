import React from 'react';
import { connect } from 'react-redux';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow }
  from 'material-ui/Table';

import PassItem from './PassItem';

const PassList = ({ passwords }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>URL</TableHeaderColumn>
        <TableHeaderColumn>Username</TableHeaderColumn>
        <TableHeaderColumn>Password</TableHeaderColumn>
        <TableHeaderColumn>Created At</TableHeaderColumn>
        <TableHeaderColumn>Updated At</TableHeaderColumn>
        <TableHeaderColumn>EDIT</TableHeaderColumn>
        <TableHeaderColumn>DELETE</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      { passwords.map(password => <PassItem key={password.id} {...password} />)}
    </TableBody>
  </Table>
);

const mapStateToProps = state => ({
  passwords: state.passwords,
});

export default connect(mapStateToProps, null)(PassList);
