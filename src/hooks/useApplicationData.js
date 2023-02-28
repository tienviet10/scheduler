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

      // OR JUST COUNT THE NULL INTERVIEW
      console.log("interview", state.appointments[action.payload.id].interview?.interviewer);
      console.log("payload", action.payload.interview);

      const isEdit = state.appointments[action.payload.id].interview?.interviewer && action.payload.interview ? true : false;
      const newDays = state.days.map((day) => day.name === state.day && !isEdit ? { ...day, spots: action.payload.interview ? day.spots - 1 : day.spots + 1 } : day);

      // const calculateSpots = (day) => {
      //   return day.appointments.map((apptID) => state.appointments[apptID]).reduce((spots, appt) => appt.interview ? spots : spots + 1, 0);
      // };
      // const newDays = state.days.map((day) => day.name === state.day ? { ...day, spots: calculateSpots(day) } : day);

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


  const bookInterview = (id, interview) => {
    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      //dispatch({ type: SET_INTERVIEW, payload: { id, interview } });
    });
  };

  const cancelInterview = (id) => {
    return axios.delete(`/api/appointments/${id}`).then(() => {
      // dispatch({ type: SET_INTERVIEW, payload: { id, interview: null } });
    });
  };

  const setDay = day => dispatch({ type: SET_DAY, payload: { day } });

  useEffect(() => {
    const exampleSocket = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL, "protocolOne");
    exampleSocket.onopen = (event) => {
      exampleSocket.send("ping");
    };
    exampleSocket.onmessage = (event) => {
      const updatedData = JSON.parse(event.data);
      if (updatedData.type === SET_INTERVIEW) {
        dispatch({ type: SET_INTERVIEW, payload: { id: updatedData.id, interview: updatedData.interview } });
      }
    };

    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
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