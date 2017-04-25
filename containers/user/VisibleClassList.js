import { connect } from 'react-redux'
import ClassListRedux from '../../components/ClassListRedux/ClassListRedux'
import { enterCourseID, changeGrade, changeWorkload, changeTerm, changeClassYear,
		changeEmoji, removeClass, clearClassSuggestions, fetchClassSuggestions, 
		changeSuggestionSelected } from '../../actions/user'

const mapStateToProps = (state) => {
	let emojiDict = {
		"Neutral": {text:'😐', hover:'It was okay'},
		"Difficult": {text:'💀', hover:'It was difficult'},
		"Love": {text:'😍', hover: 'Loved It'},
		"Happy": {text:'😀', hover:'Liked It'},
		"Angry": {text:'😡', hover:'Hated It'},
		"Sad": {text:'🙁', hover:'Disliked It'},
		"Learning": {text:'📚', hover:'I learned a lot'}
	}
	return {
		classes: state.classes.classes,
		classSuggestions: state.classSuggestions.classSuggestions,
		grades: state.userInfo.grades,
		terms: state.userInfo.terms,
		years: ["2014", "2015", "2016", "2017"],
		emojis: state.tags.tags.filter(t => t.category == "user_history")
			.map(function(tag) {
				var emoji = emojiDict[tag.name]
				emoji.id = tag.id
				return emoji
			}),
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChangeClassId: (id, text) => {
			dispatch(enterCourseID(id,text))
		},
		onChangeGrade: (id, text) => {
			dispatch(changeGrade(id,text))
		},
		onChangeWorkload: (id, text) => {
			dispatch(changeWorkload(id,text))
		},
		onChangeTerm: (id, text) => {
			dispatch(changeTerm(id,text))
		},
		onChangeYear: (id, text) =>{
			dispatch(changeClassYear(id,text))
		},
		onClickEmoji: (id, emojiId) => {
			dispatch(changeEmoji(id, emojiId))
		},
		onClickRemove: (id) => {
			dispatch(removeClass(id))
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
		onSuggestionSelected: (classId, suggestion) => {
			dispatch(changeSuggestionSelected(classId, suggestion))
		}
	}
}

const VisibleClassList = connect(
	mapStateToProps,
	mapDispatchToProps
)(ClassListRedux)

export default VisibleClassList