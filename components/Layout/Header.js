import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import s from './Header.css';

class Header extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <nav className="nav" ref={node => (this.root = node)}>
        <div className="nav-left">
          <Link className="nav-item" to="/">
            Tabula
          </Link>
        </div>
        <div className="nav-right">
          <Navigation />
        </div>
      </nav>
    );
  }

}

export default Header;
