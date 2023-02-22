export function getAppointmentsForDay(state, name) {
  const apptsArr = state.days.filter((day) => day.name === name);
  const apptsDetails = apptsArr.length > 0 ? apptsArr[0].appointments.map((day) => state.appointments[day]) : [];

  return apptsDetails;
}

export function getInterviewersForDay(state, name) {
  const apptsArr = state.days.filter((day) => day.name === name);
  const apptsDetails = apptsArr.length > 0 ? apptsArr[0].interviewers.map((day) => state.interviewers[day]) : [];

  return apptsDetails;
}

export function getInterview(state, interview) {
  if (!interview) return null;

  const result = {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer]
  };

  return result;
}


