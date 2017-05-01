import React from 'react';
import { connect } from 'react-redux';
import { fetchData, delData } from '../actions';

import './tabel.css';

import { filterData } from '../selectors';
import Edit from './Edit';

class PasswordList extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount () {
    this.props.fetchData()
  }

  confirmDelete(id){
    var confirmation = confirm('Are you sure want to delete this Data?')
    if(confirmation === true){
      this.props.delData(id)
    }
  }

  render() {
    return (
      <div>
        <center>
            <table style={{width:'80%'}} className='bordered-table'>
              <thead>
                <tr>
                  <th>URL</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>CreatedAt</th>
                  <th>UpdatedAt</th>
                  <th>Delete</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {this.props.passwords.map(data =>
                  <tr key={data.id}>
                    <td>{data.url}</td>
                    <td>{data.username}</td>
                    <td>{data.password}</td>
                    <td>{data.createdAt}</td>
                    <td>{data.updatedAt}</td>
                    <td><button
                          onClick={() => this.confirmDelete(data.id)}
                          style={{backgroundColor:'red', padding:'10px', borderRadius:'15px', color:'white', outline:'none', cursor:'pointer'}}
                        >DELETE</button></td>
                    <td>
                    <Edit id={data.id} url={data.url} username={data.username} password={data.password} createdAt={data.createdAt}/>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
        </center>
        {this.props.passwords.length === 0 && <h1 style={{color:'red'}}>Data Not Found</h1>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  passwords: filterData(state.passwords, state.searchKeyword)
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData()),
  delData: id => dispatch(delData(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PasswordList);
