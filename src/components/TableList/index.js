import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchDatas, deleleteData } from '../../actions';
import { filterData } from '../../selectors';

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
  btnDelete: {
    backgroundColor: '#ff2100',
    color: '#fff',
    border: '#fff',
    borderRadius: '50%',
  }
}

class passManagerList extends React.Component {

  componentWillMount() {
    this.props.coba()
  }

  removeDataPass(id) {
    this.props.deleleteData(id)
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
            <th style={styles.head}>Actions</th>
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
              <td><button
                style={styles.btnDelete}
                onClick={() => this.removeDataPass(data.id)}
              >X</button></td>
            </tr>
          ))}
        </tbody>
        {this.props.datas.length === 0 && <h3>Sorry, no Data found ! :( </h3>}
      </table>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  coba: () => dispatch(fetchDatas()),
  deleleteData: (id) => dispatch(deleleteData(id)),
})

const mapStateToProps = state => {
  console.log('---- tetst',state);
  return {
    datas: filterData(state.datas, state.searchKeyword),
    searchKeyword: state.searchKeyword,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(passManagerList)
