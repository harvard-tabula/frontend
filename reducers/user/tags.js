import { TOGGLE_TAG, REQUEST_TAGS, RECEIVE_TAGS } from '../../actions/user/index'

const tag = (state={}, action) => {
	switch (action.type){
		case TOGGLE_TAG:
			if (state.id != action.payload.id) {
				return state
			}
			return Object.assign({}, state, {
				success: !state.success
			})
		default:
			return state
	}
}

function tags(state = {
	isFetching: false,
	didInvalidate: false,
	fetched: false,
	tags:[]
}, action) {
	switch (action.type) {
		case REQUEST_TAGS:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false,
				fetched: false
			})
		case RECEIVE_TAGS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				fetched: true,
				tags: action.payload.tags,
				lastUpdated: action.payload.receivedAt
			})
		default:
			return state
	}
}


export default tags