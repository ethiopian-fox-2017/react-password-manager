import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PasswordForm, PasswordList, Search } from './components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; // import ini untuk menggunakan Material-ui Framework
import injectTapEventPlugin from 'react-tap-event-plugin'; // import ini untuk menggunakan Material-ui Framework

injectTapEventPlugin(); //Jangan lupa panggil function ini jika menggunakan Material-ui framework

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>React Password Manager</h2>
          </div>
          <PasswordForm />
          <center>
          <fieldset style={{width:'80%', padding:'40px', marginTop:'30px', marginBottom:'30px', border: "3px groove", textAlign:'left'}}>
            <legend><b>Password-List</b></legend>
            <center><Search /></center>
            <PasswordList />
          </fieldset>
          </center>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
