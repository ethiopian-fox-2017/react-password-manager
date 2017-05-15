import React from 'react';
import { connect } from 'react-redux';
import {
  FontIcon,
  List,
  ListItem, } from 'material-ui'

import { fetchAddData } from '../actions';
import ValidationPass from './ValidationPass';


const styles = {
  formAdd: {
    width: '300px',
    margin: '0 auto',
    padding: '10px',
    fontSize: '18px',
  },
  validation: {
    width: '200px',
  }
}

export class FormCreate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      username: '',
      password: '',
    }

  }

  handleChange(e) {
    const newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  render() {
    return (
      <div className="formAdd">
        <form
          style={styles.formAdd}
          onSubmit={(e) => {
            e.preventDefault()
            if (this.ValidationPass.afterValidate()) {
              this.props.addData(this.state);
            } else {
              alert('Password not yet completed !')
            }
            this.setState({url: '', username:'', password:''})
            console.log()
          }}
          >
          URL:<br/>
          <input
            type="text"
            name="url"
            value={this.state.url}
            onChange={this.handleChange.bind(this)}
            style={styles.formAdd}/>
          <br/>
          Username:<br/>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange.bind(this)}
            style={styles.formAdd}
          />
          <br/><br/>
          Password:<br/>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange.bind(this)}
            style={styles.formAdd}
          />
          <br/><br/>
          <input
            type="submit"
          />
        </form>
        <ValidationPass
          pass={this.state.password}
          ref={(fromChild) => this.ValidationPass = fromChild}
          style={styles.validation}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addData: (newData) => dispatch(fetchAddData(newData))
  }
}

export default connect(null, mapDispatchToProps)(FormCreate);
