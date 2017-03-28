import fetch from 'isomorphic-fetch'

export const ENTER_NAME = 'ENTER_NAME'
export const ENTER_EMAIL = 'ENTER_EMAIL'
export const ENTER_CONCENTRATION = 'ENTER_CONCENTRATION'
export const ENTER_YEARS_CODING = 'ENTER_YEARS_CODING'
export const ENTER_YEAR = 'ENTER_YEAR'
export const ENTER_GENDER = 'ENTER_GENDER'
export const ENTER_ETHNICITY = 'ENTER_ETHNICITY'
export const ADD_CLASS = 'ADD_CLASS'
export const TOGGLE_EMOJI = 'TOGGLE_EMOJI'
export const ENTER_COURSEID = 'ENTER_COURSEID'
export const ENTER_GRADE = 'ENTER_GRADE'
export const ENTER_WORKLOAD = 'ENTER_WORKLOAD'
export const ENTER_SEMESTER = 'ENTER_SEMESTER'
export const TOGGLE_TAG = 'TOGGLE_TAG'
export const TOGGLE_ACADEMICINTEREST = 'TOGGLE_ACADEMICINTEREST'
export const TOGGLE_PROFESSIONALINTEREST = 'TOGGLE_PROFESSIONALINTEREST'
export const TOGGLE_MILESTONE = 'TOGGLE_MILESTONE'
export const TOGGLE_LANGUAGE = 'TOGGLE_LANGUAGE'
export const REQUEST_CLASSES = 'REQUEST_CLASSES'
export const RECEIVE_CLASSES = 'RECEIVE_CLASSES'
export const REQUEST_PROFILE = 'REQUEST_PROFILE'
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'
export const REQUEST_TAG_CATEGORIES = 'REQUEST_TAG_CATEGORIES'
export const RECEIVE_TAG_CATEGORIES = 'RECEIVE_TAG_CATEGORIES'


let nextClassId=0

export function enterName (text) {
	return {
		type: ENTER_NAME,
		payload: {name: text}
	}
}

export function enterEmail (text) {
	return {
		type: ENTER_EMAIL,
		payload: {email: text}
	}
}

export function enterConcentration (text) {
	return {
		type: ENTER_CONCENTRATION,
		payload: {concentration: text}
	}
}

export function enterYearsCoding (text) {
	return {
		type: ENTER_YEARS_CODING,
		payload: {years_coding: text}
	}
}

export function enterYear (text) {
	return {
		type: ENTER_YEAR,
		payload: {year: text}
	}
}

export function enterGender (text) {
	return {
		type: ENTER_GENDER,
		payload: {gender: text}
	}
}

export function enterEthnicity(text) {
	return {
		type: ENTER_ETHNICITY,
		payload: {enthnicity: text}
	}
}

export function addClass () {
	return {
		type: ADD_CLASS,
		payload: {id: nextClassId++}
	}
}

export function enterCourseID (id, text) {
	return {
		type: ENTER_COURSEID,
		payload: {id: id.num, courseId: text}
	}
}

export function enterGrade (id, text) {
	return {
		type: ENTER_GRADE,
		payload: {id: id.num, grade: text}
	}
}

export function enterWorkload (id, text) {
	return {
		type: ENTER_WORKLOAD,
		payload: {id: id.num, workload: text}
	}
}

export function enterSemester (id, text) {
	return {
		type: ENTER_SEMESTER,
		payload: {id: id.num, semester:text}
	}
}

export function toggleEmoji (id, emojiId) {
	console.log(id)
	console.log(emojiId)
	return {
		type: TOGGLE_EMOJI,
		payload: {id: id, emojiId: emojiId}
	}
}

export function toggleTag (id) {
	return {
		type: TOGGLE_TAG,
		payload: {id: id}
	}
}

export function toggleAcademicInterest (id) {
	return {
		type: TOGGLE_ACADEMICINTEREST,
		payload: {id: id}
	}
}

export function toggleProfessionalInterest (id) {
	return {
		type: TOGGLE_PROFESSIONALINTEREST,
		payload: {id: id}
	}
}

export function toggleMilestone (id) {
	return {
		type: TOGGLE_MILESTONE,
		payload: {id: id}
	}
}

export function toggleLanguage (id) {
	return {
		type: TOGGLE_LANGUAGE,
		payload: {id: id}
	}
}

function requestClasses() {
	return{
		type: REQUEST_CLASSES
	}
}

function receiveClasses() {
	return{
		type: RECEIVE_CLASSES,
		payload: {
			classes: json.data.children.map(child => child.data),
			receivedAt: Date.now()
		}
	}
}

function fetchClasses(){
	return dispatch =>{
		dispatch(requestClasses())
		return fetch('0.0.0.0:8080/replceWithCorrectHere')
			.then(response => response.json)
			.then(json => dispatch(receiveClasses(json)))
	}
}

function shouldFetchClasses(state){
	const classes = state.classes
	if (!classes) {
		return true
	} else if (classes.isFetching){
		return false
	} else {
		return classes.didInvalidate
	}
}

function fetchClassesIfNeeded() {
	return (dispatch, getState) => {
		if (shouldFetchClasses(getState())){
			return dispatch(fetchClasses())
		}
	}
}

function requestProfile() {
	return {
		type: REQUEST_PROFILE
	}
}

function receiveProfile(json) {
	return {
		type: RECEIVE_PROFILE,
		payload : {
			profile: json,
			receivedAt: Date.now()
		}
	}
}

export function fetchProfile() {
	let header = new Headers({
		'Access-Control-Allow-Origin':'*',
		'Content-Type': 'multipart/form-data' 
	})

	let sentData ={
		method: 'GET',
		mode: 'cors',
		header: header,
		body: null
	}

	return dispatch => {
		dispatch(requestProfile())
		return fetch('https://api.tabula.life', sentData)
			.then(function(response) {console.log(response); response.json})
			.then(json =>
				dispatch(receiveProfile(json))
			)
	}
}

function shouldFetchProfile(state) {
	const profile = state.profile
	if (!profile) {
		return true
	} else if (profile.isFetching) {
		return false
	} else {
		return profile.didInvalidate
	}
}

export function fetchProfileIfNeeded() {
	return (dispatch, getState) =>{
		if (shouldFetProfile(getState())) {
			return dispatch(fetchProfile())
		} else {
			return Promise.resolve()
		}
	}
}