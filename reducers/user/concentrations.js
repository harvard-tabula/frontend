import {REQUEST_CONCENTRATIONS, RECEIVE_CONCENTRATIONS} from '../../actions/user/index'

function concentrations(state = {
	isFetching: false,
	didInvalidate: false,
	fetched: false,
	concentrations:[]
}, action) {
	switch (action.type) {
		case REQUEST_CONCENTRATIONS:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false,
				fetched: false
			})
		case RECEIVE_CONCENTRATIONS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				fetched: true,
				concentrations: action.payload.concentrations,
				lastUpdated: action.payload.receivedAt
			})
		default:
			return state
	}
}


export default concentrations