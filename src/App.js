import React, { Component } from 'react'
import './App.css'

import PasswordForm from './components/PasswordForm'
import PasswordList from './components/PasswordList'

import {
  MuiThemeProvider,
  injectTapEventPlugin,
  AppBar,
  Drawer,
  MenuItem } from './MaterialUi'

injectTapEventPlugin()

import {
  cyan800,
} from 'material-ui/styles/colors'

const styles = {
  AppBar: {
    backgroundColor: cyan800,
    position: 'fixed',
    top: 0,
  },
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      components: [PasswordList, PasswordForm],
      current: 0
    }
  }

  handleToggle = (e) => {
    this.setState({open: !this.state.open})
  }

  handleCloseAndSwitch = (e, index) => {
    this.setState({
      open: false,
      current: index,
    })
  }

  render() {
    const Child = this.state.components[this.state.current]
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Password Manager"
            onLeftIconButtonTouchTap={() => this.handleToggle()}
            style={styles.AppBar}
          >
          </AppBar>
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem
              onTouchTap={(event) => this.handleCloseAndSwitch(event, 0)}>
              Password List
            </MenuItem>
            <MenuItem
              onTouchTap={(event) => this.handleCloseAndSwitch(event, 1)}>
              Password Form
            </MenuItem>
          </Drawer>
          <Child />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
