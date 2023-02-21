import React from 'react';
import "components/Appointment/styles.scss";
import Header from './Header';
import Show from './Show';
import Empty from './Empty';

const Appointment = (props) => {
  return (
    <article className="appointment">
      <Header />
      <Show />
      <Empty />
    </article>
  );
};

export default Appointment;