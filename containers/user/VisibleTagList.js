import { connect } from 'react-redux'
import SuccessTagList from '../../components/SuccessTagList/SuccessTagList'
import { clickTag } from '../../actions/user'

const mapStateToProps = (state, ownProps) => {
	return {
		list: state.tags.tags.filter(t => t.category == ownProps.categoryTitle),
		title: ownProps.title,
		selected: state.profile.profile.tags
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTagClick: (id) => {
			dispatch(clickTag(id))
		}
	}
}

const VisibleTagList = connect(
	mapStateToProps,
	mapDispatchToProps
)(SuccessTagList)

export default VisibleTagList