import React from 'react';
import Link from '../Link/Link';

class Navigation extends React.Component {

  render() {
    return (
      <div className="nav-right nav-menu">
        <Link className="nav-item" to="/">Home</Link>
        <Link className="nav-item" to="/user">User Profile</Link>
        <Link className="nav-item" to="/recommendation">Recommendation</Link>
      </div>
    );
  }

}

export default Navigation;
