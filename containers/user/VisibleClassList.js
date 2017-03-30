import { connect } from 'react-redux'
import ClassListRedux from '../../components/ClassListRedux/ClassListRedux'
import { enterCourseID, enterGrade, enterWorkload, enterSemester,
		toggleEmoji, removeClass } from '../../actions/user'

const mapStateToProps = (state) => {
	return {
		classes: state.classes.classes,
		grades: ["A", "A-", "B+", "B", "B-", "C+", "C", "C-"],
		workloads: ["1 hour", "2 hour", "3 hour", "4 hour", "5 hour", "6 hour", "7 hour", "8 hour", "9 hour"],
		semesters: ["Spring 2017", "Fall 2016", "Spring 2016"],
		emojis: [{id: 0, text:'😍'}, 
			{id: 1, text:'😆'},
			{id: 2, text:'😫'},
			{id: 3, text:'😐'},
			{id: 4, text:'😴'},
			{id: 5, text:'😓'},
			{id: 6, text:'😡'},
			{id: 7, text:'🤕'}]
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
		onChangeSemester: (id, text) => {
			dispatch(enterSemester(id,text))
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