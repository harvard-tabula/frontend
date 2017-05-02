import React from 'react';
import Link from '../Link/Link';


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <Link to="/privacy">Privacy & Terms</Link>
          </p>
          <p>
            <a className="icon" href="https://github.com/harvard-tabula">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
