import { baseUrl } from '../../core/api';

export const CHANGE_CLASS = 'CHANGE_CLASS';
export const SUGGESTION_SELECTED = 'SUGGESTION_SELECTED';
export const CLEAR_CLASS_SUGGESTIONS = 'CLEAR_CLASS_SUGGESTIONS';
export const REQUEST_CLASS_SUGGESTIONS = 'REQUEST_CLASS_SUGGESTIONS';
export const RECEIVE_CLASS_SUGGESTIONS = 'RECEIVE_CLASS_SUGGESTIONS';
export const REQUEST_RECOMMENDATION = 'REQUEST_RECOMMENDATION';
export const RECEIVE_RECOMMENDATION = 'RECEIVE_RECOMMENDATION';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export function showModal() {
  return {
    type: SHOW_MODAL,
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
  };
}

export function changeClass(text) {
  return {
    type: CHANGE_CLASS,
    payload: { text },
  };
}

export function suggestionSelected(suggestion) {
  return {
    type: SUGGESTION_SELECTED,
    payload: {
      courseId: suggestion.id,
      courseName: suggestion.catalog_number },
  };
}

export function requestRecommendation() {
  return {
    type: REQUEST_RECOMMENDATION,
  };
}

export function receiveRecommendation(json) {
  return {
    type: RECEIVE_RECOMMENDATION,
    payload: {
      recommendations: json.data,
      receivedAt: Date.now(),
    },
  };
}

export function fetchRecommendation(id) {
  const sentData = {
    method: 'GET',
    mode: 'cors',
    body: null,
    credentials: 'include',
  };
  return dispatch => {
    dispatch(requestRecommendation());
    return fetch(`${baseUrl}recommendation/${id}`, sentData)
      .then(response => response.json())
      .then(json => {
        if (json.redirect) {
          dispatch(showModal);
        } else {
          dispatch(receiveRecommendation(json));
        }
      });
  };
}

export function changeSuggestionSelected(suggestion) {
  return (dispatch, getState) => {
    dispatch(suggestionSelected(suggestion.suggestion));
    const newState = getState();
    dispatch(fetchRecommendation(newState.recommendationReducer.classSuggestions.id));
  };
}

export function clearClassSuggestions() {
  return {
    type: CLEAR_CLASS_SUGGESTIONS,
  };
}

function receiveClassSuggestions(json) {
  return {
    type: RECEIVE_CLASS_SUGGESTIONS,
    payload: {
      classSuggestions: json.data,
      receivedAt: Date.now(),
    },
  };
}

export function fetchClassSuggestions(id) {
  const sentData = {
    method: 'GET',
    mode: 'cors',
    body: null,
    credentials: 'include',
  };
  return dispatch => {
    dispatch(requestRecommendation());
    return fetch(`${baseUrl}coursesearch/${id}`, sentData)
      .then(response => response.json())
      .then(json => {
        if (json.redirect) {
          showModal();
        } else {
          dispatch(receiveClassSuggestions(json));
        }
      });
  };
}
