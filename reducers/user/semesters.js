import {REQUEST_SEMESTERS, RECEIVE_SEMESTERS} from '../../actions/user/index'

function semesters(state = {
	isFetching: false,
	didInvalidate: false,
	fetched: false,
	semesters:{}
}, action) {
	switch (action.type) {
		case REQUEST_SEMESTERS:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false,
				fetched: false
			})
		case RECEIVE_SEMESTERS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				fetched: true,
				semesters: action.payload.semesters,
				lastUpdated: action.payload.receivedAt
			})
		default:
			return state
	}
}


export default semesters