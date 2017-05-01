import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import VisibleClassList from '../../containers/user/VisibleClassList';
import VisibleProfile from '../../containers/user/VisibleProfile';
import VisibleModal from '../../containers/user/VisibleModal';
import Layout from '../../components/Layout';
import { fetchProfileIfNeeded, fetchClassesIfNeeded, fetchConcentrationsIfNeeded,
  fetchTagsIfNeeded, fetchSemestersIfNeeded, fetchUserInfoIfNeeded } from '../../actions/user';
import { authenticateCalls } from '../../core/api';

class UserReduxPage extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    authenticateCalls(dispatch, [
      fetchProfileIfNeeded,
      fetchClassesIfNeeded,
      fetchConcentrationsIfNeeded,
      fetchSemestersIfNeeded,
      fetchTagsIfNeeded,
      fetchUserInfoIfNeeded,
    ]);
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
          <VisibleModal />
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
