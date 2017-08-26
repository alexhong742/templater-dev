import React from 'react';
import { Component } from 'react';

/*** Componenets ***/
import Logo from './Logo.jsx';
import Nav from './Nav.jsx';

class Header extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Nav />
      </div>
    );
  }
}

export default Header;