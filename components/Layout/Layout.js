import React, { PropTypes } from 'react';
import Header from './Header';
import Footer from '../Footer/Footer';

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className="hero is-fullheight" ref={node => (this.root = node)}>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
