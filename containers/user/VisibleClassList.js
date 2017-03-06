import { connect } from 'react-redux'
import ClassListRedux from '../../components/ClassListRedux/ClassListRedux'
import { enterCourseID, enterGrade, enterWorkload, enterSemester,
		toggleEmoji} from '../../actions/user'

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
		onClickEmoji: (id, emojiId) => {
			dispatch(toggleEmoji(id, emojiId))
		}
	}
}

const VisibleClassList = connect(
	mapStateToProps,
	mapDispatchToProps
)(ClassListRedux)

export default VisibleClassList