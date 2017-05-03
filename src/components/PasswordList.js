import React, { Component } from 'react';
import { connect } from 'react-redux';

import './myComponent.css';
import { editPassword, deletePassword } from '../actions'

class PasswordList extends Component {
  constructor(props){
    super(props);
    this.state = {
      editForm: {
        id: 0,
        url: '',
        username: '',
        password: '',
      },
      editing: false,
    }
    this.actionEdit = this.actionEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
  }

  actionEdit(item){
    this.setState({editing: true, editForm: item});
  }

  actionDelete(itemId){
    console.log(itemId)
    this.props.deletePassword(itemId)
  }

  saveEdit(e){
    e.preventDefault();
    const updProfile = this.state;
    console.log(updProfile);
    this.props.editPassword(updProfile);
    this.setState({editing: false});
  }

  handleChange(e) {
    const val = {};
    val[e.target.id] = e.target.value;
    const newEditForm = Object.assign({}, this.state.editForm, val);
    this.setState({ editForm: newEditForm });
  }

  render(){
    const { editForm } = this.state;
    return (
      <div className='myContainer'>
        <br />
        <table>
          <tbody>
            <tr>
              <th>No</th>
              <th>Url</th>
              <th>Username</th>
              <th>Password</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {this.props.profiles.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.url}</td>
                <td>{item.username}</td>
                <td>{item.password}</td>
                <td><button
                id="editButton"
                type="button"
                className="btn btn-primary"
                onClick={() => this.actionEdit(item)}
                >edit</button></td>
                <td><button
                id="editButton"
                type="button"
                className="btn btn-danger"
                onClick={() => this.actionDelete(item.id)}
                >delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        {this.state.editing === true ? (
          <div>
            <h3>Edit Form</h3>
            <form onSubmit={(e) => this.saveEdit(e)}>
              <div className="form-group">
                <label htmlFor="urlForm">URL</label>
                <input type="text" className="form-control" id="url" value={editForm.url} onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="usernameForm">Username</label>
                <input type="text" className="form-control" id="username" value={editForm.username} onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="passwordForm">Password</label>
                <input type="password" className="form-control" id="password" value={editForm.password} onChange={this.handleChange}/>
              </div>
              <button id="saveButton" type="submit" className="btn btn-primary" >Save</button>
            </form>
          </div>
        ):(
          <div></div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  profiles: state.myProfile
});

const mapDispatchToProps = (dispatch) => {
  return {
    editPassword: (updProfile) => dispatch(editPassword(updProfile)),
    deletePassword: (itemId) => dispatch(deletePassword(itemId))
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(PasswordList);
