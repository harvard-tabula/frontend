import update from 'react-addons-update';
import { REQUEST_PROFILE, RECEIVE_PROFILE, ENTER_NAME,
	ENTER_EMAIL, ENTER_CONCENTRATION, ENTER_CONCENTRATION_ID, ENTER_YEARS_CODING, ENTER_YEAR,
	ENTER_GENDER, ENTER_ETHNICITY, TOGGLE_TAG } from '../../actions/user/index'

function profile(state = {
	isFetching: false,
	didInvalidate: false,
	fetched: false,
	profile: {},
	tag_id: [],
	concentration_id: -1
}, action) {
	switch (action.type) {
		case REQUEST_PROFILE:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false,
				fetched: false
			})
		case RECEIVE_PROFILE:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				fetched: true,
				profile: action.payload.profile,
				lastUpdated: action.payload.receivedAt,
				tag_id: action.payload.tags,
				concentration_id: action.payload.concentration_id
			})
		case ENTER_NAME:
			return update(state, {
				profile: {
					name: {$set : action.payload.name}
				}
			})
		case ENTER_CONCENTRATION:
			return update(state, {
				profile: {
					concentration: {$set : action.payload.concentration}
				}
			})
		case ENTER_CONCENTRATION_ID:
			return Object.assign({}, state, {
				concentration_id: action.payload.concentration_id
			})
		case ENTER_YEARS_CODING:
			return update(state, {
				profile: {
					years_coding: {$set : action.payload.years_coding}
				}
			})
		case ENTER_YEAR:
			return update(state, {
				profile: {
					year: {$set : action.payload.year}
				}
			})
		case ENTER_GENDER:
			return update(state, {
				profile: {
					gender: {$set : action.payload.gender}
				}
			})
		case ENTER_ETHNICITY:
			return update(state, {
				profile: {
					ethnicity: {$set : action.payload.ethnicity}
				}
			})
		case TOGGLE_TAG:
			if (state.tag_id.indexOf(action.payload.id) > -1){
				return update(state, {
					tag_id: {$apply: function(x) {return x.filter((item) => item !== action.payload.id)}}
				})
			}
			return update(state,{
				tag_id: {$push: [action.payload.id]}
			})
		default:
			return state
	}
}

export default profile