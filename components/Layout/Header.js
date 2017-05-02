import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';

class Header extends React.Component {

  render() {
    return (
      <div className="hero is-medium is-primary">
        <div className="hero-head">
          <div className="nav">
            <div className="container" ref={node => (this.root = node)}>
              <div className="nav-left">
                <Link className="nav-item" to="/">
                  Tabula
                </Link>
              </div>
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
