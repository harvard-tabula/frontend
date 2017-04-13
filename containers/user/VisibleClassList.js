import { connect } from 'react-redux'
import ClassListRedux from '../../components/ClassListRedux/ClassListRedux'
import { enterCourseID, changeGrade, changeWorkload, changeTerm, changeClassYear,
		toggleEmoji, removeClass, clearClassSuggestions, fetchClassSuggestions, 
		changeSuggestionSelected } from '../../actions/user'

const mapStateToProps = (state) => {
	return {
		classes: state.classes.classes,
		classSuggestions: state.classSuggestions.classSuggestions,
		grades: state.userInfo.grades,
		terms: state.userInfo.terms,
		years: ["2014", "2015", "2016", "2017"],
		emojis: [{id: 0, text:'😍', hover: 'Loved It'}, 
			{id: 1, text:'😀', hover:'Liked It'},
			{id: 2, text:'😐', hover:'It was okay'},
			{id: 3, text:'😫', hover:'Disliked It'},
			{id: 4, text:'😡', hover:'Hated It'},
			{id: 5, text:'😴', hover:'It was boring'},
			{id: 6, text:'💀', hover:'It was a lot of work'}]
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
			dispatch(toggleEmoji(id, emojiId))
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
		onSuggestionSelected: (classId, courseId) => {
			dispatch(changeSuggestionSelected(classId, courseId))
		}
	}
}

const VisibleClassList = connect(
	mapStateToProps,
	mapDispatchToProps
)(ClassListRedux)

export default VisibleClassList