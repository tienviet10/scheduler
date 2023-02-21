import React from 'react';
import "components/InterviewerListItem.scss";
import classNames from 'classnames';

const InterviewerListItem = (props) => {
  const selectedClass = classNames("interviewers__item", { 'interviewers__item--selected': props.selected });
  return (
    <li className={selectedClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
};

export default InterviewerListItem;