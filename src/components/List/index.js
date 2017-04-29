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
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th><abbr title="ID">ID</abbr></th>
              <th><abbr title="URL">URL</abbr></th>
              <th><abbr title="Username">Username</abbr></th>
              <th><abbr title="Password">Password</abbr></th>
              <th><abbr title="Created At">Created At</abbr></th>
            </tr>
          </tfoot>
          <tbody>
            { this.props.passwords.map(password => (
              <Password key={password.id} password={password} />
            ))
            }
          </tbody>
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
