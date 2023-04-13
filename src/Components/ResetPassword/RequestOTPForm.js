import React, { memo, useRef } from "react";
import IconBack from "../../assests/images/Icons/IconBack";
const btnStyle = {
  width: "110px",
  float: "left",
  "margin-right": "21px",
};

const RequestOTPForm = memo(
  ({ handleChange, sendOTPHandler, handleCancel }) => {
    const refTel = useRef();

    return (
      <form onSubmit={sendOTPHandler}>
        <div className="floating-label-group inputgroup">
          <div className="flex space-between floating-label-input">
            <input
              className={
                refTel?.current?.value
                  ? "form-control has-value"
                  : "form-control"
              }
              autoFocus="autofocus"
              type="tel"
              autoComplete="off"
              required
              name="mobile"
              onChange={handleChange}
              ref={refTel}
            />
            <label className="label" htmlFor="mobile">
              Username or Mobile no.
            </label>
          </div>
        </div>
        <div className="flex">
          <input
            type="submit"
            value="Send"
            className="submit-btn primary-btn"
          />
        </div>
        <div className="flex">
          <button onClick={handleCancel} className="back-btn flex item-center">
            <span>
              <IconBack />
            </span>
            Back to login
          </button>
        </div>
      </form>
    );
  }
);

export default RequestOTPForm;
