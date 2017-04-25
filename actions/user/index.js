import fetch from 'isomorphic-fetch'

export const ENTER_NAME = 'ENTER_NAME'
export const ENTER_EMAIL = 'ENTER_EMAIL'
export const ENTER_CONCENTRATION = 'ENTER_CONCENTRATION'
export const ENTER_CONCENTRATION_ID = 'ENTER_CONCENTRATION_ID'
export const ENTER_YEARS_CODING = 'ENTER_YEARS_CODING'
export const MARK_YEARS_CODING_SUCCESS = 'MARK_YEARS_CODING_SUCCESS'
export const MARK_YEARS_CODING_FAILURE = 'MARK_YEARS_CODING_FAILURE'
export const ENTER_YEAR = 'ENTER_YEAR'
export const MARK_YEAR_SUCCESS = 'MARK_YEAR_SUCCESS'
export const MARK_YEAR_FAILURE = 'MARK_YEAR_FAILURE'
export const ENTER_GENDER = 'ENTER_GENDER'
export const ENTER_ETHNICITY = 'ENTER_ETHNICITY'
export const ADD_CLASS = 'ADD_CLASS'
export const REMOVE_CLASS = 'REMOVE_CLASS'
export const SUGGESTION_SELECTED = 'SUGGESTION_SELECTED'
export const CLEAR_CLASS_SUGGESTIONS = 'CLEAR_CLASS_SUGGESTIONS'
export const TOGGLE_EMOJI = 'TOGGLE_EMOJI'
export const ENTER_COURSEID = 'ENTER_COURSEID'
export const ENTER_GRADE = 'ENTER_GRADE'
export const ENTER_WORKLOAD = 'ENTER_WORKLOAD'
export const MARK_HOURS_SUCCESS = 'MARK_HOURS_SUCCESS'
export const MARK_HOURS_FAILURE = 'MARK_HOURS_FAILURE'
export const ENTER_TERM = 'ENTER_TERM'
export const ENTER_CLASS_YEAR = 'ENTER_CLASS_YEAR'
export const TOGGLE_TAG = 'TOGGLE_TAG'
export const REQUEST_CLASSES = 'REQUEST_CLASSES'
export const RECEIVE_CLASSES = 'RECEIVE_CLASSES'
export const REQUEST_CLASS_SUGGESTIONS = 'REQUEST_CLASS_SUGGESTIONS'
export const RECEIVE_CLASS_SUGGESTIONS = 'RECEIVE_CLASS_SUGGESTIONS'
export const REQUEST_PROFILE = 'REQUEST_PROFILE'
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'
export const REQUEST_TAGS = 'REQUEST_TAGS'
export const RECEIVE_TAGS = 'RECEIVE_TAGS'
export const REQUEST_SEMESTERS = 'REQUEST_SEMESTERS'
export const RECEIVE_SEMESTERS = 'RECEIVE_SEMESTERS'
export const REQUEST_CONCENTRATIONS = 'REQUEST_CONCENTRATIONS'
export const RECEIVE_CONCENTRATIONS = 'RECEIVE_CONCENTRATIONS'
export const REQUEST_USER_INFO = 'REQUEST_USER_INFO'
export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO'
export const MARK_RECEIVED_CLASSES = 'MARK_RECEIVED_CLASSES'
export const MARK_RECEIVED_PROFILE = 'MARK_RECEIVED_PROFILE'


let nextClassId = -1

export function changeName (text) {
	return (dispatch, getState) => {
		const originalState = getState()
		dispatch(enterName(text))
		const newState = getState()
		let header = new Headers({
			'Content-Type': 'application/json'
		})
		let sentData ={
			method: 'PUT',
			mode: 'cors',
			body: JSON.stringify({
				gender: (newState.profile.genderSuccess ? newState.profile.profile.gender : null),
				ethnicity: (newState.profile.ethnicitySuccess ? newState.profile.profile.ethnicity : null),
				name: newState.profile.profile.name,
				tag_ids: newState.profile.tag_id,
				concentration_id: (newState.profile.concentrationSuccess ? newState.profile.concentration_id : null),
				years_coding: (newState.profile.yearsCodingSuccess ? newState.profile.profile.years_coding : null),
				year: (newState.profile.yearSuccess ? newState.profile.profile.year : null)
			}),
			credentials: 'include',
			headers: header
		}
		fetch('https://api.tabula.life/profile', sentData)
			.then(response => {console.log(response)})
			.catch(error => {console.log(error); dispatch(enterName(originalState.profile.name))})
	}
}

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

