import React from 'react';

const styles = {
  left: {
    width: '50%'
  }
}

const SearchForm = () => {
  return (
    <div>
      <input style={styles.left} type="text" placeholder="Search here..." />
    </div>
  )

};

export default SearchForm;
