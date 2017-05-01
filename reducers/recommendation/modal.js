import {SHOW_MODAL} from '../../actions/user/index'

function userInfo(state = {
	showModal: false
}, action) {
	switch (action.type) {
		case SHOW_MODAL:
			return Object.assign({}, state, {
				showModal: true
			})
		default:
			return state
	}
}


export default userInfo