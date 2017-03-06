let nextClassId = 0

export const ADD_CLASS = 'ADD_CLASS'
export const TOGGLE_EMOJI1 = 'TOGGLE_EMOJI1'
export const TOGGLE_EMOJI2 = 'TOGGLE_EMOJI2'
export const TOGGLE_EMOJI3 = 'TOGGLE_EMOJI3'
export const TOGGLE_EMOJI4 = 'TOGGLE_EMOJI4'
export const TOGGLE_EMOJI5 = 'TOGGLE_EMOJI5'
export const TOGGLE_EMOJI6 = 'TOGGLE_EMOJI6'
export const TOGGLE_EMOJI7 = 'TOGGLE_EMOJI7'
export const TOGGLE_EMOJI8 = 'TOGGLE_EMOJI8'
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

export const toggleEmoji1 = (id) => {
  return {
    type: TOGGLE_EMOJI1,
    payload: {id: id}
  }
}

export const toggleEmoji2 = (id) => {
  return {
    type: TOGGLE_EMOJI1,
    payload: {id: id}
  }
}

export const toggleEmoji3 = (id) => {
  return {
    type: TOGGLE_EMOJI1,
    payload: {id: id}
  }
}

export const toggleEmoji4 = (id) => {
  return {
    type: TOGGLE_EMOJI1,
    payload: {id: id}
  }
}

export const toggleEmoji5 = (id) => {
  return {
    type: TOGGLE_EMOJI1,
    payload: {id: id}
  }
}

export const toggleEmoji6 = (id) => {
  return {
    type: TOGGLE_EMOJI1,
    payload: {id: id}
  }
}

export const toggleEmoji7 = (id) => {
  return {
    type: TOGGLE_EMOJI1,
    payload: {id: id}
  }
}

export const toggleEmoji8 = (id) => {
  return {
    type: TOGGLE_EMOJI1,
    payload: {id: id}
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