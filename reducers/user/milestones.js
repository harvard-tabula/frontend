import {ADD_MILESTONE, TOGGLE_MILESTONE} from '../../actions/user/index'

const milestone = (state={}, action) => {
	switch (action.type){
		case ADD_MILESTONE:
			return {
				index: action.payload.id,
				text: '',
				success: false
			}
		case TOGGLE_MILESTONE:
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

const milestones = (state = [], action) => {
	switch (action.type) {
		case ADD_MILESTONE:
			return [
				...state,
				milestone(undefined, action)
			]
		case TOGGLE_MILESTONE:
			return state.map(t =>
				milestone(t, action)
			)
		default:
			return state
	}
}

export default milestones