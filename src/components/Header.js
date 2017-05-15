import React from 'react';
import AppBar from 'material-ui/AppBar';
import SearchBox from './SearchBox';

const Header = () => (
  <div>
    <AppBar
      title="Password Manager"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    >
      <SearchBox />
    </AppBar>
  </div>
);

export default Header;
