import { connect } from 'react-redux'
import Modal from '../../components/Modal/Modal'

const mapStateToProps = (state) => {
	return {
		showModal: state.userReducer.modal.showModal
	}
}

const VisibleModal = connect(
	mapStateToProps
)(Modal)

export default VisibleModal