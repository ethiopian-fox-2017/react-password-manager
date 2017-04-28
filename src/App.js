import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { Add, Main } from './components'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="nav pw-manager">
            <div className="nav-left">
              <p className="title is-4" nav-item><Link to="/">Password Manager</Link></p>
            </div>
            <div className="nav-right">
              <p className="title is-4" nav-item><Link to="/add">Add data</Link></p>
            </div>
          </nav>

          <Route exact path="/" component={Main} />
          <Route path="/add" component={Add} />
        </div>
      </Router>
    )
  }
}

export default App
