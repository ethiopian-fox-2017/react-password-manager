import React from 'react';
import {connect} from 'react-redux';
import { Button } from 'semantic-ui-react';
import { deletePassword } from '../../actions'

export const DeletePassword = (props) => (
  <div>
  <Button basic color='red' onClick={()=>(props.deletePassword(props.id))} >Delete</Button>
  </div>
)

const mapDispatchToProps = dispatch =>({deletePassword:(id) => dispatch(deletePassword(id))})

export default connect (null , mapDispatchToProps)(DeletePassword)
