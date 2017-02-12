import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = 'Tabula';
  }

  render() {
    return (
      <Layout className={s.content}>
        <h4>The start of something beautiful.</h4>
      </Layout>
    );
  }

}

export default HomePage;
