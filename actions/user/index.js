import fetch from 'isomorphic-fetch'

export const ENTER_NAME = 'ENTER_NAME'
export const ENTER_EMAIL = 'ENTER_EMAIL'
export const ENTER_CONCENTRATION = 'ENTER_CONCENTRATION'
export const ENTER_YEARS_CODING = 'ENTER_YEARS_CODING'
export const ENTER_YEAR = 'ENTER_YEAR'
export const ENTER_GENDER = 'ENTER_GENDER'
export const ENTER_ETHNICITY = 'ENTER_ETHNICITY'
export const ADD_CLASS = 'ADD_CLASS'
export const REMOVE_CLASS = 'REMOVE_CLASS'
export const TOGGLE_EMOJI = 'TOGGLE_EMOJI'
export const ENTER_COURSEID = 'ENTER_COURSEID'
export const ENTER_GRADE = 'ENTER_GRADE'
export const ENTER_WORKLOAD = 'ENTER_WORKLOAD'
export const ENTER_SEMESTER = 'ENTER_SEMESTER'
export const TOGGLE_TAG = 'TOGGLE_TAG'
export const REQUEST_CLASSES = 'REQUEST_CLASSES'
export const RECEIVE_CLASSES = 'RECEIVE_CLASSES'
export const REQUEST_PROFILE = 'REQUEST_PROFILE'
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'
export const REQUEST_TAGS = 'REQUEST_TAGS'
export const RECEIVE_TAGS = 'RECEIVE_TAGS'
export const REQUEST_SEMESTERS = 'REQUEST_SEMESTERS'
export const RECEIVE_SEMESTERS = 'RECEIVE_SEMESTERS'
export const REQUEST_CONCENTRATIONS = 'REQUEST_CONCENTRATIONS'
export const RECEIVE_CONCENTRATIONS = 'RECEIVE_CONCENTRATIONS'


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
		payload: {ethnicity: text}
	}
}

export function addClass () {
	return {
		type: ADD_CLASS,
		payload: {id: nextClassId++}
	}
}

