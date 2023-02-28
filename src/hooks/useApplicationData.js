import React, { useEffect, useReducer } from "react";
import axios from "axios";

const SET_DAY = "SET_DAY";
const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_INTERVIEW = "SET_INTERVIEW";

function reducer(state, action) {
  switch (action.type) {
    case SET_DAY:
      return { ...state, day: action.payload.day };
    case SET_APPLICATION_DATA:
      return { ...state, ...action.payload };
    case SET_INTERVIEW: {
      const appointment = {
        ...state.appointments[action.payload.id],
        interview: { ...action.payload.interview } || null
      };
      const appointments = {
        ...state.appointments,
        [action.payload.id]: appointment
      };
      const newDays = state.days.map((day) => day.name === state.day ? { ...day, spots: action.payload.interview ? day.spots - 1 : day.spots + 1 } : day);

      return { ...state, appointments, days: newDays };
    }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });


  const bookInterview = (id, interview, transition) => {
    return axios.put(`http://localhost:8001/api/appointments/${id}`, { interview }).then(() => {
      dispatch({ type: SET_INTERVIEW, payload: { id, interview } });
    });

  };

  const cancelInterview = (id) => {
    return axios.delete(`http://localhost:8001/api/appointments/${id}`).then(() => {
      dispatch({ type: SET_INTERVIEW, payload: { id, interview: null } });
    });
  };

  const setDay = day => dispatch({ type: SET_DAY, payload: { day } });

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
    ]).then((all) => {
      dispatch({ type: SET_APPLICATION_DATA, payload: { days: all[0].data, appointments: all[1].data, interviewers: all[2].data } });
    });
  }, []);

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
};

export default useApplicationData;