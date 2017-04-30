import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import AddClass from '../../containers/user/AddClass';
import VisibleClassList from '../../containers/user/VisibleClassList';
import VisibleTag from '../../containers/user/VisibleTag';
import VisibleProfile from '../../containers/user/VisibleProfile';
import Layout from '../../components/Layout';
import { fetchLogin, fetchProfileIfNeeded, fetchClassesIfNeeded, fetchConcentrationsIfNeeded,
  fetchTagsIfNeeded, fetchSemestersIfNeeded, fetchUserInfoIfNeeded } from '../../actions/user';

const baseUrl = 'https://api.tabula.life/';

class UserReduxPage extends Component {

  componentWillMount() {
    const { dispatch } = this.props;

    const sentData = {
      method: 'GET',
      mode: 'cors',
      body: null,
      credentials: 'include',
    };

    fetch(`${baseUrl}login`, sentData)
      .then(response => response.json())
      .then(json => {
        if (json.redirect) {
          window.location = json.redirect;
        } else {
          dispatch(fetchProfileIfNeeded());
          dispatch(fetchClassesIfNeeded());
          dispatch(fetchConcentrationsIfNeeded());
          dispatch(fetchSemestersIfNeeded());
          dispatch(fetchTagsIfNeeded());
          dispatch(fetchUserInfoIfNeeded());
        }
      });
  }

  render() {
    return (
      <Layout className="section">
        <div className="container">
          <div className="has-text-centered">
            <h1 className="title">User Profile</h1>
          </div>
        </div>
        <div>
          <VisibleProfile />
          <VisibleClassList />
          <AddClass />
          <VisibleTag />
        </div>
      </Layout>
    );
  }

}

UserReduxPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
export default connect(mapStateToProps)(UserReduxPage);
