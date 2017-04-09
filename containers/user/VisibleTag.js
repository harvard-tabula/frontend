import { connect } from 'react-redux'
import SuccessTagCategory from '../../components/SuccessTagCategory/SuccessTagCategory'

const mapStateToProps = (state) => {
	return {
		tagCategories: state.userInfo.tags_categories
	}
}

const VisibleTag = connect(
	mapStateToProps
)(SuccessTagCategory)

export default VisibleTag