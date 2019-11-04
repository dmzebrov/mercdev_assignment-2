import React from "react";
import "./Button.css";

import classNames from "classnames";

function Button({ className, ...otherProps }) {
  const isTouchEventSupported =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;

  return (
    <button
      className={classNames("button", className, {
        "button_button-hover": isTouchEventSupported
      })}
      {...otherProps}
    />
  );
}

export default Button;
