import { connect } from 'react-redux'
import Languages from '../../components/Languages/Languages'
import { toggleLanguage } from '../../actions/user'

const mapStateToProps = (state) => {
	return {
		languages: state.languages
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTagClick: (id) => {
			dispatch(toggleLanguage(id))
		}
	}
}

const VisibleLanguages = connect(
	mapStateToProps,
	mapDispatchToProps
)(Languages)

export default VisibleLanguages