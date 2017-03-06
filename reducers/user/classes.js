export const ADD_CLASS = 'ADD_CLASS'
export const TOGGLE_EMOJI1 = 'TOGGLE_EMOJI1'
export const TOGGLE_EMOJI2 = 'TOGGLE_EMOJI2'
export const TOGGLE_EMOJI3 = 'TOGGLE_EMOJI3'
export const TOGGLE_EMOJI4 = 'TOGGLE_EMOJI4'
export const TOGGLE_EMOJI5 = 'TOGGLE_EMOJI5'
export const TOGGLE_EMOJI6 = 'TOGGLE_EMOJI6'
export const TOGGLE_EMOJI7 = 'TOGGLE_EMOJI7'
export const TOGGLE_EMOJI8 = 'TOGGLE_EMOJI8'
export const ENTER_COURSEID = 'ENTER_COURSEID'
export const ENTER_GRADE = 'ENTER_GRADE'
export const ENTER_WORKLOAD = 'ENTER_WORKLOAD'
export const ENTER_SEMESTER = 'ENTER_SEMESTER'

const classElement = (state={}, action) => {
	switch (action.type){
		case ADD_CLASS:
			return {
				id: action.payload.id,
				courseId: '',
				grade: '',
				workload: '',
				semester: '',
				emoji1: false,
				emoji2: false,
				emoji3: false,
				emoji4: false,
				emoji5: false,
				emoji6: false,
				emoji7: false,
				emoji8: false
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
		case TOGGLE_EMOJI1:
			if (state.id != action.payload.id) {
				return state
			}
			return Object.assign({}, state, {
				emoji1: !state.emoji1
			})
		case TOGGLE_EMOJI2:
			if (state.id != action.payload.id) {
				return state
			}
			return Object.assign({}, state, {
				emoji2: !state.emoji2
			})
		case TOGGLE_EMOJI3:
			if (state.id != action.payload.id) {
				return state
			}
			return Object.assign({}, state, {
				emoji3: !state.emoji3
			})
		case TOGGLE_EMOJI4:
			if (state.id != action.payload.id) {
				return state
			}
			return Object.assign({}, state, {
				emoji4: !state.emoji4
			})
		case TOGGLE_EMOJI5:
			if (state.id != action.payload.id) {
				return state
			}
			return Object.assign({}, state, {
				emoji5: !state.emoji5
			})
		case TOGGLE_EMOJI6:
			if (state.id != action.payload.id) {
				return state
			}
			return Object.assign({}, state, {
				emoji6: !state.emoji6
			})
		case TOGGLE_EMOJI7:
			if (state.id != action.payload.id) {
				return state
			}
			return Object.assign({}, state, {
				emoji7: !state.emoji7
			})
		case TOGGLE_EMOJI8:
			if (state.id != action.payload.id) {
				return state
			}
			return Object.assign({}, state, {
				emoji8: !state.emoji8
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
		case TOGGLE_EMOJI1:
			return state.map(t =>
				classElement(t, action)
			)
		case TOGGLE_EMOJI2:
			return state.map(t =>
				classElement(t, action)
			)
		case TOGGLE_EMOJI3:
			return state.map(t =>
				classElement(t, action)
			)
		case TOGGLE_EMOJI4:
			return state.map(t =>
				classElement(t, action)
			)
		case TOGGLE_EMOJI5:
			return state.map(t =>
				classElement(t, action)
			)
		case TOGGLE_EMOJI6:
			return state.map(t =>
				classElement(t, action)
			)
		case TOGGLE_EMOJI7:
			return state.map(t =>
				classElement(t, action)
			)
		case TOGGLE_EMOJI8:
			return state.map(t =>
				classElement(t, action)
			)
		default:
			return state
	}
}

export default classes