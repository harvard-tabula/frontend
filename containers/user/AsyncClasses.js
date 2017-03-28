import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ClassListRedux from '../../components/ClassListRedux/ClassListRedux'
import { enterCourseID, enterGrade, enterWorkload, enterSemester,
    toggleEmoji, fetchClassesIfNeeded, removeClass} from '../../actions/user'

class AsyncClasses extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchClassesIfNeeded())
  }

  componentDidUpdate(prevProps) {
    if (this.props.classes !== prevProps.classes) {
      const { dispatch, selectedSubreddit } = this.props
      dispatch(fetchClassesIfNeeded(selectedSubreddit))
    }
  }

  handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch } = this.props
    dispatch(fetchClassesIfNeeded())
  }

const mapStateToProps = (state) => {
  return {
    classes: state.classes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBlurCourseId: (id, text) => {
      dispatch(enterCourseID(id, text))
    },
    onChangeGrade: (id, text) => {
      dispatch(enterGrade(id,text))
    },
    onChangeWorkload: (id, text) => {
      dispatch(enterWorkload(id,text))
    },
    onChangeSemester: (id, text) => {
      dispatch(enterSemester(id,text))
    },
    onClickEmoji: (id, emojiId) => {
      dispatch(toggleEmoji(id, emojiId))
    },
    onClickRemove: (id) => {
      dispatch(removeClass(id))
    }
  }
}

const AsyncClasses = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassListRedux)

export default AsyncClasses