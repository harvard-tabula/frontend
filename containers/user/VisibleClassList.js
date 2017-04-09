import { connect } from 'react-redux'
import ClassListRedux from '../../components/ClassListRedux/ClassListRedux'
import { enterCourseID, enterGrade, enterWorkload, enterTerm, enterClassYear,
		toggleEmoji, removeClass } from '../../actions/user'

const mapStateToProps = (state) => {
	return {
		classes: state.classes.classes,
		grades: state.userInfo.grades,
		workloads: ["1 hour", "2 hour", "3 hour", "4 hour", "5 hour", "6 hour", "7 hour", "8 hour", "9 hour"],
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
		onBlurCourseId: (id, text) => {
			dispatch(enterCourseID(id, text))
		},
		onChangeGrade: (id, text) => {
			dispatch(enterGrade(id,text))
		},
		onChangeWorkload: (id, text) => {
			dispatch(enterWorkload(id,text))
		},
		onChangeTerm: (id, text) => {
			dispatch(enterTerm(id,text))
		},
		onChangeYear: (id, text) =>{
			dispatch(enterClassYear(id,text))
		},
		onClickEmoji: (id, emojiId) => {
			dispatch(toggleEmoji(id, emojiId))
		},
		onClickRemove: (id) => {
			dispatch(removeClass(id))
		},
	}
}

const VisibleClassList = connect(
	mapStateToProps,
	mapDispatchToProps
)(ClassListRedux)

export default VisibleClassList