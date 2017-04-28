import React from 'react'

import PasswordList from './PasswordList';
import SearchForm from './SearchForm';

const styles = {
  card : {
    margin: 20,
    /* Add shadows to create the "card" effect */
    boxShadow: '0 4 8 0 rgba(0,0,0,0.2)',
    border: 'solid grey',
    width: 280,
    transition: '0.3s',
    borderRadius: 5 /* 5px rounded corners */
  },
  container: {
    padding: 20
  }
}

const PasswordSearchList = () => {
  return (
    <div>
    <center>
      <fieldset style={styles.card}>
        <legend >Password List</legend>

        <SearchForm />
        <br />
        <PasswordList />
      </fieldset>
    </center>
    </div>
  )
}

export default PasswordSearchList;
