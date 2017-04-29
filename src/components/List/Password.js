import React from 'react';

const Password = props => (

    <tr>
      <th>{props.password.id}</th>
      <td>{props.password.url}</td>
      <td>{props.password.username}</td>
      <td>{props.password.password}</td>
      <td>{props.password.createdAt}</td>
    </tr>
  
);

export default Password;
