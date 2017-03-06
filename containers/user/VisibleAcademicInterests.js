import { connect } from 'react-redux'
import AcademicInterests from '../../components/AcademicInterests/AcademicInterests'
import { toggleAcademicInterest } from '../../actions/user'

const mapStateToProps = (state) => {
	return {
		academicInterests: state.academicInterests
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTagClick: (id) => {
			dispatch(toggleAcademicInterest(id))
		}
	}
}

const VisibleAcademicInterests = connect(
	mapStateToProps,
	mapDispatchToProps
)(AcademicInterests)

export default VisibleAcademicInterests