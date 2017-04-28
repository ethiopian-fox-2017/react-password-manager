import React from 'react';

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

  }

  render() {
    return (
      <div className="formAdd">
        <form style={styles.formAdd}>
          URL:<br/>
          <input type="text" name="url" style={styles.formAdd}/>
          <br/>
          Username:<br/>
          <input type="text" name="username" style={styles.formAdd}/>
          <br/><br/>
          Password:<br/>
          <input type="password" name="password" style={styles.formAdd}/>
          <br/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default FormCreate;
