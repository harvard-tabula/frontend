import { connect } from 'react-redux'
import UserInformation from '../../components/UserInformation/UserInformation'
import { enterName, enterEmail, enterConcentration, 
	enterYearsCoding, enterGraduation, enterGender,
	enterEthnicity } from '../../actions/user'

const mapStateToProps = (state) => {
	return {
		profile: state.profile.profile,
		name: state.profile.profile.name,
		concentrations: state.concentrations.concentrations,
		years_coding: ["0", "1", "2", "3"],
		year: ["2017", "2018", "2019", "2020"],
		ethnicities: ["Caucasian", "Asian", "African America"],
		genders: ["Female", "Male", "Other"]
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChangeName: (text) => {
			dispatch(enterName(text))
		},
		onChangeEmail: (text) => {
			dispatch(enterEmail(text))
		},
		onChangeConcentration: (text) => {
			dispatch(enterConcentration(text))
		},
		onChangeYearsCoding: (text) => {
			dispatch(enterYearsCoding(text))
		},
		onChangeGraduation: (text) => {
			dispatch(enterYear(text))
		},
		onChangeGender: (text) => {
			dispatch(enterGender(text))
		},
		onChangeEthnicity: (text) => {
			dispatch(enterEthnicity(text))
		}
	}
}

const VisibleUserInformation = connect(
	mapStateToProps,
	mapDispatchToProps
)(UserInformation)

export default VisibleUserInformation