export function removeClass (id) {
	return {
		type: REMOVE_CLASS,
		payload: {id: id.num}
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

function requestClasses() {
	return{
		type: REQUEST_CLASSES
	}
}

function receiveClasses(json) {
	return{
		type: RECEIVE_CLASSES,
		payload: {
			classes: json.data,
			receivedAt: Date.now()
		}
	}
}

function fetchClasses(){
	let header = new Headers({
		'Access-Control-Allow-Origin':'*',
		'Content-Type': 'application/json'
	})

	let sentData ={
		method: 'GET',
		mode: 'cors',
		header: header,
		body: null,
		credentials: 'include'
	}

	return dispatch => {
		dispatch(requestClasses())
		return fetch('https://api.tabula.life/history', sentData)
			.then(response => response.json())
			.then(json =>
				{
					dispatch(receiveClasses(json))
				}
			)
	}
}

function shouldFetchClasses(state){
	const classes = state.classes
	if (!classes || !classes.fetched) {
		return true
	} else if (classes.isFetching) {
		return false
	} else {
		return classes.didInvalidate
	}
}

export function fetchClassesIfNeeded() {
	return (dispatch, getState) =>{
		if (shouldFetchClasses(getState())) {
			return dispatch(fetchClasses())
		} else {
			return Promise.resolve()
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
			profile: json.data,
			receivedAt: Date.now()
		}
	}
}

export function fetchProfile() {
	let header = new Headers({
		'Access-Control-Allow-Origin':'*',
		'Content-Type': 'application/json'
	})

	let sentData ={
		method: 'GET',
		mode: 'cors',
		header: header,
		body: null,
		credentials: 'include'
	}

	return dispatch => {
		dispatch(requestProfile())
		return fetch('https://api.tabula.life/profile', sentData)
			.then(response => response.json())
			.then(json =>
				{
					dispatch(receiveProfile(json))
				}
			)
	}
}

function shouldFetchProfile(state) {
	const profile = state.profile
	if (!profile || !profile.fetched) {
		return true
	} else if (profile.isFetching) {
		return false
	} else {
		return profile.didInvalidate
	}
}

export function fetchProfileIfNeeded() {
	return (dispatch, getState) =>{
		if (shouldFetchProfile(getState())) {
			return dispatch(fetchProfile())
		} else {
			return Promise.resolve()
		}
	}
}

function requestTags() {
	return {
		type: REQUEST_TAGS
	}
}

function receiveTags(json) {
	return {
		type: RECEIVE_TAGS,
		payload : {
			tags: json.data,
			receivedAt: Date.now()
		}
	}
}

export function fetchTags() {
	let header = new Headers({
		'Access-Control-Allow-Origin':'*',
		'Content-Type': 'application/json'
	})

	let sentData ={
		method: 'GET',
		mode: 'cors',
		header: header,
		body: null,
		credentials: 'include'
	}

	return dispatch => {
		dispatch(requestTags())
		return fetch('https://api.tabula.life/tags', sentData)
			.then(response => response.json())
			.then(json =>
				{
					dispatch(receiveTags(json))
				}
			)
	}
}

function shouldFetchTags(state) {
	const tags = state.tags
	if (!tags || !tags.fetched) {
		return true
	} else if (tags.isFetching) {
		return false
	} else {
		return tags.didInvalidate
	}
}

export function fetchTagsIfNeeded() {
	return (dispatch, getState) =>{
		if (shouldFetchTags(getState())) {
			return dispatch(fetchTags())
		} else {
			return Promise.resolve()
		}
	}
}

function requestSemesters() {
	return {
		type: REQUEST_SEMESTERS
	}
}

function receiveSemesters(json) {
	return {
		type: RECEIVE_SEMESTERS,
		payload : {
			semesters: json.data,
			receivedAt: Date.now()
		}
	}
}

export function fetchSemesters() {
	let header = new Headers({
		'Access-Control-Allow-Origin':'*',
		'Content-Type': 'application/json'
	})

	let sentData ={
		method: 'GET',
		mode: 'cors',
		header: header,
		body: null,
		credentials: 'include'
	}

	return dispatch => {
		dispatch(requestSemesters())
		return fetch('https://api.tabula.life/semesters', sentData)
			.then(response => response.json())
			.then(json =>
				{
					dispatch(receiveSemesters(json))
				}
			)
	}
}

function shouldFetchSemesters(state) {
	const semesters = state.semesters
	if (!semesters || !semesters.fetched) {
		return true
	} else if (semesters.isFetching) {
		return false
	} else {
		return semesters.didInvalidate
	}
}

export function fetchSemestersIfNeeded() {
	return (dispatch, getState) =>{
		if (shouldFetchSemesters(getState())) {
			return dispatch(fetchSemesters())
		} else {
			return Promise.resolve()
		}
	}
}

function requestConcentrations() {
	return {
		type: REQUEST_CONCENTRATIONS
	}
}

function receiveConcentrations(json) {
	return {
		type: RECEIVE_CONCENTRATIONS,
		payload : {
			concentrations: json.data,
			receivedAt: Date.now()
		}
	}
}

export function fetchConcentrations() {
	let header = new Headers({
		'Access-Control-Allow-Origin':'*',
		'Content-Type': 'application/json'
	})

	let sentData ={
		method: 'GET',
		mode: 'cors',
		header: header,
		body: null,
		credentials: 'include'
	}

	return dispatch => {
		dispatch(requestConcentrations())
		return fetch('https://api.tabula.life/concentrations', sentData)
			.then(response => response.json())
			.then(json =>
				{
					dispatch(receiveConcentrations(json))
				}
			)
	}
}

function shouldFetchConcentrations(state) {
	const concentrations = state.concentrations
	if (!concentrations || !concentrations.fetched) {
		return true
	} else if (concentrations.isFetching) {
		return false
	} else {
		return concentrations.didInvalidate
	}
}

export function fetchConcentrationsIfNeeded() {
	return (dispatch, getState) =>{
		if (shouldFetchConcentrations(getState())) {
			return dispatch(fetchConcentrations())
		} else {
			return Promise.resolve()
		}
	}
}