export function changeConcentration (text) {
	return (dispatch, getState) => {
		const originalState = getState()
		dispatch(enterConcentration(text))
		dispatch(getConcentrationId(text))
		const newState = getState()
		let header = new Headers({
			'Content-Type': 'application/json'
		})
		let sentData ={
			method: 'PUT',
			mode: 'cors',
			body: JSON.stringify({
				gender: (newState.profile.genderSuccess ? newState.profile.profile.gender : null),
				ethnicity: (newState.profile.ethnicitySuccess ? newState.profile.profile.ethnicity : null),
				name: newState.profile.profile.name,
				tag_ids: newState.profile.tag_id,
				concentration_id: (newState.profile.concentrationSuccess ? newState.profile.concentration_id : null),
				years_coding: (newState.profile.yearsCodingSuccess ? newState.profile.profile.years_coding : null),
				year: (newState.profile.yearSuccess ? newState.profile.profile.year : null)
			}),
			credentials: 'include',
			headers: header
		}
		fetch('https://api.tabula.life/profile', sentData)
			.then(response => {console.log(response)})
			.catch(error => {console.log(error); dispatch(enterConcentration(originalState.profile.concentration))})
	}
}

function getConcentrationId (text) {
	return (dispatch, getState) => {
		dispatch(fetchConcentrationsIfNeeded)
		getState().concentrations.concentrations.map(concentration => {
			if(concentration.name == text) {
				dispatch(enterConcentrationId(concentration.id))
			}
		})
	}
}

export function enterConcentrationId (num) {
	return{
		type: ENTER_CONCENTRATION_ID,
		payload: {concentration_id: num}
	}
}

export function enterConcentration (text) {
	return {
		type: ENTER_CONCENTRATION,
		payload: {concentration: text}
	}
}

export function markYearsCodingSuccess () {
	return{
		type: MARK_YEARS_CODING_SUCCESS
	}
}

export function markYearsCodingFailure() {
	return{
		type: MARK_YEARS_CODING_FAILURE
	}
}

export function blurYearsCoding() {
	return (dispatch, getState) => {
		const newState = getState()
		let regex = /^[0-9]*\.?[0-9]+?$/
		if (regex.test(newState.profile.profile.years_coding))
		{
			dispatch(markYearsCodingSuccess())
			let header = new Headers({
			'Content-Type': 'application/json'
			})
			let sentData ={
				method: 'PUT',
				mode: 'cors',
				body: JSON.stringify({
					gender: (newState.profile.genderSuccess ? newState.profile.profile.gender : null),
					ethnicity: (newState.profile.ethnicitySuccess ? newState.profile.profile.ethnicity : null),
					name: newState.profile.profile.name,
					tag_ids: newState.profile.tag_id,
					concentration_id: (newState.profile.concentrationSuccess ? newState.profile.concentration_id : null),
					years_coding: (newState.profile.yearsCodingSuccess ? newState.profile.profile.years_coding : null),
					year: (newState.profile.yearSuccess ? newState.profile.profile.year : null)
				}),
				credentials: 'include',
				headers: header
			}
			fetch('https://api.tabula.life/profile', sentData)
				.then(response => {console.log(response)})
				.catch(error => {console.log(error); dispatch(markYearsCodingFailure())})

		}
	}
}

