import { connect } from 'react-redux'
import UserInformation from '../../components/UserInformation/UserInformation'
import { enterName, enterEmail, enterConcentration, enterCodingYears, enterGraduation} from '../../actions/user'

const mapStateToProps = (state) => {
	return {
		userInformation: state.userInformation
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onBlurName: (text) => {
			dispatch(enterName(id, text))
		},
		onBlurEmail: (text) => {
			dispatch(enterEmail(id, text))
		},
		onChangeConcentration: (text) => {
			dispatch(enterConcentration(id, text))
		},
		onChangeCodingYears: (text) => {
			dispatch(enterCodingYears(id, text))
		},
		onChangeGraduation: (text) => {
			dispatch(enterGraduation(id, text))
		},
	}
}

const VisibleUserInformation = connect(
	mapStateToProps,
	mapDispatchToProps
)(UserInformation)

export default VisibleUserInformation