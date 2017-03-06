import { combineReducers } from 'redux'
import classes from './classes'
import academicInterests from './academicInterests'
import professionalInterests from './professionalInterests'
import milestones from './milestones'
import languages from './languages'

const userApp = combineReducers({
	classes,
	academicInterests,
	professionalInterests,
	milestones,
	languages
})

export default userApp