import {ADD_PROFESSIONALINTEREST, TOGGLE_PROFESSIONALINTEREST} from '../../actions/user/index'

const professionalInterest = (state={}, action) => {
	switch (action.type){
		case ADD_PROFESSIONALINTEREST:
			return {
				id: 'professionalInterest' + action.payload.id,
				text: '',
				success: false
			}
		case TOGGLE_PROFESSIONALINTEREST:
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

const professionalInterests = (state = [], action) => {
	switch (action.type) {
		case ADD_PROFESSIONALINTEREST:
			return [
				...state,
				professionalInterest(undefined, action)
			]
		case TOGGLE_PROFESSIONALINTEREST:
			return state.map(t =>
				professionalInterest(t, action)
			)
		default:
			return state
	}
}

export default professionalInterests