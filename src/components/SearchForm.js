import React from 'react';
import { connect } from 'react-redux';

import { searchKeyword } from '../actions';

const styles = {
  searchForm: {
    float: 'left',
    width: '300px',
    padding: '10px',
    margin: '20px 10px',
    fontSize: '18px',
  },
}

const SearchForm = props => (
  <div className="search-form">
    <input
      type="text"
      placeholder="Search anything .."
      style={styles.searchForm}
      value={props.searchKeywordValue}
      onChange={e => props.setSearchKeyword(e.target.value)}
    />
  </div>
)

const mapStateToProps = state => ({
  searchKeywordValue: state.searchKeyword,
})

const mapDispatchToProps = dispatch => ({
  setSearchKeyword: keyword => dispatch(searchKeyword(keyword)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
