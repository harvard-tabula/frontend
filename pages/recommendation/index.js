import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import VisibleRecommendation from '../../containers/recommendation/VisibleRecommendation';
import { authenticateCalls } from '../../core/api';

class RecommendationPage extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    authenticateCalls(dispatch, []);
  }

  render() {
    return (
      <Layout className="section">
        <div className="container">
          <div className="has-text-centered">
            <h1 className="title">Course Recommendation</h1>
          </div>
        </div>
        <div>
          <VisibleRecommendation />
        </div>
      </Layout>
    );
  }
}

RecommendationPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(RecommendationPage);
