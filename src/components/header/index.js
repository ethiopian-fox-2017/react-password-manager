import { AppBar, RaisedButton } from '../MaterialUI'
import {Link} from 'react-router-dom'
import React from 'react'
import { style } from '../../config'
class HeaderApp extends React.Component{
  render(){
    return (
      <AppBar
        title="Save my password"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      >
      <Link to="/" style={style.link}>List Password</Link>
      <Link to="/new" style={style.link}>New Account </Link>
      </AppBar>
    )
  }
}

export default HeaderApp
