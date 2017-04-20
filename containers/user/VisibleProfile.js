import { connect } from 'react-redux'
import UserInformation from '../../components/UserInformation/UserInformation'
import { changeName, enterEmail, changeConcentration, 
	enterYearsCoding, blurYearsCoding, enterYear, blurYear, changeGender,
	changeEthnicity } from '../../actions/user'

const mapStateToProps = (state) => {
	return {
		profile: state.profile.profile,
		name: state.profile.profile.name,
		concentrations: state.concentrations.concentrations,
		ethnicities: state.userInfo.ethnicities,
		genders: state.userInfo.genders,
		concentration: (state.profile.profile.concentration==null ? '' : state.profile.profile.concentration.name),
		nameSuccess: state.profile.nameSuccess,
		emailSuccess: state.profile.emailSuccess,
		genderSuccess: state.profile.genderSuccess,
		ethnicitySuccess: state.profile.ethnicitySuccess,
		concentrationSuccess: state.profile.concentratoinSuccess,
		yearsCodingSuccess: state.profile.yearsCodingSuccess,
		yearSuccess: state.profile.yearSuccess
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
			dispatch(enterYearsCoding(text))
		},
		onBlurYearsCoding: () => {
			dispatch(blurYearsCoding())
		},
		onChangeGraduation: (text) => {
			dispatch(enterYear(text))
		},
		onBlurYear: () => {
			dispatch(blurYear())
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