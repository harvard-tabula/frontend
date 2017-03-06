import { connect } from 'react-redux'
import ClassListRedux from '../../components/ClassListRedux/ClassListRedux'
import { enterCourseID, enterGrade, enterWorkload, enterSemester,
		toggleEmoji1, toggleEmoji2, toggleEmoji3, toggleEmoji4, toggleEmoji5,
		toggleEmoji6, toggleEmoji7, toggleEmoji8 } from '../../actions/user'

const mapStateToProps = (state) => {
	return {
		classes: state.classes
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
		onClickEmoji1: (id) => {
			dispatch(toggleEmoji1(id))
		},
		onClickEmoji2: (id) => {
			dispatch(toggleEmoji2(id))
		},
		onClickEmoji3: (id) => {
			dispatch(toggleEmoji3(id))
		},
		onClickEmoji4: (id) => {
			dispatch(toggleEmoji4(id))
		},
		onClickEmoji5: (id) => {
			dispatch(toggleEmoji5(id))
		},
		onClickEmoji6: (id) => {
			dispatch(toggleEmoji6(id))
		},
		onClickEmoji7: (id) => {
			dispatch(toggleEmoji7(id))
		},
		onClickEmoji8: (id) => {
			dispatch(toggleEmoji8(id))
		}
	}
}

const VisibleClassList = connect(
	mapStateToProps,
	mapDispatchToProps
)(ClassListRedux)

export default VisibleClassList