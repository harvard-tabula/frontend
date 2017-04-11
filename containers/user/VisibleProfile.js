import { connect } from 'react-redux'
import UserInformation from '../../components/UserInformation/UserInformation'
import { changeName, enterEmail, changeConcentration, 
	changeYearsCoding, changeYear, changeGender,
	changeEthnicity } from '../../actions/user'

const mapStateToProps = (state) => {
	return {
		profile: state.profile.profile,
		name: state.profile.profile.name,
		concentrations: state.concentrations.concentrations,
		ethnicities: state.userInfo.ethnicities,
		genders: state.userInfo.genders,
		concentration: (state.profile.profile.concentration==null ? '' : state.profile.profile.concentration.name)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChangeName: (text) => {
			dispatch(changeName(text))
		},
		onChangeEmail: (text) => {
			dispatch(enterEmail(text))
		},
		onChangeConcentration: (text) => {
			dispatch(changeConcentration(text))
		},
		onChangeYearsCoding: (text) => {
			dispatch(changeYearsCoding(text))
		},
		onChangeGraduation: (text) => {
			dispatch(changeYear(text))
		},
		onChangeGender: (text) => {
			dispatch(changeGender(text))
		},
		onChangeEthnicity: (text) => {
			dispatch(changeEthnicity(text))
		}
	}
}

const VisibleUserInformation = connect(
	mapStateToProps,
	mapDispatchToProps
)(UserInformation)

export default VisibleUserInformation