import {TOGGLE_TAG} from '../../actions/user/index'

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

const tags = (state = [], action) => {
	switch (action.type) {
		case TOGGLE_TAG:
			return state.map(t =>
				tag(t, action)
			)
		default:
			return state
	}
}

export default tags