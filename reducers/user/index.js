import { combineReducers } from 'redux'
import classes from './classes'
import academicInterests from './academicInterests'
import professionalInterests from './professionalInterests'
import milestones from './milestones'
import languages from './languages'
import tags from './tags'
import userInformation from './userInformation'
import profile from './profile'

const tagCategories = (state = [], action) => {
	switch (action.type){
		default:
			return state
	}
}

const userApp = combineReducers({
	classes,
	tags,
	profile,
	tagCategories
})

export default userApp