export function changeYearsCoding (text) {
	return (dispatch, getState) => {
		const originalState = getState()
		dispatch(enterYearsCoding(text))
		const newState = getState()
		let header = new Headers({
			'Content-Type': 'application/json'
		})
		let sentData ={
			method: 'PUT',
			mode: 'cors',
			body: JSON.stringify({
				gender: (newState.profile.genderSuccess ? newState.profile.profile.gender : null),
				ethnicity: (newState.profile.ethnicitySuccess ? newState.profile.profile.ethnicity : null),
				name: newState.profile.profile.name,
				tag_ids: newState.profile.tag_id,
				concentration_id: (newState.profile.concentrationSuccess ? newState.profile.concentration_id : null),
				years_coding: (newState.profile.yearsCodingSuccess ? newState.profile.profile.years_coding : null),
				year: (newState.profile.yearSuccess ? newState.profile.profile.year : null)
			}),
			credentials: 'include',
			headers: header
		}
		fetch('https://api.tabula.life/profile', sentData)
			.then(response => {console.log(response)})
			.catch(error => {console.log(error); dispatch(enterYearsCoding(originalState.profile.years_coding))})
	}
}

export function enterYearsCoding (text) {
	return {
		type: ENTER_YEARS_CODING,
		payload: {years_coding: text}
	}
}

export function markYearSuccess () {
	return {
		type: MARK_YEAR_SUCCESS
	}
}

export function markYearFailure () {
	return {
		type: MARK_YEAR_FAILURE
	}
}

export function blurYear () {
	return (dispatch, getState) => {
		const newState = getState()
		let regex = /^20[0-2][0-9]$/
		if (regex.test(newState.profile.profile.year))
		{
			dispatch(markYearSuccess())
			let header = new Headers({
			'Content-Type': 'application/json'
			})
			let sentData ={
				method: 'PUT',
				mode: 'cors',
				body: JSON.stringify({
					gender: (newState.profile.genderSuccess ? newState.profile.profile.gender : null),
					ethnicity: (newState.profile.ethnicitySuccess ? newState.profile.profile.ethnicity : null),
					name: newState.profile.profile.name,
					tag_ids: newState.profile.tag_id,
					concentration_id: (newState.profile.concentrationSuccess ? newState.profile.concentration_id : null),
					years_coding: (newState.profile.yearsCodingSuccess ? newState.profile.profile.years_coding : null),
					year: (newState.profile.yearSuccess ? newState.profile.profile.year : null)
				}),
				credentials: 'include',
				headers: header
			}
			fetch('https://api.tabula.life/profile', sentData)
				.then(response => {console.log(response)})
				.catch(error => {console.log(error); dispatch(markYearFailure())})

		}
	}
}

export function changeYear (text) {
	return (dispatch, getState) => {
		const originalState = getState()
		dispatch(enterYear(text))
		const newState = getState()
		let header = new Headers({
			'Content-Type': 'application/json'
		})
		let sentData ={
			method: 'PUT',
			mode: 'cors',
			body: JSON.stringify({
				gender: (newState.profile.genderSuccess ? newState.profile.profile.gender : null),
				ethnicity: (newState.profile.ethnicitySuccess ? newState.profile.profile.ethnicity : null),
				name: newState.profile.profile.name,
				tag_ids: newState.profile.tag_id,
				concentration_id: (newState.profile.concentrationSuccess ? newState.profile.concentration_id : null),
				years_coding: (newState.profile.yearsCodingSuccess ? newState.profile.profile.years_coding : null),
				year: (newState.profile.yearSuccess ? newState.profile.profile.year : null)
			}),
			credentials: 'include',
			headers: header
		}
		fetch('https://api.tabula.life/profile', sentData)
			.then(response => {console.log(response)})
			.catch(error => {console.log(error); dispatch(enterYear(originalState.profile.year))})
	}
}

export function enterYear (text) {
	return {
		type: ENTER_YEAR,
		payload: {year: text}
	}
}

export function changeGender (text) {
	return (dispatch, getState) => {
		const originalState = getState()
		dispatch(enterGender(text))
		const newState = getState()
		let header = new Headers({
			'Content-Type': 'application/json'
		})
		let sentData ={
			method: 'PUT',
			mode: 'cors',
			body: JSON.stringify({
				gender: (newState.profile.genderSuccess ? newState.profile.profile.gender : null),
				ethnicity: (newState.profile.ethnicitySuccess ? newState.profile.profile.ethnicity : null),
				name: newState.profile.profile.name,
				tag_ids: newState.profile.tag_id,
				concentration_id: (newState.profile.concentrationSuccess ? newState.profile.concentration_id : null),
				years_coding: (newState.profile.yearsCodingSuccess ? newState.profile.profile.years_coding : null),
				year: (newState.profile.yearSuccess ? newState.profile.profile.year : null)
			}),
			credentials: 'include',
			headers: header
		}
		fetch('https://api.tabula.life/profile', sentData)
			.then(response => {console.log(response)})
			.catch(error => {console.log(error); dispatch(enterGender(originalState.profile.gender))})
	}
}

