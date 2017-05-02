import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import VisibleRecommendation from '../../containers/recommendation/VisibleRecommendation';
import VisibleModal from '../../containers/recommendation/VisibleModal';
import { authenticateCalls } from '../../core/api';

class RecommendationPage extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    authenticateCalls(dispatch, []);
  }

  render() {
    return (
      <Layout>
        <VisibleRecommendation />
        <VisibleModal />
      </Layout>
    );
  }
}

RecommendationPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(RecommendationPage);
