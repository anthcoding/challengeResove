import React, { useState } from "react";
//STYLES
import "./modal.styles.scss";
//COMPONENTS
import FormInput from "../form-input/form-input.component";
//REDUX
import { addStudent, toggleHidden } from "../../redux/students/student.actions";
import { connect } from "react-redux";

const Modal = ({ addStudent, hidden, toggleHidden }) => {
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    age: "",
    grade: "",
    email: "",
  });

  const { firstName, lastName, age, grade, email } = credentials;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...credentials, [name]: value });
  };

  console.log(credentials);
  const handleSubmit = (event) => {
    event.preventDefault();

    addStudent(credentials);
    toggleHidden();

    setCredentials({
      firstName: "",
      lastName: "",
      age: "",
      grade: "",
      email: "",
    });
  };
  console.log(hidden);

  return (
    <div
      className="modal"
      style={{
        opacity: !hidden ? 1 : 0,
        zIndex: !hidden ? "51" : "-1",
      }}
    >
      <div className="backdrop">
        <div className="form-container">
          <div className="modal-title">Fill the credentials</div>

          <form onSubmit={handleSubmit}>
            <FormInput
              type="text"
              name="firstName"
              value={firstName}
              placholder={firstName}
              onChange={handleChange}
              label="Fist name"
              required
            />
            <FormInput
              type="text"
              name="lastName"
              value={lastName}
              required
              onChange={handleChange}
              label="Last name"
            />
            <FormInput
              type="number"
              name="age"
              value={age}
              required
              onChange={handleChange}
              label="Age"
            />
            <FormInput
              type="number"
              name="grade"
              value={grade}
              required
              onChange={handleChange}
              label="Grade"
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              required
              onChange={handleChange}
              label="Email"
            />
            <div className="buttons-container">
              <button className="submit-button" type="submit">
                Add
              </button>
              <button
                className="cancel-button"
                type="button"
                onClick={toggleHidden}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  hidden: state.student.hidden,
});

const mapDispatchToProps = (dispatch) => ({
  addStudent: (item) => dispatch(addStudent(item)),
  toggleHidden: () => dispatch(toggleHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
