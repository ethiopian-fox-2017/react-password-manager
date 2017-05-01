import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//Import Another component
import ListAccount from './components/content/ListAccount'
import HeaderApp from './components/header/'

import injectTapEventPlugin from 'react-tap-event-plugin';

import NewAccount from './components/content/NewAccount'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
<MuiThemeProvider>
  <Router>
  <div>
      <div>
        <HeaderApp />
      </div>
      <div>
          <Route exact path="/" component={ListAccount}/>
          <Route path='/new' component={NewAccount} />
      </div>
  </div>
  </Router>
</MuiThemeProvider>
)

export default App;
