import { connect } from 'react-redux'
import SuccessTagList from '../../components/SuccessTagList/SuccessTagList'
import { toggleTag } from '../../actions/user'

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
			dispatch(toggleTag(id))
		}
	}
}

const VisibleTagList = connect(
	mapStateToProps,
	mapDispatchToProps
)(SuccessTagList)

export default VisibleTagList