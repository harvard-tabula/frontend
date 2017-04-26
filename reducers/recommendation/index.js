import { combineReducers } from 'redux'
import classSuggestions from './classSuggestions'
import recommendations from './recommendations'

const recommendationReducer = combineReducers({
	classSuggestions,
	recommendations
})

export default recommendationReducer