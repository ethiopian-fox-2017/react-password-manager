import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Form } from 'semantic-ui-react';

import { editPassword } from '../../actions'
import CheckPassword from '../addPassword/checkPassword'

export class EditPassword extends Component {
  constructor(props){
    super(props);
    this.state={
      password:{
        url:'',
        username:'',
        password:'',
        createdAt:'',
        updatedAt:'',
      },
      modalOpen:false,
    }
  };
  componentDidMount(){
    this.setState({password:this.props.password})
  }
  handleChange = (e) => {
    let password = this.state.password
    password[e.name]=e.value;
    this.setState({password:password})
  };
  openModal =()=>{
    this.setState({modalOpen:true})
  };
  closeModal =()=>{
    this.setState({modalOpen:false})
  };
  submitEdit =(newpassword)=>{
    let date= new Date();
    date=date.toString()
    let newsubmit = {...newpassword,updatedAt:date}
    this.props.editPassword(newsubmit);
    this.setState({modalOpen:false})
  };
   render () {
     const {modalOpen} = this.state
     return(
       <div>
         <Button basic color='green' onClick={() => this.openModal()} >Edit</Button>
           <Modal size='small' open={modalOpen} onClose={this.close}>
            <Modal.Header>
              Edit Acount
            </Modal.Header>
            <Modal.Content>
              <Form>
               <Form.Field>
                 <label>URL </label>
                 <input name='url' placeholder='URL' value={this.state.password.url} onChange={(e)=>this.handleChange(e.target)} />
               </Form.Field>
               <Form.Field>
                 <label> User Name </label>
                 <input name='username' value={this.state.password.username} placeholder='username' onChange={(e)=>this.handleChange(e.target)} />
               </Form.Field>
               <Form.Field>
                 <label>Password </label>
                 <input name='password' placeholder='password' value={this.state.password.password} onChange={(e)=>this.handleChange(e.target)}/>
               </Form.Field>
             </Form>
             <CheckPassword password={this.state.password.password} />
            </Modal.Content>
            <Modal.Actions>
              <Button negative onClick={() => this.closeModal()}>
                No
              </Button>
              <Button positive onClick={() => this.submitEdit(this.state.password)} icon='checkmark' labelPosition='right' content='Yes' />
            </Modal.Actions>
          </Modal>
      </div>
     )
   }
}

const mapDispatchToProps = dispatch =>({editPassword:(newpassword)=>dispatch(editPassword(newpassword))})

export default connect (null,mapDispatchToProps)(EditPassword)
