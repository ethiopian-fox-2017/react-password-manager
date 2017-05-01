import React from 'react';
import { connect } from 'react-redux';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow }
  from 'material-ui/Table';

import { filterPassword } from '../../selectors';
import PassItem from './PassItem';
import { fetchPassword } from '../../actions';


class PassList extends React.Component {

  componentDidMount() {
    this.props.fetchPassword();
  }

  render() {
    const { passwords } = this.props;
    return (
      <Table>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
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
        <TableBody displaySelectAll={false} adjustForCheckbox={false}>
          { passwords.map(password => <PassItem key={password.id} {...password} />)}
        </TableBody>
      </Table>
    )
  }
}


const mapStateToProps = state => ({
  passwords: filterPassword(state.passwords, state.search),
});

const mapDispatchToProps = dispatch => ({
  fetchPassword: () => dispatch(fetchPassword()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PassList);
