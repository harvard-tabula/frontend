let nextClassId = 0

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

export const enterName = (text) => {
	return {
		type: ENTER_NAME,
		payload: {name: text}
	}
}

export const enterEmail = (text) => {
	return {
		type: ENTER_EMAIL,
		payload: {email: text}
	}
}

export const enterConcentration = (text) => {
	return {
		type: ENTER_CONCENTRATION,
		payload: {concentration: text}
	}
}

export const enterCodingYears = (text) => {
	return {
		type: ENTER_CODINGYEARS,
		payload: {codingYears: text}
	}
}

export const enterGraduation = (text) => {
	return {
		type: ENTER_GRADUATION,
		payload: {graduation: text}
	}
}

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