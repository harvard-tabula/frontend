import { combineReducers } from 'redux'
import classSuggestions from './classSuggestions'
import recommendations from './recommendations'
import modal from './modal'

const recommendationReducer = combineReducers({
	classSuggestions,
	recommendations,
	modal
})

export default recommendationReducer