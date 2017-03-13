import fetch from 'isomorphic-fetch'

export const ENTER_NAME = 'ENTER_NAME'
export const ENTER_EMAIL = 'ENTER_EMAIL'
export const ENTER_CONCENTRATION = 'ENTER_CONCENTRATION'
export const ENTER_CODINGYEARS = 'ENTER_CODINGYEARS'
export const ENTER_GRADUATION = 'ENTER_GRADUATION'
export const ADD_CLASS = 'ADD_CLASS'
export const TOGGLE_EMOJI = 'TOGGLE_EMOJI'
export const ENTER_COURSEID = 'ENTER_COURSEID'
export const ENTER_GRADE = 'ENTER_GRADE'
export const ENTER_WORKLOAD = 'ENTER_WORKLOAD'
export const ENTER_SEMESTER = 'ENTER_SEMESTER'
export const TOGGLE_ACADEMICINTEREST = 'TOGGLE_ACADEMICINTEREST'
export const TOGGLE_PROFESSIONALINTEREST = 'TOGGLE_PROFESSIONALINTEREST'
export const TOGGLE_MILESTONE = 'TOGGLE_MILESTONE'
export const TOGGLE_LANGUAGE = 'TOGGLE_LANGUAGE'
export const REQUEST_CLASSES = 'REQUEST_CLASSES'
export const RECEIVE_CLASSES = 'RECEIVE_CLASSES'

export function enterName = (text) => {
	return {
		type: ENTER_NAME,
		payload: {name: text}
	}
}

export function enterEmail = (text) => {
	return {
		type: ENTER_EMAIL,
		payload: {email: text}
	}
}

export function enterConcentration = (text) => {
	return {
		type: ENTER_CONCENTRATION,
		payload: {concentration: text}
	}
}

export function enterCodingYears = (text) => {
	return {
		type: ENTER_CODINGYEARS,
		payload: {codingYears: text}
	}
}

export function enterGraduation = (text) => {
	return {
		type: ENTER_GRADUATION,
		payload: {graduation: text}
	}
}

export function addClass = () => {
	return {
		type: ADD_CLASS,
		payload: {id: nextClassId++}
	}
}

export function enterCourseID = (id, text) => {
	return {
		type: ENTER_COURSEID,
		payload: {id: id.num, courseId: text}
	}
}

export function enterGrade = (id, text) => {
	return {
		type: ENTER_GRADE,
		payload: {id: id.num, grade: text}
	}
}

export function enterWorkload = (id, text) => {
	return {
		type: ENTER_WORKLOAD,
		payload: {id: id.num, workload: text}
	}
}

export function enterSemester = (id, text) => {
	return {
		type: ENTER_SEMESTER,
		payload: {id: id.num, semester:text}
	}
}

export function toggleEmoji = (id, emojiId) => {
	console.log(id)
	console.log(emojiId)
	return {
		type: TOGGLE_EMOJI,
		payload: {id: id, emojiId: emojiId}
	}
}

export function toggleAcademicInterest = (id) => {
	return {
		type: TOGGLE_ACADEMICINTEREST,
		payload: {id: id}
	}
}

export function toggleProfessionalInterest = (id) => {
	return {
		type: TOGGLE_PROFESSIONALINTEREST,
		payload: {id: id}
	}
}

export function toggleMilestone = (id) => {
	return {
		type: TOGGLE_MILESTONE,
		payload: {id: id}
	}
}

export function toggleLanguage = (id) => {
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
			.then(josn => dispatch(receiveClasses(json)))
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
