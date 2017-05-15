import React from 'react'
import {connect } from 'react-redux'

import { Dialog, FlatButton } from '../MaterialUI'
import { deleteAccount } from '../../actions'

class DeleteDialog extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id : 0
    }
    this.deleteAction = this.deleteAction.bind(this)
  }

  componentWillReceiveProps(nextProps){
    console.log('ini propsnya',nextProps);
    this.setState({id : nextProps.id})
  }

  deleteAction(){

    console.log(this.state.id);
    this.props.deleteAccount(this.state.id)
    this.props.handleClose()
  }

  render(){
    return (

      <Dialog
        title="Delete this ?"
        actions={[
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.props.handleClose}
          />,
          <FlatButton
            label="Delete"
            primary={true}
            onTouchTap={this.deleteAction}
            />
        ]}
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.handleClose}
        />

    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAccount : (idTarget) => dispatch(deleteAccount(idTarget))
  }
}

export default connect(null, mapDispatchToProps)(DeleteDialog)
