import React from 'react';
import { connect } from 'react-redux';

import { addData } from '../actions';

const styles = {
  formAdd: {
    width: '300px',
    margin: '0 auto',
    padding: '10px',
    fontSize: '18px',
  }
}

class FormCreate extends React.Component {
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
        <form style={styles.formAdd}>
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
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addData: (data) => dispatch(addData(data))
  }
}

export default connect(null, mapDispatchToProps)(FormCreate);
