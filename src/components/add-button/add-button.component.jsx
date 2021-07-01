import React from "react";
//STYLES
import "./add-button.styles.scss";
//ICONS
import { CgMathPlus } from "react-icons/cg";
//REDUX
import { useDispatch } from "react-redux";
import { toggleHidden } from "../../redux/students/student.actions";

const AddButton = () => {
  const dispatch = useDispatch();

  return (
    <div className="add-button" onClick={() => dispatch(toggleHidden())}>
      <CgMathPlus />
    </div>
  );
};

export default AddButton;
