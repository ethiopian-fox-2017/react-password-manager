import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddPassword from './components/addPassword';
import ViewPassword from './components/viewPassword';
import Header from './components/header';
import Errorview from './components/error';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
        <Route exact path='/' component={ViewPassword} />
        <Route path='/new' component={AddPassword} />
        <Route component={Errorview} />
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
