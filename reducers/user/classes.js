import update from 'immutability-helper';

import {ADD_CLASS, REMOVE_CLASS, ENTER_COURSEID, ENTER_GRADE, ENTER_WORKLOAD, ENTER_TERM, ENTER_CLASS_YEAR,
	TOGGLE_EMOJI, REQUEST_CLASSES, RECEIVE_CLASSES, SUGGESTION_SELECTED, MARK_RECEIVED_CLASSES, 
	MARK_HOURS_SUCCESS, MARK_HOURS_FAILURE} from '../../actions/user/index'

const classElement = (state={}, action) => {
	switch (action.type){
		case ADD_CLASS:
			return {
				course: {
					id: null,
					name_short: null
				},
				grade: null,
				hours: null,
				semester: null,
				term: null,
				year: null,
				course_tags: [],
				canPut: false,
				suggestedName: false,
				id: action.payload.id,
				tags: [],
				hoursSuccess: false
			}
		case ENTER_COURSEID:
			if (state.id != action.payload.id) {
				return state
			}
			else if((state.term != null) && (state.year!=null)){
				return update(state, {
					course: {
						name_short: {$set: action.payload.courseId}
					}
				})
			}
			return update(state, {
				course: {
					name_short: {$set: action.payload.courseId}
				}
			})
		case SUGGESTION_SELECTED:
			if (state.id != action.payload.classId) {
				return state
			}
			else if((state.term != null) && (state.year!=null)){
				return update(state, {
					course: {
						id: {$set: action.payload.courseId},
						name_short: {$set: action.payload.courseName}
					},
					suggestedName: {$set: true},
					canPut: {$set: true}
				})
			}
			return update(state, {
				course: {
					id: {$set: action.payload.courseId},
					name_short: {$set: action.payload.courseName}
				},
				suggestedName: {$set: true}
			})
		case MARK_RECEIVED_CLASSES:
			let temp_tags = []
			state.course_tags.map(tag =>{
				temp_tags.push(tag.id)
			})
			return update(state, {
				canPut: {$set: true},
				term: {$set: state.semester.split(' ')[0]},
				year: {$set: state.semester.split(' ')[1]},
				tags: {$set: temp_tags},
				hoursSuccess: {$set: state.hours!= null ? true : false}
			})
		case ENTER_GRADE:
			if (state.id != action.payload.id) {
				return state
			}
			return Object.assign({}, state, {
				grade: action.payload.grade
			})
		case ENTER_WORKLOAD:
			if (state.id != action.payload.id) {
				return state
			}
			return Object.assign({}, state, {
				hours: action.payload.hours,
				hoursSuccess: false
			})
		case MARK_HOURS_SUCCESS:
			if (state.id != action.payload.id) {
				return state
			}
			return Object.assign({}, state, {
				hoursSuccess: true
			})
		case MARK_HOURS_FAILURE:
			if (state.id != action.payload.id) {
				return state
			}
			return Object.assign({}, state, {
				hoursSuccess: false
			})
		case ENTER_TERM:
			if (state.id != action.payload.id) {
				return state
			} 
			else if((state.year!=null) && (state.suggestedName)){
				return Object.assign({}, state, {
					term: action.payload.term,
				semester: action.payload.term + ' ' + state.year,
					canPut: true
				})
			}
			return Object.assign({}, state, {
				term: action.payload.term,
				semester: action.payload.term + ' ' + state.year
			})
		case ENTER_CLASS_YEAR:
			if (state.id != action.payload.id) {
				return state
			}
			else if((state.term!=null) && (state.suggestedName)){
				return Object.assign({}, state, {
					year: action.payload.year,
					semester: state.term + ' ' + action.payload.year,
					canPut: true
				})
			}
			return Object.assign({}, state, {
				year: action.payload.year,
				semester: state.term + ' ' + action.payload.year
			})
		case TOGGLE_EMOJI:
			if (state.id != action.payload.id) {
				return state
			} else if (state.tags.indexOf(action.payload.emojiId) > -1){
				return update(state, {
					tags: {$apply: function(x) {return x.filter((item) => item !== action.payload.emojiId)}}
				})
			}
			return update(state,{
				tags: {$push: [action.payload.emojiId]}
			})
		default:
			return state
	}
}

// // Original redux without api
// const classes = (state = [], action) => {
// 	switch (action.type) {
// 		case ADD_CLASS:
// 			return [
// 				...state,
// 				classElement(undefined, action)
// 			]
		// case REMOVE_CLASS:
		// 	return state.filter((item) => item.id !== action.payload.id)
// 		case ENTER_COURSEID:
// 			return state.map(t =>
// 				classElement(t, action)
// 			)
// 		case ENTER_GRADE:
// 			return state.map(t =>
// 				classElement(t, action)
// 			)
// 		case ENTER_WORKLOAD:
// 			return state.map(t =>
// 				classElement(t, action)
// 			)
// 		case ENTER_SEMESTER:
// 			return state.map(t =>
// 				classElement(t, action)
// 			)
// 		case TOGGLE_EMOJI:
// 			return state.map(t =>
// 				classElement(t, action)
// 			)
// 		default:
// 			return state
// 	}
// }

function classes(state = {
	isFetching: false,
	didInvalidate: false,
	fetched: false,
	classes: []
}, action) {
	switch (action.type){
		case REQUEST_CLASSES:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})
		case RECEIVE_CLASSES:
			console.log(action.payload.classes)
			return Object.assign({}, state,{
				isFetching: false,
				didInvalidate: false,
				fetched: true,
				classes: action.payload.classes,
				lastUpdated: action.payload.receivedAt
			})
		case ADD_CLASS:
			return update(state, {
				classes: {$push: [classElement(undefined, action)]}
			})
		case REMOVE_CLASS:
			return update(state, {
				classes: {$apply: function(x) {return x.filter((item) => item.id !== action.payload.id)}}
			})
		case ENTER_COURSEID:
			return update(state, {
				classes: {$apply: function(x) {return x.map(t => classElement(t, action));}}
			})
		case ENTER_GRADE:
			return update(state, {
				classes: {$apply: function(x) {return x.map(t => classElement(t, action));}}
			})
		case ENTER_WORKLOAD:
			return update(state, {
				classes: {$apply: function(x) {return x.map(t => classElement(t, action));}}
			})
		case MARK_HOURS_SUCCESS:
			return update(state, {
				classes: {$apply: function(x) {return x.map(t => classElement(t, action));}}
			})
		case MARK_HOURS_FAILURE:
			return update(state, {
				classes: {$apply: function(x) {return x.map(t => classElement(t, action));}}
			})
		case ENTER_TERM:
			return update(state, {
				classes: {$apply: function(x) {return x.map(t => classElement(t, action));}}
			})
		case ENTER_CLASS_YEAR:
			return update(state, {
				classes: {$apply: function(x) {return x.map(t => classElement(t, action));}}
			})
		case TOGGLE_EMOJI:
			return update(state, {
				classes: {$apply: function(x) {return x.map(t => classElement(t, action));}}
			})
		case SUGGESTION_SELECTED:
			return update(state, {
				classes: {$apply: function(x) {return x.map(t => classElement(t, action));}}
			})
		case MARK_RECEIVED_CLASSES:
			return update(state, {
				classes: {$apply: function(x) {return x.map(t => classElement(t, action));}}
			})
		default:
			return state
	}
}


export default classes