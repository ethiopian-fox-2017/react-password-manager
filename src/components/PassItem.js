import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { fullWhite } from 'material-ui/styles/colors';
import ActionAndroid from 'material-ui/svg-icons/action/android';

import { removePassword } from '../actions';
import PassEdit from './PassEdit';

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
        icon={<ActionAndroid color={fullWhite} />}
        style={style}
        onClick={() => props.deletePassword(props.id)}
      />
    </TableRowColumn>
  </TableRow>
);

const mapDispatchToProps = dispatch => ({
  deletePassword: passId => dispatch(removePassword(passId)),
});

export default connect(null, mapDispatchToProps)(PassItem);
