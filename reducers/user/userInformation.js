import {ENTER_NAME, ENTER_EMAIL, ENTER_CONCENTRATION, ENTER_CODINGYEARS, ENTER_GRADUATION} from '../../actions/user/index'

const userInformation = (state={}, action) => {
	switch (action.type){
		case ENTER_NAME:
			return Object.assign({}, state, {
				name: action.payload.name
			})
		case ENTER_EMAIL:
			return Object.assign({}, state, {
				email: action.payload.email
			})
		case ENTER_CONCENTRATION:
			return Object.assign({}, state, {
				concentration: action.payload.concentration
			})
		case ENTER_CODINGYEARS:
			return Object.assign({}, state, {
				codingYears: action.payload.codingYears
			})
		case ENTER_GRADUATION:
			return Object.assign({}, state, {
				graduation: action.payload.graduation
			})
		default:
			return state
	}
}

export default userInformation