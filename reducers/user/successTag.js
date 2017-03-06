export const TOGGLE_TAG = 'TOGGLE_TAG'

const successTag = (state={}, action) => {
	switch (action.type){
		case TOGGLE_TAG:
			if (state.value != action.payload.value) {
				return state
			}
			return Object.assign({}, state, {
				clicked: !state.clicked
			})
		default:
			return state
	}
}
export default successTag