import React from "react";
import "./ResponseMessage.css";

const ResponseMessage = (props) => {
  const resetErrorHandler = () => {
    props.errorState(null);
  };
  const responseStyle = props.message === "SUCCESS" ? "success" : "failed";
  return (
    <div className={responseStyle}>
      <h1>{props.message}</h1>
      <button onClick={resetErrorHandler}>send request again!</button>
    </div>
  );
};

export default ResponseMessage;
