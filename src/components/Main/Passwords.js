import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchData, deleteData, editData } from '../../actions'

class Passwords extends React.Component {
  constructor(props) {
    super(props)
    this.state  = {
      edit: {
        id: null,
        url: '',
        username: '',
        password: '',
        createdAt: '',
        updatedAt: ''
      },
      isActive: false
    }
  }

  componentDidMount() {
    this.props.fetchData()
  }

  handleChange = (e) => {
    let newData = this.state.edit
    newData[e.target.name] = e.target.value
    this.setState(newData)
  }

  getDataForEdit = (data) => {
    this.setState({
      edit: {
        id: data.id,
        url: data.url,
        username: data.username,
        password: data.password,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt
      }
    })
  }

  toggleEditTrue = () => {
    this.setState({ isActive: true })
  }

  toggleEditFalse = () => {
    this.setState({ isActive: false })
  }

  render() {
    const { data } = this.props
    return (
      <tbody className="Passwords">
        { data.map(each =>
          <tr key={each.id}>
            <th>{each.id}</th>
            <td><a href={each.url} target="_blank">{each.url}</a></td>
            <td>{each.username}</td>
            <td>{each.password}</td>
            <td>{each.createdAt}</td>
            <td>{each.updatedAt}</td>
            <td>
              <button className="button is-warning edit-btn" onClick={() => {this.getDataForEdit(each); this.toggleEditTrue()}}>Edit</button>
              <button className="button is-danger del-btn" onClick={() => {this.props.deleteData(each.id)}}>X</button>
            </td>
          </tr>
        ) }
        { this.state.isActive ?
          <tr>
            <form onSubmit={e => {
              e.preventDefault()
              this.props.editData(this.state.edit)
              this.toggleEditFalse()
            }}>
            <td><input type="text" name="url" value={this.state.edit.url} onChange={this.handleChange} /></td>
            <td><input type="text" name="username" value={this.state.edit.username} onChange={this.handleChange} /></td>
            <td><input type="text" name="password" value={this.state.edit.password} onChange={this.handleChange} /></td>
            <td><button type="submit" className="button is-warning edit-btn">Edit</button></td>
            </form>
          </tr>
          : true }
      </tbody>
    )
  }
}

Passwords.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchData: PropTypes.func.isRequired,
  deleteData: PropTypes.func.isRequired,
  editData: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  data: state.data
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData()),
  deleteData: (id) => dispatch(deleteData(id)),
  editData: (data) => dispatch(editData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Passwords)