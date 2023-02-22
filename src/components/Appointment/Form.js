import React, { useState } from 'react';
import Button from 'components/Button';
import InterviewerList from 'components/InterviewerList';

// student:String
// interviewer:Number
// interviewers:Array
// onSave:Function
// onCancel:Function

const Form = (props) => {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const reset = () => {
    setStudent("");
    setInterviewer(null);
    props.onCancel();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
          />
        </form>
        {/* <InterviewerList
          interviewers={props.interviewers}
          onChange={setInterviewer}
          value={interviewer}

        /> */}
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={reset} danger >Cancel</Button>
          <Button onClick={props.onSave} confirm >Save</Button>
        </section>
      </section>
    </main>
  );
};

export default Form;