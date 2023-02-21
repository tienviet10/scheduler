import React from 'react';
import "components/InterviewerListItem.scss";
import classNames from 'classnames';

// id:number - the id of the interviewer
// name:string - the name of the interviewer
// avatar:url - a url to an image of the interviewer
// selected:boolean
// setInterviewer:function

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