import { combineReducers } from 'redux'
import userReducer from './user/index'
import recommendationReducer from './recommendation/index'

const appReducer = combineReducers({
	userReducer,
	recommendationReducer
})

export default appReducer