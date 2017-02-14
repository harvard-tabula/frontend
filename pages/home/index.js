import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';

class HomePage extends React.Component {

  render() {
    return (
      <Layout className='section is-large'>
        <div className='container'>
          <div className='heading has-text-centered'>
            <h1 className='title'>The start of something beautiful</h1>
          </div>
         </div>
      </Layout>
    );
  }

}

export default HomePage;
