import React from 'react';
import Link from '../Link';

class Navigation extends React.Component {

  render() {
    return (
      <nav className="nav-right" ref={node => (this.root = node)}>
        <Link className="nav-item" to="/">Home</Link>
        <Link className="nav-item" to="/about">About</Link>
        <Link className="nav-item" to="/user">User Profile</Link>
        <Link className="nav-item" to="/recommendation">Recommendation</Link>
      </nav>
    );
  }

}

export default Navigation;
