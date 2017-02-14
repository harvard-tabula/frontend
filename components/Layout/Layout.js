import React, { PropTypes } from 'react';
import Header from './Header';
import Footer from '../Footer';
import cx from 'classnames';


class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div ref={node => (this.root = node)}>
        <div>
          <Header />
          <main>
            <div {...this.props}/>
            <Footer />
          </main>
        </div>
      </div>
    );
  }
}

export default Layout;
