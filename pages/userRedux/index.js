import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import AddClass from '../../containers/user/AddClass';
import VisibleClassList from '../../containers/user/VisibleClassList';
import VisibleTagList from '../../containers/user/VisibleTagList';
import VisibleTag from '../../containers/user/VisibleTag';
import VisibleProfile from '../../containers/user/VisibleProfile';
import Layout from '../../components/Layout';
import { fetchProfileIfNeeded, fetchClassesIfNeeded, fetchConcentrationsIfNeeded, 
	fetchTagsIfNeeded, fetchSemestersIfNeeded, fetchUserInfoIfNeeded } from '../../actions/user'

class UserReduxPage extends Component {

	constructor(props) {
		super(props)
	}
	
	componentWillMount() {
		console.log("component did mount")
		const { dispatch } = this.props
		dispatch(fetchProfileIfNeeded())
		dispatch(fetchClassesIfNeeded())
		dispatch(fetchConcentrationsIfNeeded())
		dispatch(fetchSemestersIfNeeded())
		dispatch(fetchTagsIfNeeded())
		dispatch(fetchUserInfoIfNeeded())
	}

  	render() {
	    return (
	    	<Layout className='section'>
		        <div className='container'>
		          <div className='has-text-centered'>
		            <h1 className='title'>User Profile</h1>
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

export default connect(mapStateToProps)(UserReduxPage);

