import React, { useEffect, useReducer } from "react";
import axios from "axios";

const SET_DAY = "SET_DAY";
const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_INTERVIEW = "SET_INTERVIEW";
const url = process.env.REACT_APP_WEBSOCKET_URL || "wss://example.com";

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

      const isEdit = state.appointments[action.payload.id].interview?.interviewer && action.payload.interview ? true : false;
      const newDays = state.days.map((day) => day.appointments.includes(action.payload.id) && !isEdit ? { ...day, spots: action.payload.interview ? day.spots - 1 : day.spots + 1 } : day);

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
    return axios.put(`/api/appointments/${id}`, { interview });
  };

  const cancelInterview = (id) => {
    return axios.delete(`/api/appointments/${id}`);
  };

  const setDay = day => dispatch({ type: SET_DAY, payload: { day } });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      dispatch({ type: SET_APPLICATION_DATA, payload: { days: all[0].data, appointments: all[1].data, interviewers: all[2].data } });
    });

    const exampleSocket = new WebSocket(url, "protocolOne");
    exampleSocket.onopen = (event) => {
      exampleSocket.send("ping");
    };
    exampleSocket.onmessage = (event) => {
      const updatedData = JSON.parse(event.data);
      if (updatedData.type === SET_INTERVIEW) {
        dispatch({ type: SET_INTERVIEW, payload: { id: updatedData.id, interview: updatedData.interview } });
      }
    };

    return () => {
      exampleSocket.close();
    };
  }, []);

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
};

export default useApplicationData;