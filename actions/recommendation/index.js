export const CHANGE_CLASS = 'CHANGE_CLASS'
export const SUGGESTION_SELECTED = 'SUGGESTION_SELECTED'
export const CLEAR_CLASS_SUGGESTIONS = 'CLEAR_CLASS_SUGGESTIONS'
export const REQUEST_CLASS_SUGGESTIONS = 'REQUEST_CLASS_SUGGESTIONS'
export const RECEIVE_CLASS_SUGGESTIONS = 'RECEIVE_CLASS_SUGGESTIONS'
export const REQUEST_RECOMMENDATION = 'REQUEST_RECOMMENDATION'
export const RECEIVE_RECOMMENDATION = 'RECEIVE_RECOMMENDATION'

export function changeClass (text) {
	return{
		type: CHANGE_CLASS,
		payload: {text:text}
	}
}

export function changeSuggestionSelected (suggestion) {
	return (dispatch, getState) => {
		dispatch(suggestionSelected(suggestion.suggestion))
		const newState = getState()
		dispatch(fetchRecommendation(newState.recommendationReducer.classSuggestions.id))
	}
}

export function suggestionSelected(suggestion) {
	console.log(suggestion)
	return{
		type: SUGGESTION_SELECTED,
		payload: {
			courseId: suggestion.id, 
			courseName: suggestion.catalog_number}
	}
}

export function clearClassSuggestions() {
	return {
		type: CLEAR_CLASS_SUGGESTIONS
	}
}

function requestClassSuggestions() {
	return{
		type: REQUEST_CLASS_SUGGESTIONS
	}
}

function receiveClassSuggestions(json) {
	return{
		type: RECEIVE_CLASS_SUGGESTIONS,
		payload: {
			classSuggestions: json.data,
			receivedAt: Date.now()
		}
	}
}

export function fetchClassSuggestions(text){
	let sentData ={
		method: 'GET',
		mode: 'cors',
		body: null,
		credentials: 'include'
	}

	return (dispatch, getState) =>{
		dispatch(requestClassSuggestions())
		return fetch('https://api.tabula.life/coursesearch/' + text, sentData)
			.then(response => response.json())
			.then(json =>
				{
					dispatch(receiveClassSuggestions(json))
				}
			)
	}
}

export function requestRecommendation() {
	return{
		type: REQUEST_RECOMMENDATION
	}
}

export function receiveRecommendation(json) {
	return{
		type: RECEIVE_RECOMMENDATION,
		payload: {
			recommendations: json.data,
			receivedAt: Date.now()
		}
	}
}

export function fetchRecommendation(id){
	let sentData ={
		method: 'GET',
		mode: 'cors',
		body: null,
		credentials: 'include'
	}
	return (dispatch, getState) =>{
		dispatch(requestRecommendation())
		return fetch('https://api.tabula.life/recommendation/' + id, sentData)
			.then(response => response.json())
			.then(json =>
				{
					dispatch(receiveRecommendation(json))
				}
			)
	}
}

export function fetchLogin() {
	console.log("attempt login")
	let sentData ={
		method: 'GET',
		mode: 'cors',
		body: null,
		credentials: 'include'
	}
	return fetch('https://api.tabula.life/login', sentData)
		.then(response => response.json())
		.then(json => {
			console.log("fetched")
			if (json.redirect){
				window.location = json.redirect
			}
		})
}