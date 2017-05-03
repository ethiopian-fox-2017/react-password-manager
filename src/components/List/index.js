import React from 'react';
import { connect } from 'react-redux';
import { getList } from '../../actions';
import Password from './Password';

class List extends React.Component {
  componentWillMount() {
    this.props.getList();
  }
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th><abbr title="ID">ID</abbr></th>
              <th><abbr title="URL">URL</abbr></th>
              <th><abbr title="Username">Username</abbr></th>
              <th><abbr title="Password">Password</abbr></th>
              <th><abbr title="Created At">Created At</abbr></th>
              <th><abbr title="Updated At">Updated At</abbr></th>
              <th colSpan="2"><abbr title="Option">Option</abbr></th>
            </tr>
          </thead>
          { this.props.passwords.map(password => (
              <Password key={password.id} password={password} />
            ))
          }
        </table>
      </div>

    );
  }
}

const stateToProps = state => ({
  passwords: state,
});

const dispatchToProps = dispatch => ({
  getList: () => dispatch(getList()),
});

export default connect(stateToProps, dispatchToProps)(List);
