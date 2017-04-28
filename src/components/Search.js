import React from 'react';

import { connect } from 'react-redux';
import { setSearchKeyword } from '../actions';

const styles = {
  marginBottom: '20px'
}

const Search = props => (
  <div>
    <form style={styles}>
      <input
        type='text'
        placeholder='Search by URL here...'
        style={{width: '300px', height: '20px', padding: '10px', fontSize:'15pt', marginBottom:'20px'}}
        onChange={e => props.setSearchKeyword(e.target.value)}
      />
    </form>
  </div>
)

const mapDispatchToProps = dispatch => ({
  setSearchKeyword: searchKeyword => dispatch(setSearchKeyword(searchKeyword)),
});


export default connect(null, mapDispatchToProps)(Search);
