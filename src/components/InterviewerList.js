import React from 'react';
import InterviewerListItem from './InterviewerListItem';
import "components/InterviewerList.scss";

// interviewers: object
// onChange: function
// value: string

const InterviewerList = (props) => {
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {props.interviewers.map((interviewer) =>
          <InterviewerListItem
            key={interviewer.id}
            name={interviewer.name}
            avatar={interviewer.avatar}
            selected={props.value === interviewer.id}
            setInterviewer={() => props.onChange(interviewer.id)} />
        )}
      </ul>
    </section>
  );
};

export default InterviewerList;