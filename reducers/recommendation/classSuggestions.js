import update from 'react-addons-update';
import { REQUEST_CLASS_SUGGESTIONS, RECEIVE_CLASS_SUGGESTIONS, ENTER_COURSEID,
	CLEAR_CLASS_SUGGESTIONS, CHANGE_CLASS, SUGGESTION_SELECTED } from '../../actions/recommendation/index';

function classSuggestions(state = {
  isFetching: false,
  didInvalidate: false,
  fetched: false,
  classSuggestions: [],
  value: '',
  id: -1,
}, action) {
  switch (action.type) {
    case REQUEST_CLASS_SUGGESTIONS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
        fetched: false,
      });
    case RECEIVE_CLASS_SUGGESTIONS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        fetched: true,
        classSuggestions: action.payload.classSuggestions,
      });
    case ENTER_COURSEID:
      return Object.assign({}, state, {
        input: action.payload.courseId,
      });
    case CLEAR_CLASS_SUGGESTIONS:
      return Object.assign({}, state, {
        classSuggestions: [],
      });
    case CHANGE_CLASS:
      return Object.assign({}, state, {
        value: action.payload.text,
      });
    case SUGGESTION_SELECTED:
      return Object.assign({}, state, {
        value: action.payload.courseName,
        id: action.payload.courseId,
      });
    default:
      return state;
  }
}

export default classSuggestions;
