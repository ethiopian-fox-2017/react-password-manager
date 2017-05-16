import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PasswordForm from './components/PasswordForm'
import PasswordList from './components/PasswordList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PasswordForm />
        <PasswordList />
      </div>
    );
  }
}

export default App;
