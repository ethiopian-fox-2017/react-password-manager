import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import { removeRequest } from '../../actions';
import PassEdit from '../PasswordForm/PassEdit';

const style = {
  margin: 12,
};

const PassItem = props => (
  <TableRow>
    <TableRowColumn>{props.url}</TableRowColumn>
    <TableRowColumn>{props.username}</TableRowColumn>
    <TableRowColumn>{props.password}</TableRowColumn>
    <TableRowColumn>{props.createdAt}</TableRowColumn>
    <TableRowColumn>{props.updatedAt}</TableRowColumn>
    <TableRowColumn>
      <PassEdit {...props} />
    </TableRowColumn>
    <TableRowColumn>
      <RaisedButton
        backgroundColor="#a4c639"
        label="Delete"
        style={style}
        onClick={() => props.deletePassword(props.id)}
      />
    </TableRowColumn>
  </TableRow>
);

const mapDispatchToProps = dispatch => ({
  deletePassword: passId => dispatch(removeRequest(passId)),
});

export default connect(null, mapDispatchToProps)(PassItem);
