import React from 'react';
import { connect } from 'react-redux';

import { setSearchKeyword } from '../actions';

const styles = {
  left: {
    width: '50%'
  }
}

const SearchForm = (props) => {
  return (
    <div>
      <input style={styles.left} onChange={e => props.searchNow(e.target.value)} type="text" placeholder="Search here..." />
    </div>
  )
};

// const mapStateToProps = (state) => {
//   return {
//     keyword : state.searchKeyword
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    searchNow: (keyword) => dispatch(setSearchKeyword(keyword))
  }
}

export default connect(null, mapDispatchToProps)(SearchForm);
