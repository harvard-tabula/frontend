let nextClassId = 0

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


export const addClass = () => {
	return {
		type: ADD_CLASS,
		payload: {id: nextClassId++}
	}
}

export const enterCourseID = (id, text) => {
	return {
		type: ENTER_COURSEID,
		payload: {id: id.num, courseId: text}
	}
}

export const enterGrade = (id, text) => {
	return {
		type: ENTER_GRADE,
		payload: {id: id.num, grade: text}
	}
}

export const enterWorkload = (id, text) => {
	return {
		type: ENTER_WORKLOAD,
		payload: {id: id.num, workload: text}
	}
}

export const enterSemester = (id, text) => {
	return {
		type: ENTER_SEMESTER,
		payload: {id: id.num, semester:text}
	}
}

export const toggleEmoji = (id, emojiId) => {
	console.log(id)
	console.log(emojiId)
	return {
		type: TOGGLE_EMOJI,
		payload: {id: id, emojiId: emojiId}
	}
}

export const toggleAcademicInterest = (id) => {
	return {
		type: TOGGLE_ACADEMICINTEREST,
		payload: {id: id}
	}
}

export const toggleProfessionalInterest = (id) => {
	return {
		type: TOGGLE_PROFESSIONALINTEREST,
		payload: {id: id}
	}
}

export const toggleMilestone = (id) => {
	return {
		type: TOGGLE_MILESTONE,
		payload: {id: id}
	}
}

export const toggleLanguage = (id) => {
	return {
		type: TOGGLE_LANGUAGE,
		payload: {id: id}
	}
}