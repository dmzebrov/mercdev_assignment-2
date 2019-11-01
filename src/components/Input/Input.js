import React from "react";
import "./Input.css";

import classNames from "classnames";

function Input({ className, handleChange, ...otherProps }) {
  return (
    <input
      className={classNames("input", className)}
      onChange={handleChange}
      {...otherProps}
    />
  );
}

export default Input;
