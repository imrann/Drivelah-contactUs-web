import React from "react";
import useHttp from "../hooks/use-http";
import useInput from "../hooks/use-input";
import ResponseMessage from "./ResponseMessage";
import "./BasicForm.css";
import { emailValidation, msgValidation, nameValidation } from "./validations";


const BasicForm = (props) => {
  const {
    errorValue: errorMessageName,
    value: fullNameValue,
    isValid: fullNameIsValid,
    hasError: fullNameHasError,
    valueChangeHandler: fullNameChangeHandler,
    inputBlurHandler: fullNameBlurHandler,
    reset: resetFullName,
  } = useInput(nameValidation);

  const {
    errorValue: errorMessageEmail,
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(emailValidation);

  const {
    errorValue: errorMessageMsg,
    value: msgValue,
    isValid: msgIsValid,
    hasError: msgHasError,
    valueChangeHandler: msgChangeHandler,
    inputBlurHandler: msgBlurHandler,
    reset: resetMsg,
  } = useInput(msgValidation);

  const { isLoading, error, sendRequest, setError } = useHttp();

  let formIsValid = false;

  if (fullNameIsValid && msgIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    } else {
      sendRequest({
        url: "http://localhost:5000/api/usersData/postUsersData",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: {
          name: fullNameValue,
          email: emailValue,
          message: msgValue,
        },
      });
    }

    resetFullName();
    resetMsg();
    resetEmail();
  };

  const fullNameClasses = fullNameHasError
    ? "form-control invalid"
    : "form-control";
  const msgClasses = msgHasError ? "form-control invalid" : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <React.Fragment>
      {isLoading ? (
        <h1 className={"loading-text"}>Loading....</h1>
      ) : error === null ? (
        <form onSubmit={submitHandler} className={"form-control form"}>
          <div className={fullNameClasses}>
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="name"
              value={fullNameValue}
              onChange={fullNameChangeHandler}
              onBlur={fullNameBlurHandler}
            />
            {fullNameHasError && (
              <p className="error-text">{errorMessageName}.</p>
            )}
          </div>

          <div className={emailClasses}>
            <label htmlFor="name">E-Mail Address</label>
            <input
              type="text"
              id="name"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && <p className="error-text">{errorMessageEmail}</p>}
          </div>

          <div className={msgClasses}>
            <label htmlFor="msg">Message</label>
            <textarea
              id="msg"
              type="text"
              value={msgValue}
              onChange={msgChangeHandler}
              onBlur={msgBlurHandler}
              rows="6"
              cols="80"
            ></textarea>

            {msgHasError && <p className="error-text">{errorMessageMsg}</p>}
          </div>
          <div className="form-actions">
            <button disabled={!formIsValid}>Submit</button>
          </div>
          {isLoading && <h1>LOADING.....</h1>}
        </form>
      ) : error === "" ? (
        <ResponseMessage
          message={"SUCCESS"}
          errorState={setError}
        ></ResponseMessage>
      ) : (
        <ResponseMessage
          message={"FAILED"}
          errorState={setError}
        ></ResponseMessage>
      )}
    </React.Fragment>
  );
};

export default BasicForm;
