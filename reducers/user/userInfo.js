import {REQUEST_USER_INFO, RECEIVE_USER_INFO} from '../../actions/user/index'

function userInfo(state = {
	isFetching: false,
	didInvalidate: false,
	fetched: false,
	ethnicities:[],
	genders:[],
	grades:[],
	tags_categories:[],
	terms:[],
}, action) {
	switch (action.type) {
		case REQUEST_USER_INFO:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false,
				fetched: false
			})
		case RECEIVE_USER_INFO:
			console.log(action.payload.userInfo)
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				fetched: true,
				ethnicities: action.payload.userInfo.ethnicities,
				genders: action.payload.userInfo.genders,
				grades: action.payload.userInfo.grades,
				tags_categories: action.payload.userInfo.tags_categories,
				terms: action.payload.userInfo.terms,
				lastUpdated: action.payload.receivedAt
			})
		default:
			return state
	}
}


export default userInfo