export function enterGender (text) {
	return {
		type: ENTER_GENDER,
		payload: {gender: text}
	}
}

export function changeEthnicity (text) {
	return (dispatch, getState) => {
		const originalState = getState()
		dispatch(enterEthnicity(text))
		const newState = getState()
		let header = new Headers({
			'Content-Type': 'application/json'
		})
		let sentData ={
			method: 'PUT',
			mode: 'cors',
			body: JSON.stringify({
				gender: (newState.profile.genderSuccess ? newState.profile.profile.gender : null),
				ethnicity: (newState.profile.ethnicitySuccess ? newState.profile.profile.ethnicity : null),
				name: newState.profile.profile.name,
				tag_ids: newState.profile.tag_id,
				concentration_id: (newState.profile.concentrationSuccess ? newState.profile.concentration_id : null),
				years_coding: (newState.profile.yearsCodingSuccess ? newState.profile.profile.years_coding : null),
				year: (newState.profile.yearSuccess ? newState.profile.profile.year : null)
			}),
			credentials: 'include',
			headers: header
		}
		fetch('https://api.tabula.life/profile', sentData)
			.then(response => {console.log(response)})
			.catch(error => {console.log(error); dispatch(enterEthnicity(originalState.profile.ethnicity))})
	}
}

export function changeSuggestionSelected (classId, courseId) {
	return (dispatch, getState) => {
		const originalState = getState()
		dispatch(suggestionSelected(classId, courseId))
		const newState = getState()
		var classElement = newState.classes.classes.find((classElement) => classElement.id==classId)
		if(classElement.canPut){
			let header = new Headers({
				'Content-Type': 'application/json'
			})
			let sentData ={
				method: 'PUT',
				mode: 'cors',
				body: JSON.stringify({
					id: classElement.course.id,
					semester: classElement.semester,
					grade: classElement.grade,
					course_tag_ids: classElement.tags,
					hours: classElement.hours
				}),
				credentials: 'include',
				headers: header
			}
			fetch('https://api.tabula.life/history', sentData)
				.then(response => {console.log(response)})
		}
	}
}

export function suggestionSelected(classId, suggestion) {
	console.log(suggestion.catalog_number)
	return{
		type: SUGGESTION_SELECTED,
		payload: {classId: classId, 
			courseId: suggestion.id, 
			courseName: suggestion.catalog_number}
	}
}

export function clearClassSuggestions() {
	return {
		type: CLEAR_CLASS_SUGGESTIONS
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
		payload: {id: nextClassId--}
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
		payload: {id: id, courseId: text}
	}
}

export function changeGrade (id, text) {
	return (dispatch, getState) => {
		const originalState = getState()
		dispatch(enterGrade(id,text))
		const newState = getState()
		var classElement = newState.classes.classes.find((classElement) => classElement.id==id.num)
		if(classElement.canPut){
			let header = new Headers({
				'Content-Type': 'application/json'
			})
			let sentData ={
				method: 'PUT',
				mode: 'cors',
				body: JSON.stringify({
					id: classElement.course.id,
					semester: classElement.semester,
					grade: classElement.grade,
					course_tag_ids: classElement.tags,
					hours: classElement.hours
				}),
				credentials: 'include',
				headers: header
			}
			fetch('https://api.tabula.life/history', sentData)
				.then(response => {console.log(response)})
		}
	}
}

export function enterGrade (id, text) {
	return {
		type: ENTER_GRADE,
		payload: {id: id.num, grade: text}
	}
}

export function markHoursSuccess (id) {
	return {
		type: MARK_HOURS_SUCCESS,
		payload: {id: id.num}
	}
}

export function markHoursFailure (id) {
	return {
		type: MARK_HOURS_FAILURE,
		payload: {id: id.num}
	}
}

