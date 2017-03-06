export const ADD_LANGUAGE = 'ADD_LANGUAGE'
export const TOGGLE_LANGUAGE = 'TOGGLE_LANGUAGE'

const language = (state={}, action) => {
	switch (action.type){
		case ADD_LANGUAGE:
			return {
				id: 'language' + action.payload.id,
				text: '',
				success: false,
				className: 'tag is-medium'
			}
		case TOGGLE_LANGUAGE:
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

const languages = (state = [], action) => {
	switch (action.type) {
		case ADD_LANGUAGE:
			return [
				...state,
				language(undefined, action)
			]
		case TOGGLE_LANGUAGE:
			return state.map(t =>
				language(t, action)
			)
		default:
			return state
	}
}

export default languages