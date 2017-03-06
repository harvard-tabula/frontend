import { connect } from 'react-redux'
import ProfessionalInterests from '../../components/ProfessionalInterests/ProfessionalInterests'
import { toggleProfessionalInterest } from '../../actions/user'

const mapStateToProps = (state) => {
	return {
		professionalInterests: state.professionalInterests
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTagClick: (id) => {
			dispatch(toggleProfessionalInterest(id))
		}
	}
}

const VisibleProfessionalInterests = connect(
	mapStateToProps,
	mapDispatchToProps
)(ProfessionalInterests)

export default VisibleProfessionalInterests