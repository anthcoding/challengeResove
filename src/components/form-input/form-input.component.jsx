import React from "react";
//STYLES
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="form-group">
      <label className="label">{label}</label>
      <input className="form-input" {...otherProps} />
    </div>
  );
};

export default FormInput;
