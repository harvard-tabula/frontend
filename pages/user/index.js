import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';

class UserPage extends React.Component {

  render() {
    return (
      <Layout className='section is-large'>
        <div className='container'>
          <div className='has-text-centered'>
            <h1 className='title'>User Profile</h1>
          </div>
        </div>
        <div class="media">
          <div class="media-left">
            <figure class="image is-128x128">
              <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image"></img>
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <label class="label">Name</label>
                <p class="control">
                  <input class="input" type="text" placeholder="John Doe"></input>
                </p>
              <label class="label">Email</label>
                <p class="control">
                  <input class="input" type="text" placeholder="johndoe@college.harvard.edu"></input>
                </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

}

export default UserPage;
