import {ADD_ACADEMICINTEREST, TOGGLE_ACADEMICINTEREST} from '../../actions/user/index'

const academicInterest = (state={}, action) => {
	switch (action.type){
		case ADD_ACADEMICINTEREST:
			return {
				id: 'academicInterest' + action.payload.id,
				text: '',
				success: false,
				className: 'tag is-medium'
			}
		case TOGGLE_ACADEMICINTEREST:
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

const academicInterests = (state = [], action) => {
	switch (action.type) {
		case ADD_ACADEMICINTEREST:
			return [
				...state,
				academicInterest(undefined, action)
			]
		case TOGGLE_ACADEMICINTEREST:
			return state.map(t =>
				academicInterest(t, action)
			)
		default:
			return state
	}
}

export default academicInterests