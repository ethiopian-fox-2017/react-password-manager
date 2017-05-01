import React from 'react'
import {connect} from 'react-redux';
import { Input } from 'semantic-ui-react';

import {searchPassword} from '../actions';

export const SearchBox = (props) => (
  <div>
  <Input fluid focus onChange={(e)=> props.searchPassword(e.target.value)} placeholder='Search...' />
  </div>
)
const mapDispatchToProps = dispatch => ({
  searchPassword:(key)=>dispatch(searchPassword(key))
})


export default connect(null,mapDispatchToProps) (SearchBox);
