import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addData } from '../actions'

class Add extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        url: '',
        username: '',
        password: ''
      },
      error: ''
    }
  }

  handleChange = (e) => {
    const newState = this.state.data
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  passwordValidator(pw) {
    const checkLowerCase = /^(?=.*[a-z])/
    const checkUpperCase = /^(?=.*[A-Z])/
    const checkNumber = /^(?=.*[0-9])/
    const checkSpecial = /^(?=.*[!@#$%^&*])/
    const checkLength = /^(?=.{5,})/

    if(!checkLowerCase.test(pw)) {
      this.setState({ error: 'Need at least 1 lowercase char' })
    } else if (!checkUpperCase.test(pw)) {
      this.setState({ error: 'Need at least 1 uppercase char' })
    } else if (!checkNumber.test(pw)) {
      this.setState({ error: 'Need at least 1 number' })
    } else if (!checkSpecial.test(pw)) {
      this.setState({ error: 'Need at least 1 special char' })
    } else if (!checkLength.test(pw)) {
      this.setState({ error: 'Need at least 5 chars' })
    } else {
      this.setState({ error: '' })
      return true
    }
  }

  dataAdded = () => {
    this.props.addData(this.state.data)
    this.setState({
      data: {
        url: '',
        username: '',
        password: ''
      }
    })
    return true
  }

  render() {
    return (
      <div  className="Add">
        <div className="columns">
          <div className="column is-4 add-form">
            <div className="box">
              <form onSubmit={e => {
                e.preventDefault()
                this.passwordValidator(this.state.data.password) && this.dataAdded()
              }}>
                <div className="field">
                  <label className="label">URL</label>
                  <p className="control">
                    <input className="input" type="text" placeholder="input website link" name="url" value={this.state.data.url} onChange={this.handleChange} />
                  </p>
                </div>
                <div className="field">
                  <label className="label">Username</label>
                  <p className="control">
                    <input className="input" type="text" placeholder="input your username here.." name="username" value={this.state.data.username} onChange={this.handleChange} />
                  </p>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <p className="control">
                    <input className="input" type="password" placeholder="input your password here.." name="password" value={this.state.data.password} onChange={this.handleChange} />
                  </p>
                </div>
                <button className="button is-outlined" type="submit">Submit</button>
                { this.state.error !== '' ? (
                  <div className="field">
                    <div className="control">
                      <p className="notification is-warning is-active">
                        { this.state.error }
                      </p>
                    </div>
                  </div>
                ) : true }
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Add.propTypes = {
  addData: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  addData: data => dispatch(addData(data))
})

export default connect(null, mapDispatchToProps)(Add)