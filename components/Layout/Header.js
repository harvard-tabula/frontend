import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import s from './Header.css';

class Header extends React.Component {

  render() {
    return (
      <nav className="nav" ref={node => (this.root = node)}>
        <div className="nav-left">
          <Link className="nav-item" to="/">
            Tabula
          </Link>
        </div>
        <Navigation />
      </nav>
    );
  }

}

export default Header;
