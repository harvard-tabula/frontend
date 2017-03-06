import { connect } from 'react-redux'
import Milestones from '../../components/Milestones/Milestones'
import { toggleMilestone } from '../../actions/user'

const mapStateToProps = (state) => {
	return {
		milestones: state.milestones
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTagClick: (id) => {
			dispatch(toggleMilestone(id))
		}
	}
}

const VisibleMilestones = connect(
	mapStateToProps,
	mapDispatchToProps
)(Milestones)

export default VisibleMilestones