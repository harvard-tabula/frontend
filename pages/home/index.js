import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = 'Tabula';
  }

  render() {
    return (
      <Layout>
        <div className='heading has-text-centered'>
          <h1 className='title'>The start of something beautiful</h1>
        </div>
      </Layout>
    );
  }

}

export default HomePage;
