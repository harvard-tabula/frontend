import { connect } from 'react-redux'
import UserInformation from '../../components/UserInformation/UserInformation'
import { changeName, enterEmail, changeConcentration, 
	enterYearsCoding, blurYearsCoding, enterYear, blurYear, changeGender,
	changeEthnicity } from '../../actions/user'

const mapStateToProps = (state) => {
	return {
		profile: state.userReducer.profile.profile,
		name: state.userReducer.profile.profile.name,
		concentrations: ['Concentration'].concat(state.userReducer.concentrations.concentrations),
		ethnicities: ['Ethnicity'].concat(state.userReducer.userInfo.ethnicities),
		genders: ['Gender'].concat(state.userReducer.userInfo.genders),
		concentration: (state.userReducer.profile.profile.concentration==null ? [] : state.userReducer.profile.profile.concentration.name),
		nameSuccess: state.userReducer.profile.nameSuccess,
		emailSuccess: state.userReducer.profile.emailSuccess,
		genderSuccess: state.userReducer.profile.genderSuccess,
		ethnicitySuccess: state.userReducer.profile.ethnicitySuccess,
		concentrationSuccess: state.userReducer.profile.concentratoinSuccess,
		yearsCodingSuccess: state.userReducer.profile.yearsCodingSuccess,
		yearSuccess: state.userReducer.profile.yearSuccess
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