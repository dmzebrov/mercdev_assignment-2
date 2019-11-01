import React from "react";
import "./Button.css";

import classNames from "classnames";

function Button({ className, ...otherProps }) {
  const touchsupport =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;

  let buttonPCHoverClass = !touchsupport ? "button_button-hover" : "";

  return <button className={classNames("button", buttonPCHoverClass, className)} {...otherProps} />;
}

export default Button;
