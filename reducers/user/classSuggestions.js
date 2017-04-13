import update from 'react-addons-update';
import { REQUEST_CLASS_SUGGESTIONS, RECEIVE_CLASS_SUGGESTIONS, ENTER_COURSEID,
	CLEAR_CLASS_SUGGESTIONS } from '../../actions/user/index'

function classSuggestions(state = {
	isFetching: false,
	didInvalidate: false,
	fetched: false,
	classSuggestions: [],
	input: ''
}, action) {
	switch (action.type) {
		case REQUEST_CLASS_SUGGESTIONS:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false,
				fetched: false
			})
		case RECEIVE_CLASS_SUGGESTIONS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				fetched: true,
				classSuggestions: action.payload.classSuggestions
			})
		case ENTER_COURSEID:
			return Object.assign({}, state, {
				input: action.payload.courseId
			})
		case CLEAR_CLASS_SUGGESTIONS:
			return Object.assign({}, state, {
				classSuggestions: []
			})
		default:
			return state
	}
}

export default classSuggestions