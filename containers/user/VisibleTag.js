import { connect } from 'react-redux'
import SuccessTagCategory from '../../components/SuccessTagCategory/SuccessTagCategory'

const mapStateToProps = (state) => {
	return {
		tagCategories: state.userReducer.userInfo.tags_categories.filter(category => category.category != "user_history")
	}
}

const VisibleTag = connect(
	mapStateToProps
)(SuccessTagCategory)

export default VisibleTag