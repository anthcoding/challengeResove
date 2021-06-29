import React from "react";
//STYLES
import "./add-button.styles.scss";
//ICONS
import { CgMathPlus } from "react-icons/cg";
//REDUX
import { connect } from "react-redux";
import { toggleHidden } from "../../redux/students/student.actions";

const AddButton = ({ toggleHidden }) => {
  return (
    <div className="add-button" onClick={toggleHidden}>
      <CgMathPlus />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(toggleHidden()),
});

export default connect(null, mapDispatchToProps)(AddButton);
