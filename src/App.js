import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import FormLogin from './components/FormLogin';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Juan Password Manager</h2>
          </div>

          <nav className="nav navbarku">
            <div className="container">
              <div className="nav-left">
                <Link to="/" className="nav-item is-tab is-hidden-mobile">Home</Link>
                <Link to="/list" className="nav-item is-tab is-hidden-mobile">List</Link>
              </div>
            </div>
          </nav>
          <br />
          <Route exact path="/" component={FormLogin} />
          <Route path="/list" component={List} />
        </div>
      </Router>
    );
  }
}

export default App;
