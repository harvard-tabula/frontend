export const ADD_MILESTONE = 'ADD_MILESTONE'
export const TOGGLE_MILESTONE = 'TOGGLE_MILESTONE'

const milestone = (state={}, action) => {
	switch (action.type){
		case ADD_MILESTONE:
			return {
				index: action.payload.id,
				text: '',
				success: false,
				className: 'tag is-medium'
			}
		case TOGGLE_MILESTONE:
			if (state.id != action.payload.id) {
				return state
			}
			return Object.assign({}, state, {
				success: !state.success,
				className: ((state.success) ? "tag is-medium" : "tag is-medium is-success")
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