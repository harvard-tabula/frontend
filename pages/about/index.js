import React from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';

class AboutPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className='section'>
        <div className='container'>
          <div className='heading has-text-centered'>
            <h1 className='title'>{title}</h1>
          </div>
          <div className='content'>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
         </div>
      </Layout>
    );
  }

}

export default AboutPage;
