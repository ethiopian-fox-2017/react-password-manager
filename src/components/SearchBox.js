import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import { searchKeyword } from '../actions';

const SearchBox = props => (
  <TextField
    type="text"
    floatingLabelText="Search here..."
    value={props.searchKey}
    onChange={e => props.search(e.target.value)}
  />
);

const mapDispatchToProps = dispatch => ({
  search: keyword => dispatch(searchKeyword(keyword)),
});

const mapStateToProps = state => ({
  searchKey: state.search,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
