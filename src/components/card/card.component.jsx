import React from "react";
//STYLES
import "./card.styles.scss";
//ICONS
import { VscChromeClose } from "react-icons/vsc";
//REDUX
import { connect } from "react-redux";
import { deleteStudent } from "../../redux/students/student.actions.js";

const Card = ({ student, deleteStudent }) => {
  const { firstName, lastName, age, grade, email } = student;
  return (
    <div className="card">
      <div className="name  comun">
        {firstName} {lastName}
      </div>
      <div className="grade-age comun">
        <span className="span">Age: </span> {age}
      </div>
      <div className="grade-age comun">
        <span className="span">Grade:</span> {grade}
      </div>
      <div className="email">{email}</div>
      <div className="icon" onClick={() => deleteStudent(student)}>
        <VscChromeClose />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteStudent: (student) => dispatch(deleteStudent(student)),
});

export default connect(null, mapDispatchToProps)(Card);
