import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from './components/Header';
import PassList from './components/PassList';
import PassForm from './components/PassForm';

injectTapEventPlugin();


const App = () => (
  <BrowserRouter>
    <MuiThemeProvider>
      <div>
        <Header />
        <Route exact path="/" component={PassList} />
        <Route path="/add-password" component={PassForm} />
      </div>
    </MuiThemeProvider>
  </BrowserRouter>
);

export default App;
