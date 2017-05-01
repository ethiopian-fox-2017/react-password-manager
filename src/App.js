import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, browserHistory, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from './components/Header';
import PassList from './components/PasswordList/PassList';
import PassForm from './components/PasswordForm/PassForm';

injectTapEventPlugin();


const App = () => (
  <BrowserRouter history={browserHistory}>
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
