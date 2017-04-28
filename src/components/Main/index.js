import React from 'react'

import Passwords from './Passwords'

const Main = () => (
  <div className="Main">
    <div className="box data-list">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th><abbr title="Link to websites" />URL</th>
            <th>Username</th>
            <th>Password</th>
            <th>createdAt</th>
            <th>updatedAt</th>
          </tr>
        </thead>
        <Passwords />
      </table>
    </div>
  </div>
)

export default Main