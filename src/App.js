import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import PasswordForm from './components/PasswordForm';
import PasswordSearchList from './components/PasswordSearchList';

import DummyComponent from './components/DummyComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Password Manager</h2>
        </div>
        <PasswordForm />
        <br />
        <PasswordSearchList />
        
      </div>
    );
  }
}

export default App;
