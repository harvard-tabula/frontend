import { connect } from 'react-redux'
import UserInformation from '../../components/UserInformation/UserInformation'
import { enterName, enterEmail, enterConcentration, 
	enterYearsCoding, enterGraduation, enterGender,
	enterEthnicity } from '../../actions/user'

const mapStateToProps = (state) => {
	return {
		profile: state.profiley,
		concentrations: ["Applied Mathematics", "Bioengineering", "Computer Science", "Electrical Engineering"],
		years_coding: ["0", "1", "2", "3"],
		year: ["2017", "2018", "2019", "2020"],
		ethnicities: ["Caucasian", "Asian", "African America"],
		genders: ["Female", "Male", "Other"]
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onBlurName: (text) => {
			dispatch(enterName(text))
		},
		onBlurEmail: (text) => {
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