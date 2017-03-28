import update from 'react-addons-update';

import {ADD_CLASS, ENTER_COURSEID, ENTER_GRADE, ENTER_WORKLOAD, ENTER_SEMESTER, 
	TOGGLE_EMOJI, REQUEST_CLASSES, RECEIVE_CLASSES} from '../../actions/user/index'

const classElement = (state={}, action) => {
	switch (action.type){
		case ADD_CLASS:
			return {
				id: action.payload.id,
				courseId: '',
				grade: '',
				workload: '',
				semester: '',
				emojis: [{id: 0, success: false, text:'😍', className: "tag is-medium"}, 
						{id: 1, success: false, text:'😆', className: "tag is-medium"},
						{id: 2, success: false, text:'😫', className: "tag is-medium"},
						{id: 3, success: false, text:'😐', className: "tag is-medium"},
						{id: 4, success: false, text:'😴', className: "tag is-medium"},
						{id: 5, success: false, text:'😓', className: "tag is-medium"},
						{id: 6, success: false, text:'😡', className: "tag is-medium"},
						{id: 7, success: false, text:'🤕', className: "tag is-medium"}]
			}
		case ENTER_COURSEID:
			if (state.id != action.payload.id) {
				return state
			}
			return Object.assign({}, state, {
				courseId: action.payload.courseId
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
				workload: action.payload.workload
			})
		case ENTER_SEMESTER:
			if (state.id != action.payload.id) {
				return state
			}
			return Object.assign({}, state, {
				semester: action.payload.semester
			})
		case TOGGLE_EMOJI:
			if ((state.id != action.payload.id) && (state.emojis.id != action.payload.emojiId)) {
				return state
			}
			return update(state, {
				emojis: {
					[action.payload.emojiId]: {
						success: {$set : !state.emojis[action.payload.emojiId].success},
						className: {$set : ((state.emojis[action.payload.emojiId].success) ? "tag is-medium" : "tag is-medium is-success")}
					}
				}
			})
		default:
			return state
	}
}
// Original redux without api
const classes = (state = [], action) => {
	switch (action.type) {
		case ADD_CLASS:
			return [
				...state,
				classElement(undefined, action)
			]
		case ENTER_COURSEID:
			return state.map(t =>
				classElement(t, action)
			)
		case ENTER_GRADE:
			return state.map(t =>
				classElement(t, action)
			)
		case ENTER_WORKLOAD:
			return state.map(t =>
				classElement(t, action)
			)
		case ENTER_SEMESTER:
			return state.map(t =>
				classElement(t, action)
			)
		case TOGGLE_EMOJI:
			return state.map(t =>
				classElement(t, action)
			)
		default:
			return state
	}
}

// function classes(state = {
// 	isFetching: false,
// 	didInvalidate: false,
// 	items: []
// }, action) {
// 	switch (action.type){
// 		case REQUEST_CLASSES:
// 			return Object.assign({}, state, {
// 				isFetching: true,
// 				didInvalidate: false
// 			})
// 		case RECEIVE_CLASSES:
// 			return Object.assign({}, state,{
// 				isFetching: false,
// 				didInvalidate: false,
// 				items: action.payload.classes,
// 				lastUpdated: action.payload.receivedAt
// 			})
// 		case ADD_CLASS:
// 			return [
// 				...items,
// 				classElement(undefined, action)
// 			]
// 		case ENTER_COURSEID:
// 			return items.map(t =>
// 				classElement(t, action)
// 			)
// 		case ENTER_GRADE:
// 			return items.map(t =>
// 				classElement(t, action)
// 			)
// 		case ENTER_WORKLOAD:
// 			return items.map(t =>
// 				classElement(t, action)
// 			)
// 		case ENTER_SEMESTER:
// 			return items.map(t =>
// 				classElement(t, action)
// 			)
// 		case TOGGLE_EMOJI:
// 			return items.map(t =>
// 				classElement(t, action)
// 			)
// 		default:
// 			return state
// 	}
// }


export default classes