import React from 'react';
import DayListItem from './DayListItem';

// days: object
// value: string -> chosen day of the week
// onChange: function

const DayList = (props) => {
  return (
    <ul>
      {props.days.map((day) =>
        <DayListItem
          key={day.id}
          name={day.name}
          spots={day.spots}
          selected={day.name === props.value}
          setDay={props.onChange}
        />
      )}
    </ul>
  );
};

export default DayList;