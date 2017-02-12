import React from 'react';
import Link from '../Link';
import s from './Footer.css';
import cx from 'classnames';


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>© {"{Jessica Wang, Joe Kahn}"}</p>
          <Link to="/privacy">Privacy & Terms</Link>
          <a className="icon" href="https://github.com/josephwandile/tabula">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
