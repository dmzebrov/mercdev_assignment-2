import React from "react";
import "./Input.css";

import classNames from "classnames";
import {
  validateEmail,
  validatePassword
} from "utilities/input-validation";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.state = {
      value: "",
      displayError: false,
      error: true
    };
  }

  handleChange(e) {
    var inputType = e.target.type;
    var inputValue = e.target.value;

    var inputError;

    if (this.props.validate) {
      inputError = this.validate(e, inputType, inputValue);
    } else {
      inputError = false;
    };

    this.setState({
      value: inputValue,
      error: inputError
    });

    this.props.handleChange(e, inputError);
  }

  validate(e, inputType, inputValue) {
    if (inputType === "email") {
      return !validateEmail(inputValue);
    }
    if (inputType === "password") {
      return !validatePassword(
        inputValue,
        this.props.minLength,
        this.props.maxLength,
        this.props.regexp
      );
    }
  }

  handleBlur() {
    if (this.props.validate) {
      this.setState({
        displayError: true
      });
    }
  }

  render() {
    const { className, handleChange, ...otherProps } = this.props;

    var inputClass = classNames({
      input: true,
      input_error: this.state.displayError && this.state.error
    });

    return (
      <input
        className={classNames(inputClass, className)}
        value={this.state.value}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        {...otherProps}
      />
    );
  }
}

export default Input;
