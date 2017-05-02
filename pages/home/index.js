import React from 'react';
import Layout from '../../components/Layout/Layout';
import Link from '../../components/Link/Link';

const HomePage = () => (
  <Layout className="section is-large is-fullheight">
    <div className="container">
      <div className="heading has-text-centered">
        <h1 className="title">What if the Q guide were highly personalized?</h1>
        <h2 className="subtitle">Tabula predicts the outcomes of classes you haven't taken yet.</h2>
      </div>
      <br />
      <div className="content">
        <h4>We use machine learning, your course history, social media, and anomyized transcript data to answer queries like...</h4>
        <ol>
          <li>What grade am I likely to get?</li>
          <li>How much time will I spend on the class?</li>
          <li>What will my experience be? Happiness? Boredom? Pain?</li>
          <li>What classes can I take now to improve my experience of another class later?</li>
          <li>Which classes have my friends enjoyed in the past?</li>
          <li>Which classes are most suitable to my academic and professional goals?</li>
        </ol>
      </div>
      <br />
      <div className="heading has-text-centered">
        <Link className="button is-large is-primary" to="/user">Start your profile now</Link>
      </div>
    </div>
  </Layout>
);

export default HomePage;
