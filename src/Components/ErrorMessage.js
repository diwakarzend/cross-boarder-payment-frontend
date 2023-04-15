import React, { useEffect, useState } from "react";
// import IconError from "../assets/images/IconError";
const ErrorMessage = ({ error = "", className = "", datetimestamp }) => {
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    setAlert(true);
    const timer = setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [datetimestamp]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {alert && (
        <div className={`inline-message error mt8 ${className}`}>
          {/* <IconError className="icon" /> */}
          {error}
        </div>
      )}
    </>
  );
};

export default ErrorMessage;
