import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AddClass from '../../containers/user/AddClass';
import VisibleClassList from '../../containers/user/VisibleClassList';
import VisibleAcademicInterests from '../../containers/user/VisibleAcademicInterests';
import VisibleProfessionalInterests from '../../containers/user/VisibleProfessionalInterests';
import VisibleMilestones from '../../containers/user/VisibleMilestones';
import VisibleLanguages from '../../containers/user/VisibleLanguages';
import Layout from '../../components/Layout';


class UserReduxPage extends React.Component {

  render() {
    return (
    	<Layout className='section'>
	        <div className='container'>
	          <div className='has-text-centered'>
	            <h1 className='title'>User Profile</h1>
	          </div>
	        </div>
	    	<div>
	    		<VisibleClassList />
				<AddClass />
				<VisibleAcademicInterests />
				<VisibleProfessionalInterests />
				<VisibleMilestones />
				<VisibleLanguages />
			</div>
		</Layout>
    );
  }

}

export default UserReduxPage;