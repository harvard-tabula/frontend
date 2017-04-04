import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AddClass from '../../containers/user/AddClass';
import VisibleClassList from '../../containers/user/VisibleClassList';
import VisibleTagList from '../../containers/user/VisibleTagList';
import VisibleTag from '../../containers/user/VisibleTag';
import VisibleProfile from '../../containers/user/VisibleProfile';
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
	    		<VisibleProfile />
	    		<VisibleClassList />
	    		<AddClass />
	    		<VisibleTag />
			</div>
		</Layout>
    );
  }

}

export default UserReduxPage;