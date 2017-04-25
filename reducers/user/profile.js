import update from 'react-addons-update';
import { REQUEST_PROFILE, RECEIVE_PROFILE, ENTER_NAME,
	ENTER_EMAIL, ENTER_CONCENTRATION, ENTER_CONCENTRATION_ID, ENTER_YEARS_CODING, ENTER_YEAR,
	ENTER_GENDER, ENTER_ETHNICITY, TOGGLE_TAG, MARK_RECEIVED_PROFILE, MARK_YEARS_CODING_SUCCESS,
	MARK_YEARS_CODING_FAILURE, MARK_YEAR_SUCCESS, MARK_YEAR_FAILURE } from '../../actions/user/index'

function profile(state = {
	isFetching: false,
	didInvalidate: false,
	fetched: false,
	profile: {},
	tag_id: [],
	concentration_id: -1,
	nameSuccess: false,
	emailSuccess: false,
	genderSuccess: false,
	ethnicitySuccess: false,
	concentrationSuccess: false,
	yearsCodingSuccess: false,
	yearSuccess: false
}, action) {
	switch (action.type) {
		case REQUEST_PROFILE:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false,
				fetched: false
			})
		case RECEIVE_PROFILE:
			console.log(action.payload.profile)
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				fetched: true,
				profile: action.payload.profile,
				lastUpdated: action.payload.receivedAt,
				tag_id: action.payload.tags,
				concentration_id: action.payload.profile.concentration_id
			})
		case MARK_RECEIVED_PROFILE: 
			return Object.assign({}, state, {
				nameSuccess: (state.profile.name!=null ? true : false),
				emailSuccess: (state.profile.email!=null ? true : false),
				genderSuccess: (state.profile.gender!=null ? true : false),
				ethnicitySuccess: (state.profile.ethnicity!=null ? true : false),
				concentrationSuccess: (state.profile.concentration!=null ? true : false),
				yearsCodingSuccess: (state.profile.years_coding!=null ? true : false),
				yearSuccess: (state.profile.year!=null ? true : false)
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
				concentration_id: action.payload.concentration_id,
				concentrationSuccess: true
			})
		case ENTER_YEARS_CODING:
			return update(state, {
				profile: {
					years_coding: {$set : action.payload.years_coding}
				},
				yearsCodingSuccess: {$set: false}
			})
		case MARK_YEARS_CODING_SUCCESS:
			return Object.assign({}, state, {
				yearsCodingSuccess: true
			})
		case MARK_YEARS_CODING_FAILURE:
			return Object.assign({}, state, {
				yearsCodingSuccess: false
			})
		case ENTER_YEAR:
			return update(state, {
				profile: {
					year: {$set : action.payload.year}
				},
				yearSuccess: {$set: false}
			})
		case MARK_YEAR_SUCCESS:
			return Object.assign({}, state, {
				yearSuccess: true
			})
		case MARK_YEAR_FAILURE:
			return Object.assign({}, state, {
				yearSuccess: false
			})
		case ENTER_GENDER:
			return update(state, {
				profile: {
					gender: {$set : action.payload.gender}
				},
				genderSuccess: {$set : true}
			})
		case ENTER_ETHNICITY:
			return update(state, {
				profile: {
					ethnicity: {$set : action.payload.ethnicity}
				},
				ethnicitySuccess: {$set : true}
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