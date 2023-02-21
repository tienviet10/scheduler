import React from 'react';
import "components/Appointment/styles.scss";
import Header from './Header';
import Show from './Show';
import Empty from './Empty';

const Appointment = (props) => {
  return (
    <article className="appointment">
      {props.time && <Header time={props.time} />}
      {props.interview ? <Show interview={props.interview} /> : <Empty />}
    </article>
  );
};

export default Appointment;