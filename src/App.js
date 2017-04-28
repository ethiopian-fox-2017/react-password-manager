import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import FormCreate from './components/FormCreate';
import SearchForm from './components/SearchForm';
import TableList  from './components/TableList';

const styles = {
  table: {
    width: '100%',
  },
  searchForm: {
    float: 'left',
    width: '300px',
    padding: '10px',
    margin: '20px 10px',
    fontSize: '18px',
  },
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <FormCreate />
        <SearchForm />
        <TableList />
      </div>
    );
  }
}

export default App;
