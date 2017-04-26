import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import VisibleRecommendation from '../../containers/recommendation/VisibleRecommendation';
import { fetchLogin } from '../../actions/recommendation'

class RecommendationPage extends Component {

	constructor(props) {
		super(props)
	}
	
	componentWillMount() {
		const { dispatch } = this.props
		// dispatch(fetchLogin)
	}

  	render() {
	    return (
	    	<Layout className='section'>
		        <div className='container'>
		          <div className='has-text-centered'>
		            <h1 className='title'>Course Recommendation</h1>
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
	dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default connect(mapStateToProps)(RecommendationPage);