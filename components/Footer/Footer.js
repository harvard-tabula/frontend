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
        <div className="content">
          <p>
            <em>
              Tabula is currently in the data-collection phase. By sharing your preferences and course history you'll be joining your classmates at SEAS in improving the experience for everyone. Once you've completed your profile, check back in at the end of the summer to get predictions for the classes on your shopping list.
            </em>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
