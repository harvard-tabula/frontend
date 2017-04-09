import { combineReducers } from 'redux'
import classes from './classes'
import tags from './tags'
import semesters from './semesters'
import concentrations from './concentrations'
import userInformation from './userInformation'
import profile from './profile'
import userInfo from './userInfo'

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
	tagCategories,
	semesters,
	concentrations,
	userInfo
})

export default userApp