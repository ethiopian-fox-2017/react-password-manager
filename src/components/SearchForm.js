import React from 'react';

const styles = {
  searchForm: {
    float: 'left',
    width: '300px',
    padding: '10px',
    margin: '20px 10px',
    fontSize: '18px',
  },
}


const SearchForm = () => (
  <div className="search-form">
    <input
      type="text"
      placeholder="Search anything .."
      style={styles.searchForm}
    />
  </div>
)

export default SearchForm
