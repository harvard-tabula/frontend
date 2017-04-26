import update from 'react-addons-update';
import { REQUEST_RECOMMENDATION, RECEIVE_RECOMMENDATION } from '../../actions/recommendation/index'

function recommendations(state = {
	isFetching: false,
	didInvalidate: false,
	fetched: false,
	recommendations: []
}, action) {
	switch (action.type) {
		case REQUEST_RECOMMENDATION:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false,
				fetched: false
			})
		case RECEIVE_RECOMMENDATION:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				fetched: true,
				recommendations: action.payload.recommendations
			})
		default:
			return state
	}
}

export default recommendations