import update from 'react-addons-update';

export const ADD_CLASS = 'ADD_CLASS'
export const ENTER_COURSEID = 'ENTER_COURSEID'
export const ENTER_GRADE = 'ENTER_GRADE'
export const ENTER_WORKLOAD = 'ENTER_WORKLOAD'
export const ENTER_SEMESTER = 'ENTER_SEMESTER'
export const TOGGLE_EMOJI = 'TOGGLE_EMOJI'

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

export default classes