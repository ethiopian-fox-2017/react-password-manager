import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchDatas } from '../../actions';

const styles = {
  table: {
    width: '80%',
    border: '1px solid #ccc',
    textAlign: 'center',
    margin: '0 auto',
  },
  head: {
    border: '1px solid #ccc',
  },
}

class passManagerList extends React.Component {
  componentDidMount() {
    this.props.fetchDatas()
  }

  render() {
    return (
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.head}>URL</th>
            <th style={styles.head}>Username</th>
            <th style={styles.head}>Password</th>
            <th style={styles.head}>CreatedAt</th>
            <th style={styles.head}>UpdatedAt</th>
          </tr>
        </thead>
        <tbody>
          { this.props.datas.map(data => (
            <tr key={data.id}>
              <td><a href={data.url}>{data.url}</a></td>
              <td>{data.username}</td>
              <td>{data.password}</td>
              <td>{data.createdAt}</td>
              <td>{data.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDatas: () => {
    dispatch(fetchDatas())
  }
})

const mapStateToProps = state => {
  console.log("-------++ ", state.datas);
  return { datas: state.datas }
}

export default connect(mapStateToProps, mapDispatchToProps)(passManagerList)