export function blurWorkload() {
	return (dispatch, getState) => {
		const newState = getState()
		let regex = /^[0-9]*\.?[0-9]+?$/
		var classElement = newState.classes.classes.find((classElement) => classElement.id==id.num)
		if (regex.test(classElement.hours)){
			dispatch(markHoursSuccess())
		}
		if(classElement.canPut){
			let header = new Headers({
				'Content-Type': 'application/json'
			})
			let sentData ={
				method: 'PUT',
				mode: 'cors',
				body: JSON.stringify({
					id: classElement.course.id,
					semester: classElement.semester,
					grade: classElement.grade,
					course_tag_ids: classElement.tags,
					hours: classElement.hours
				}),
				credentials: 'include',
				headers: header
			}
			fetch('https://api.tabula.life/history', sentData)
				.then(response => {console.log(response)})
		}
	}
}

export function changeWorkload (id, text) {
	return (dispatch, getState) => {
		const originalState = getState()
		dispatch(enterWorkload(id,text))
		const newState = getState()
		var classElement = newState.classes.classes.find((classElement) => classElement.id==id.num)
		if(classElement.canPut){
			let header = new Headers({
				'Content-Type': 'application/json'
			})
			let sentData ={
				method: 'PUT',
				mode: 'cors',
				body: JSON.stringify({
					id: classElement.course.id,
					semester: classElement.semester,
					grade: classElement.grade,
					course_tag_ids: classElement.tags,
					hours: classElement.hours
				}),
				credentials: 'include',
				headers: header
			}
			fetch('https://api.tabula.life/history', sentData)
				.then(response => {console.log(response)})
		}
	}
}

export function enterWorkload (id, text) {
	return {
		type: ENTER_WORKLOAD,
		payload: {id: id.num, hours: text}
	}
}

export function changeTerm (id, text) {
	return (dispatch, getState) => {
		const originalState = getState()
		dispatch(enterTerm(id,text))
		const newState = getState()
		var classElement = newState.classes.classes.find((classElement) => classElement.id==id.num)
		if(classElement.canPut){
			let header = new Headers({
				'Content-Type': 'application/json'
			})
			let sentData ={
				method: 'PUT',
				mode: 'cors',
				body: JSON.stringify({
					id: classElement.course.id,
					semester: classElement.semester,
					grade: classElement.grade,
					course_tag_ids: classElement.tags,
					hours: classElement.hours
				}),
				credentials: 'include',
				headers: header
			}
			fetch('https://api.tabula.life/history', sentData)
				.then(response => {console.log(response)})
		}
	}
}

export function enterTerm (id, text) {
	return {
		type: ENTER_TERM,
		payload: {id: id.num, term:text}
	}
}

export function changeClassYear (id, text) {
	return (dispatch, getState) => {
		const originalState = getState()
		dispatch(enterClassYear(id,text))
		const newState = getState()
		var classElement = newState.classes.classes.find((classElement) => classElement.id==id.num)
		if(classElement.canPut){
			let header = new Headers({
				'Content-Type': 'application/json'
			})
			let sentData ={
				method: 'PUT',
				mode: 'cors',
				body: JSON.stringify({
					id: classElement.course.id,
					semester: classElement.semester,
					grade: classElement.grade,
					course_tag_ids: classElement.tags,
					hours: classElement.hours
				}),
				credentials: 'include',
				headers: header
			}
			fetch('https://api.tabula.life/history', sentData)
				.then(response => {console.log(response)})
		}
	}
}

export function enterClassYear (id, text) {
	return {
		type: ENTER_CLASS_YEAR,
		payload: {id: id.num, year:text}
	}
}

