import React from 'react';
import { connect } from 'react-redux';

import { fetchData, updateData } from '../actions';
import { filterList } from '../selectors';
import DeleteButton from './DeleteButton';

const styles = {
  tableList: {
    border: '1px solid black'
  },
  tableTd: {
    border: '1px solid black',
    padding: 10
  },
  editBtn: {
    backgroundColor: 'white',
    color: 'black',
    border: '2px solid #008CBA', /* Blue */
    borderRadius: '50%',
    cursor: 'pointer'
  },
  saveBtn: {
    backgroundColor: '#4CAF50', /* Green */
    color: 'white',
    borderRadius: '50%',
    cursor: 'pointer'
  },
  cancelBtn: {
    backgroundColor: 'orange',
    color: 'white',
    borderRadius: '50%',
    cursor: 'pointer'
  }
}

class PasswordList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      editForm: {
        id: 0,
        url: '',
        username: '',
        password: ''
      }
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.props.fetchData();
  }

  handleChange(e) {
    let val = {};
    val[e.target.name] = e.target.value;
    const newState = Object.assign({}, this.state.editForm, val);
    this.setState({ editForm: newState});
  }

  showEditForm(item){
    this.setState({
      editForm: {
        id: item.id,
        url: item.url,
        username: item.username,
        password: item.password
      }
    });
  }

  cancelEdit(){
    this.setState({
      editForm: {
        id: 0,
        url: '',
        username: '',
        password: ''
      }
    })
  }

  handleSave(item){
    this.props.updateData({...item, ...this.state.editForm});
    this.setState({
      editForm: {
        id: 0,
        url: '',
        username: '',
        password: ''
      }
    })
  }

  render() {
    const { editForm } = this.state;
    return (
      <div>
        <center>
        <table >
          <thead>
            <tr>
              <th style={styles.tableTd}>URL</th>
              <th style={styles.tableTd}>Username</th>
              <th style={styles.tableTd}>Password</th>
              <th style={styles.tableTd}>CreatedAt</th>
              <th style={styles.tableTd}>UpdatedAt</th>
              <th style={styles.tableTd}>Edit</th>
              <th style={styles.tableTd}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.saveData.length === 0 && (
              <tr>
                <td colSpan="7"><h2>No password data found</h2></td>
              </tr>
            )}
            {this.props.saveData.map( data => {
              return (
                editForm.id === data.id ? (
                  <tr key={data.id}>
                  <td style={styles.tableTd}>
                    <input name="url" type="text" value={editForm.url} onChange={this.handleChange} />
                  </td>
                  <td style={styles.tableTd}>
                    <input name="username" type="text" value={editForm.username} onChange={this.handleChange} />
                  </td>
                  <td style={styles.tableTd}>
                    <input name="password" type="text" value={editForm.password} onChange={this.handleChange} />
                  </td>
                  <td style={styles.tableTd}>{data.createdAt}</td >
                  <td style={styles.tableTd}>{data.updatedAt}</td>
                  <td style={styles.tableTd}><button style={styles.saveBtn} onClick={() => this.handleSave(data)} >Save</button></td>
                  <td style={styles.tableTd}><button style={styles.cancelBtn} onClick={this.cancelEdit.bind(this)} >Cancel</button></td>
                  </tr>
                ) : (
                <tr key={data.id}>
                  <td style={styles.tableTd}>{data.url}</td>
                  <td style={styles.tableTd}>{data.username}</td >
                  <td style={styles.tableTd}>{data.password}</td >
                  <td style={styles.tableTd}>{data.createdAt}</td >
                  <td style={styles.tableTd}>{data.updatedAt}</td>
                  <td style={styles.tableTd}><button style={styles.editBtn} onClick={() => this.showEditForm(data)} >Edit</button></td>
                  <td style={styles.tableTd}><DeleteButton deletedId={data.id} /></td>
                </tr>
              )
              )
              }
            )}

          </tbody>
        </table>
        </center>
      </div>
    )
  }


}

const mapStateToProps = (state) => {
  // console.log('----jiojioj----',state.passwordData);
  return {
    saveData: filterList(state.passwordData, state.searchKeyword)
    // searchKeyword: state.searchKeyword
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData()),
    updateData: (item) => dispatch(updateData(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordList);
