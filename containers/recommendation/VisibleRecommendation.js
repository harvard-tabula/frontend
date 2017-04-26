import { connect } from 'react-redux'
import Recommendation from '../../components/Recommendation/Recommendation'
import { clearClassSuggestions, fetchClassSuggestions, 
		changeSuggestionSelected, changeClass } from '../../actions/recommendation'

const mapStateToProps = (state) => {
	return {
		classSuggestions: state.recommendationReducer.classSuggestions.classSuggestions,
		name: state.recommendationReducer.classSuggestions.value,
		recommendations: state.recommendationReducer.recommendations.recommendations,
		recommendationFetched: state.recommendationReducer.recommendations.fetched
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChangeClassId: (text) => {
			dispatch(changeClass(text))
		},
		onSuggestionsClearRequested: () => {
			dispatch(clearClassSuggestions())
		},
		getSuggestionValue: (suggestion) => {
			return suggestion.catalogue_number
		},
		fetchClassSuggestions: (text) => {
			dispatch(fetchClassSuggestions(text))
		},
		onSuggestionSelected: (event, suggestion) => {
			dispatch(changeSuggestionSelected(suggestion))
		},
		onSuggestionsFetchRequested: (event) =>{
			dispatch(fetchClassSuggestions(event.value))
		}
	}
}

const VisibleRecommendation = connect(
	mapStateToProps,
	mapDispatchToProps
)(Recommendation)

export default VisibleRecommendation