export function changeEmoji (id, emojiId) {
	return (dispatch, getState) => {
		const originalState = getState()
		dispatch(toggleEmoji(id,emojiId))
		const newState = getState()
		var classElement = newState.classes.classes.find((classElement) => classElement.id==id)
		if(classElement.canPut){
			let header = new Headers({
				'Content-Type': 'application/json'
			})
			let sentData ={
				method: 'PUT',
				mode: 'cors',
				body: JSON.stringify({
					id: classElement.course.id,
					semester: classElement.semester,
					grade: classElement.grade,
					course_tag_ids: classElement.tags,
					hours: classElement.hours
				}),
				credentials: 'include',
				headers: header
			}
			fetch('https://api.tabula.life/history', sentData)
				.then(response => {console.log(response)})
		}
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

export function clickTag (id) {
	return (dispatch, getState) => {
		const originalState = getState()
		dispatch(toggleTag(id))
		const newState = getState()
		let header = new Headers({
			'Content-Type': 'application/json'
		})
		let sentData ={
			method: 'PUT',
			mode: 'cors',
			body: JSON.stringify({
				gender: newState.profile.profile.gender,
				ethnicity: newState.profile.profile.ethnicity,
				name: newState.profile.profile.name,
				tag_ids: newState.profile.tag_id,
				concentration_id: newState.profile.concentration_id,
				years_coding: newState.profile.profile.years_coding,
				year: newState.profile.profile.year
			}),
			credentials: 'include',
			headers: header
		}
		fetch('https://api.tabula.life/profile', sentData)
			.then(response => {console.log(response)})
			.catch(error => {console.log(error); dispatch(toggleTag(id))})
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

export function markReceivedClasses() {
	return{
		type: MARK_RECEIVED_CLASSES
	}
}

function fetchClasses(){
	let sentData ={
		method: 'GET',
		mode: 'cors',
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
					dispatch(markReceivedClasses())
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


function shouldFetchClassSuggestions(state){
	const classSuggestions = state.classSuggestions
	if (!classSuggestions || !classSuggestions.fetched) {
		return true
	} else if (classSuggestions.isFetching) {
		return false
	} else {
		return classSuggestions.didInvalidate
	}
}

export function fetchClassSuggestionsIfNeeded() {
	return (dispatch, getState) =>{
		if (shouldFetchClassSuggestions(getState())) {
			return dispatch(fetchClassSuggestions())
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
	let tags = []
	json.data.tags.map(tag =>{
		tags.push(tag.id)
	})
	return {
		type: RECEIVE_PROFILE,
		payload : {
			profile: json.data,
			receivedAt: Date.now(),
			tags: tags
		}
	}
}

export function fetchProfile() {
	let sentData ={
		method: 'GET',
		mode: 'cors',
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
					dispatch(getConcentrationId())
					dispatch(markReceivedProfile())
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

export function markReceivedProfile () {
	return{
		type: MARK_RECEIVED_PROFILE
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
	let sentData ={
		method: 'GET',
		mode: 'cors',
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
	let sentData ={
		method: 'GET',
		mode: 'cors',
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
	let sentData ={
		method: 'GET',
		mode: 'cors',
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

function requestUserInfo() {
	return {
		type: REQUEST_USER_INFO
	}
}

function receiveUserInfo(json) {
	return {
		type: RECEIVE_USER_INFO,
		payload : {
			userInfo: json.data,
			receivedAt: Date.now()
		}
	}
}

export function fetchUserInfo() {
	let sentData ={
		method: 'GET',
		mode: 'cors',
		body: null,
		credentials: 'include'
	}

	return dispatch => {
		dispatch(requestUserInfo())
		return fetch('https://api.tabula.life/ui', sentData)
			.then(response => response.json())
			.then(json =>
				{
					dispatch(receiveUserInfo(json))
				}
			)
	}
}

function shouldFetchUserInfo(state) {
	const userInfo = state.userInfo
	if (!userInfo || !userInfo.fetched) {
		return true
	} else if (userInfo.isFetching) {
		return false
	} else {
		return userInfo.didInvalidate
	}
}

export function fetchUserInfoIfNeeded() {
	return (dispatch, getState) => {
		if (shouldFetchUserInfo(getState())) {
			return dispatch(fetchUserInfo())
		} else {
			return Promise.resolve()
		}
	}
}


export function fetchLogin() {
	let sentData ={
		method: 'GET',
		mode: 'cors',
		body: null,
		credentials: 'include'
	}

	return dispatch => {
		dispatch(requestConcentrations())
		return fetch('https://api.tabula.life/login', sentData)
			.then(response => response.json())
			.then(json => {
				if (json.state==302){
					window.location = json.redirect
				}
			})
	}
}