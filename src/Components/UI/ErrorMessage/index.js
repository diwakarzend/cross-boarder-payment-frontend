import React from "react";
const ErrorMessage = ({ message }) => {
  return (
    <div
      style={{
        color: "red",
        fontFamily: "verdana",
        margin: "9px 4px",
      }}
    >
      {message}
    </div>
  );
};

export default ErrorMessage;
