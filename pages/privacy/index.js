import React from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';

class PrivacyPage extends React.Component {

  componentDidMount() {
    document.title = 'Privacy';
  }

  render() {
    return (
      <Layout className='section'>
        <div className='container'>
          <div className='content'>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </Layout>
    );
  }

}

export default PrivacyPage;
