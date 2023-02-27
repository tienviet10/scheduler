import React, { useEffect, useState } from "react";
import axios from "axios";

const useApplicationData = () => {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  // const bookInterview = (id, interview, transition) => {
  const bookInterview = (id, interview, transition) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    // axios.put(`http://localhost:8001/api/appointments/${id}`, { interview }).then(() => {
    //   setState(prev => ({ ...prev, appointments }));
    //   transition('SHOW');
    // }).catch(() => transition('ERROR_SAVE', true));

    return axios.put(`http://localhost:8001/api/appointments/${id}`, { interview }).then(() => {
      const newDays = state.days.map((day) => day.name === state.day ? { ...day, spots: day.spots - 1 } : day);
      setState(prev => ({ ...prev, appointments, days: newDays }));
    });

  };

  // const cancelInterview = (id, transition) => {
  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    // axios.delete(`http://localhost:8001/api/appointments/${id}`).then(() => {
    //   setState(prev => ({ ...prev, appointments }));
    //   transition('EMPTY');
    // }).catch(() => transition('ERROR_DELETE', true));
    return axios.delete(`http://localhost:8001/api/appointments/${id}`).then(() => {
      const newDays = state.days.map((day) => day.name === state.day ? { ...day, spots: day.spots + 1 } : day);
      setState(prev => ({ ...prev, appointments, days: newDays }));
    });
  };

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
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